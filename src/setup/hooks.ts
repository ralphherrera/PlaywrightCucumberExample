import { Before, BeforeAll, After, AfterAll } from "@cucumber/cucumber";
import {
  Browser,
  chromium,
  ChromiumBrowser,
  firefox,
  FirefoxBrowser,
  webkit,
  WebKitBrowser,
} from "playwright";

declare global {
  var browser: Browser;
}

BeforeAll(async () => {
  console.log("Launching browser...");
  global.browser = await chromium.launch({
    headless: false,
  });
});

AfterAll(async () => {
    console.log("Closing browser...")
    global.browser?.close();
})
