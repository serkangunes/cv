import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.evaluate(() => document.fonts.ready);

  await page.pdf({
    path: 'public/resume.pdf',
    preferCSSPageSize: true,
    format: 'A4',
    margin: {
      top: '20px',
      bottom: '0px',
    },
    printBackground: true,
    tagged: true,
  });

  await browser.close();
})();
