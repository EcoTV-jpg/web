import https from "https";
import fs from "fs";

const HOST = "www.teleview.me";
const KEY = "c8d1f2e4b6a94f38a7c0e5b9d3f1a2e7";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// Read URLs from sitemap.xml
const sitemap = fs.readFileSync("public/sitemap.xml", "utf-8");
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

console.log(`[IndexNow] Preparing submission for ${urlList.length} URLs on ${HOST}...`);

const payload = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlList
});

const options = {
  hostname: "api.indexnow.org",
  port: 443,
  path: "/indexnow",
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  console.log(`[IndexNow] Response Status: ${res.statusCode} (${res.statusMessage})`);
  let body = "";
  res.on("data", chunk => body += chunk);
  res.on("end", () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`[IndexNow] Successfully submitted ${urlList.length} URLs to IndexNow protocol.`);
    } else {
      console.log(`[IndexNow] Server responded with: ${body || "No body"}`);
    }
  });
});

req.on("error", (e) => {
  console.error(`[IndexNow] Error submitting to IndexNow API: ${e.message}`);
});

req.write(payload);
req.end();
