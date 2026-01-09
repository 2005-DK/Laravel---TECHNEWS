import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const root = process.cwd();
const mockDir = path.join(root, 'assets', 'mock_screenshots');
const outDir = path.join(root, 'assets', 'screenshots');
const width = 1280;
const height = 720;

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const files = fs.readdirSync(mockDir).filter(f => f.endsWith('.html'));

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width, height });

  for (const file of files) {
    const filePath = 'file://' + path.join(mockDir, file).replace(/\\/g, '/');
    const name = path.parse(file).name;
    console.log('Rendering', filePath);
    await page.goto(filePath, { waitUntil: 'networkidle0' });
    // small delay to allow fonts/styles to settle
    await page.waitForTimeout(300);
    const outPath = path.join(outDir, `${name}.png`);
    await page.screenshot({ path: outPath, fullPage: false });
    console.log('Saved', outPath);
  }

  await browser.close();
})();
