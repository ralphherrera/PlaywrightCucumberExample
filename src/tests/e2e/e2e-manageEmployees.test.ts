import { test, expect } from "@playwright/test";

test.describe.parallel("Manage Employee Test Suite", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://icehrm-open.gamonoid.com/login.php");
  });

  test("Search Employee", async ({ page }) => {
    await page.type("#username", "admin");
    await page.fill("#password", "admin");
    await page.click("button:has-text('Log in')");

    await page.click("#employeeLink");

    await page.type("#advanced_search_searchTerm", "Rapu");
    await page.click("button[class*='search-button']");

    await page.waitForSelector("td > span", { timeout: 5000 });
    const allEmployees = await page.$$eval(
      "tbody[class='ant-table-tbody']",
      (employees) => {
        return employees.map((employee) => {
          const employeeNumber = employee.querySelector("td:nth-child(2)");
          const firstName = employee.querySelector("td:nth-child(3)");
          const lastName = employee.querySelector("td:nth-child(4)");
          return {
            employeeNumber: employeeNumber.textContent.trim(),
            firstName: firstName.textContent.trim(),
            lastName: lastName.textContent.trim(),
          };
        });
      }
    );

    console.log(`${allEmployees.length} users found`);
    console.log(allEmployees);


    expect(allEmployees[0].firstName).toContain("Rapu");
    // Iterate map
    // for (const [key, value] of Object.entries(allEmployees)) {
    //   console.dir(`Key: [${key}] -- Value [${value.employeeNumber}]`);
    // }
  });
});
