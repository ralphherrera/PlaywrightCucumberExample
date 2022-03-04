import { PlaywrightTestConfig } from "@playwright/test";

const globalTimeOutMS = 20000;

const config: PlaywrightTestConfig = {
  timeout: globalTimeOutMS,
  retries: 0,
  testDir: "tests/e2e",
  use: {
    headless: false,
    ignoreHTTPSErrors: true,
    actionTimeout: globalTimeOutMS,
    viewport: {
      width: 1920,
      height: 1080,
    },
    video: {
      mode: "retain-on-failure",
      size: {
        width: 1920,
        height: 1080,
      },
    },
    screenshot: "only-on-failure",
  },
  expect: {
    timeout: globalTimeOutMS,
  },
  outputDir: "tmp/test-results/",
  reporter: "html",
};

export default config;