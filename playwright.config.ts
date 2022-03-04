import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  timeout: 30000,
  retries: 0,
  use: {
    headless: false,
    ignoreHTTPSErrors: true,
    actionTimeout: 30000,
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
  reporter: [["html", { outputFolder: "tmp/test-results/"} ]],
  outputDir: "tmp/test-results/",
};

export default config;