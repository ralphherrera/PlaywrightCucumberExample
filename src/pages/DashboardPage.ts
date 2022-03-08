import { Locator, Page, expect } from "@playwright/test";
import { Basepage } from "./BasePage";

export class DashboardPage extends Basepage {
  readonly loginStatus: Locator; // Might be put in a separate page class (LeftNavigationPanePage)
  readonly manageEmployeeLink: Locator;
  readonly manageCompanyLink: Locator;
  readonly manageUsersLink: Locator;
  readonly manageProjectsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.loginStatus = page.locator(".user-panel a:nth-child(2)");
    this.manageEmployeeLink = page.locator("#employeeLink");
    this.manageCompanyLink = page.locator("#companyLink");
    this.manageUsersLink = page.locator("#usersLink");
    this.manageProjectsLink = page.locator("#projectsLink");
  }

  public async assertLoginStatus(loginStatus: string) {
    console.log("Checking login status");
    const displayedLoginStatus = (await this.loginStatus.innerText()).trim();
    console.log(`Login Status: [${displayedLoginStatus}]`);
    expect(displayedLoginStatus).toEqual(loginStatus);
  }

  public async clickDashboardCardLink(linkLabel: string) {
    console.log(`Clicking [${linkLabel}] link`);

    switch (linkLabel.toLowerCase()) {
      case "manage employees":
        await this.manageEmployeeLink.click();
        break;
      case "manage company":
        await this.manageCompanyLink.click();
        break;
      case "manage users":
        await this.manageUsersLink.click();
        break;
      case "manage projects":
        await this.manageProjectsLink.click();
        break;
      default:
        console.error(`Invalid Link Label provided: [${linkLabel}]!`);
        break;
    }
  }
}
