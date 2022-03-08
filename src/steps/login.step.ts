import { Given, When, Then, BeforeStep } from "@cucumber/cucumber";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

BeforeStep(async () => {
  loginPage = new LoginPage(global.page);
  dashboardPage = new DashboardPage(global.page);
});

Given("I open the iCE HRM website", async () => await loginPage.openIceHRMPage());

When("I login as admin", async () => {
  await loginPage.login("admin", "admin");
});

Then("I should be redirected to the dashboard page", async () => {
  await dashboardPage.assertLoginStatus("Logged In");
});
