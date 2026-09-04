import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");

const productSlugs = ["1-month", "3-months", "6-months", "12-months"];

function extractText(html) {
  // Remove script and style tags
  const clean = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return clean;
}

function extractHeadings(html, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const matches = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (text) matches.push(text);
  }
  return matches;
}

function getNGrams(words, n) {
  const ngrams = new Set();
  for (let i = 0; i <= words.length - n; i++) {
    ngrams.add(words.slice(i, i + n).join(" "));
  }
  return ngrams;
}

function jaccardSimilarity(setA, setB) {
  const intersection = new Set([...setA].filter((x) => setB.has(x)));
  const union = new Set([...setA, ...setB]);
  return intersection.size / union.size;
}

console.log("==================================================");
console.log("   PRODUCT PAGES CANNIBALIZATION & SIMILARITY AUDIT");
console.log("==================================================\n");

const pageData = {};

for (const slug of productSlugs) {
  const filePath = path.resolve(distDir, `iptv-subscription/${slug}/index.html`);
  const rawHtml = fs.readFileSync(filePath, "utf-8");
  const text = extractText(rawHtml);
  const words = text.toLowerCase().match(/\b[a-z0-9'-]+\b/g) || [];

  const h1 = extractHeadings(rawHtml, "h1");
  const h2 = extractHeadings(rawHtml, "h2");
  const h3 = extractHeadings(rawHtml, "h3");

  pageData[slug] = {
    wordCount: words.length,
    words,
    words1Gram: new Set(words),
    words2Gram: getNGrams(words, 2),
    words3Gram: getNGrams(words, 3),
    h1,
    h2,
    h3,
  };

  console.log(`[${slug}]`);
  console.log(`  Word Count: ${words.length} words`);
  console.log(`  H1: "${h1.join(" | ")}"`);
  console.log(`  H2 Count: ${h2.length}`);
  console.log(`  H3 Count: ${h3.length}`);
  console.log("");
}

console.log("--- PAIRWISE SIMILARITY ANALYSIS ---");
for (let i = 0; i < productSlugs.length; i++) {
  for (let j = i + 1; j < productSlugs.length; j++) {
    const slugA = productSlugs[i];
    const slugB = productSlugs[j];

    const sim1Gram = jaccardSimilarity(pageData[slugA].words1Gram, pageData[slugB].words1Gram);
    const sim2Gram = jaccardSimilarity(pageData[slugA].words2Gram, pageData[slugB].words2Gram);
    const sim3Gram = jaccardSimilarity(pageData[slugA].words3Gram, pageData[slugB].words3Gram);

    console.log(`${slugA} vs ${slugB}:`);
    console.log(`  1-gram Jaccard: ${(sim1Gram * 100).toFixed(1)}%`);
    console.log(`  2-gram Jaccard: ${(sim2Gram * 100).toFixed(1)}%`);
    console.log(`  3-gram Jaccard: ${(sim3Gram * 100).toFixed(1)}% (Phrase Overlap)`);
    console.log("");
  }
}

console.log("--- UNIQUE HEADINGS CHECK ---");
for (const slug of productSlugs) {
  console.log(`\nHeadings for ${slug}:`);
  console.log(`  H1: ${pageData[slug].h1[0]}`);
  console.log(`  Key H2s:`);
  pageData[slug].h2.forEach((h) => console.log(`    - ${h}`));
}
