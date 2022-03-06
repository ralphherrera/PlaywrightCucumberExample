import { test } from "@playwright/test";
import { DashboardPage } from "../../pages/DashboardPage";
import { LoginPage } from "../../pages/LoginPage";

test.describe.parallel.only("Login IceHRM Test", () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    // Initialize page object classes before each tests
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);

    await loginPage.openIceHRMPage();
  });

  test("User can login with valid credentials", async ({ page }) => {
    await loginPage.login("admin", "admin");
    await dashboardPage.assertLoginStatus("Logged In");
  });

  test("User cannot login with invalid credentials", async ({ page }) => {

    await loginPage.login("invalid", "aaaa");
    await loginPage.assertInvalidLoginErrorMessage();
  });
});
