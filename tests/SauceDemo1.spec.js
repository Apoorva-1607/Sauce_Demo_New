import {test} from '@playwright/test';

test("End to End testing", async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator("#user-name").fill("standard_user");

    await page.locator("#password").fill("secret_sauce");

    await page.waitForTimeout(2000);

    await page.locator("#login-button").click();

    await page.waitForTimeout(2000);

    await page.locator(".product_sort_container").selectOption({ label: "Price (high to low)" });

    await page.locator("//button[@id='add-to-cart-sauce-labs-fleece-jacket']").click();

    await page.waitForTimeout(2000);

    await page.locator(".shopping_cart_link").click();

    await page.waitForTimeout(2000);

    await page.locator("#checkout").click();

    await page.waitForTimeout(3000);

    await page.locator("#first-name").fill("Apoorva");

    await page.locator("#last-name").fill("Patte");

    await page.locator("#postal-code").fill("411033");

    await page.waitForTimeout(2000);

    await page.locator("#continue").click();

    await page.waitForTimeout(2000);

    await page.locator("#finish").click();

    await page.waitForTimeout(5000);

});