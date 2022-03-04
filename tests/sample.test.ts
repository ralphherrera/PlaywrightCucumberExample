import { test, expect } from "@playwright/test";

test.describe("First Test Suite @FirstTestSuite @Test", () => {
  test("Simple basic test", async ({ page }) => {
    await page.goto("https://example.com/");
    const pageTitleHeaderText = await page.locator("h1").textContent();
    console.log(`Page Title Header Text: [${pageTitleHeaderText}]`);

    expect(pageTitleHeaderText).toEqual("Example Domain");
    await page.waitForTimeout(1500);
  });
});

test.describe.parallel.only("Working with elements @Test", () => {
  test("Clicking on elements", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");

    await page.click("#signin_button");
    await page.click("input[value= 'Sign in']");
    const invalidLoginErrorMessage = await page
      .locator(".alert-error")
      .textContent();
    console.log(`Invalid Login Error message: [${invalidLoginErrorMessage}]`);

    expect(invalidLoginErrorMessage).toContain("wrong");

    await page.waitForTimeout(1500);
  });

  test("Working with inputs", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/index.html");

    await page.click("#signin_button");
    await page.type("#user_login", "asd");
    await page.fill("#user_password", "ssadd");
    await page.click("input[value= 'Sign in']");

    const invalidLoginErrorMessage = await page
      .locator(".alert-error")
      .textContent();
    console.log(`Invalid Login Error message: [${invalidLoginErrorMessage}]`);

    expect(invalidLoginErrorMessage).toContain("wrong");
  });
});

test("Assertions @AssertionTest", async ({ page }) => {
  await page.goto("https://example.com/");
  await expect(page).toHaveURL("https://example.com/");
  await expect(page).toHaveTitle("Example Domain");

  await expect(page.locator("h1")).toBeVisible();
  await expect(page.locator("h1")).toHaveText("Example Domain");
});


test("Screenshots", async ({ page }) => {
  await page.goto("https://example.com/");
  await page.screenshot()
});