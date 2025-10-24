import { expect, test } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Create v1/i);
  });

  test("should have main navigation", async ({ page }) => {
    await page.goto("/");
    // Add your specific navigation checks here based on your homepage structure
    await expect(page.locator("body")).toBeVisible();
  });
});
