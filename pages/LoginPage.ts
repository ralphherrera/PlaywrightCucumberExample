import { Locator, Page, expect } from "@playwright/test";
import { Basepage } from "./BasePage";

export class LoginPage extends Basepage {
  // Define Page Selectors/Elements
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly invalidLoginErrorMessage: Locator;

  // Initialize page elements using class constructor
  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("button:has-text('Log in')");
    this.invalidLoginErrorMessage = page.locator(".alert-danger");
  }

  // Define Login Page methods

  public async openIceHRMPage() {
    console.log("Opening Ice HRM Login Page");
    await this.page.goto("https://icehrm-open.gamonoid.com/login.php");
  }

  public async login(username: string, password: string) {
    console.log("Entering username and password");
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  public async assertInvalidLoginErrorMessage() {
    console.log("Checking if invalid login error message is displayed");

    
    expect(await this.invalidLoginErrorMessage.isVisible({timeout: 5000})).toBe(true);
    console.log(
        `Invalid Login Error message: [${await this.invalidLoginErrorMessage.textContent()}]`
      );
  
  }
}
