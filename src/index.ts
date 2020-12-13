import { chromium } from "playwright";
import type { Browser, BrowserType } from "playwright";

const screenshot = async (browserType: BrowserType<Browser>): Promise<void> => {
  const browser: Browser = await browserType.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("http://whatsmyuseragent.org/");
  await page.screenshot({ path: `example-${browserType.name()}.png` });
  await browser.close();
};

(async () => {
  screenshot(chromium);
})();
