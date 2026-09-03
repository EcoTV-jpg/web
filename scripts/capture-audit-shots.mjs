import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = '/Users/mac/.gemini/antigravity/brain/af22beda-db37-430e-b4c6-f8d480673914/audit_shots';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    headless: 'new',
  });

  const routes = [
    { name: 'home', path: '/' },
    { name: 'setup', path: '/setup' },
    { name: 'devices', path: '/devices' },
    { name: 'faq', path: '/faq' },
    { name: 'not_found', path: '/non-existent-route' },
  ];

  const viewports = [
    { name: 'desktop_1440', width: 1440, height: 900 },
    { name: 'mobile_390', width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    for (const r of routes) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
      await page.goto('http://127.0.0.1:5173' + r.path, { waitUntil: 'networkidle0', timeout: 10000 });

      // Trigger scroll reveals smoothly
      await page.evaluate(async () => {
        const total = document.body.scrollHeight;
        for (let pos = 0; pos <= total; pos += 400) {
          window.scrollTo(0, pos);
          await new Promise((res) => setTimeout(res, 40));
        }
        window.scrollTo(0, 0);
      });
      await new Promise((res) => setTimeout(res, 300));

      const screenshotFile = path.join(outDir, `${r.name}_${vp.name}.png`);
      await page.screenshot({ path: screenshotFile, fullPage: true });
      console.log('Saved screenshot:', screenshotFile);
      await page.close();
    }
  }

  await browser.close();
  console.log('✅ ALL AUDIT SCREENSHOTS CAPTURED SUCCESSFULLY!');
})();
