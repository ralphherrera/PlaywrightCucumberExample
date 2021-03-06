import { Before, BeforeAll, After, AfterAll } from "@cucumber/cucumber";
import {
  Browser,
  BrowserContext,
  chromium,
  ChromiumBrowser,
  firefox,
  FirefoxBrowser,
  Page,
  webkit,
  WebKitBrowser,
} from "playwright";

declare global {
  var browser: Browser;
  var context: BrowserContext;
  var page: Page;
}

BeforeAll(async () => {
  console.log("Launching browser...");
  global.browser = await chromium.launch({
    headless: false,
  });
});

Before(async () => {
  console.log("Creating new instance of context and page...");
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async () => {
  console.log("Closing context and page...");
  await global?.page.close();
  await global?.context.close();
});

AfterAll(async () => {
  console.log("Closing browser...");
  global.browser?.close();
});
