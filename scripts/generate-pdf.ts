import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });

  const body = page.locator('body');
  await body.evaluate((node) => node.classList.remove('bg-indigo-50'));

  await page.pdf({
    path: 'public/resume.pdf',
    preferCSSPageSize: true,
    format: 'A4',
    margin: {
      top: '20px',
      bottom: '0px',
    },
    printBackground: true,
  });

  await browser.close();
})();
