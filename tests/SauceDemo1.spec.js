import {test} from '@playwright/test';
import env from '../env/env.config.js';

test("@e2e End to End testing", async({page}) => {

    await page.goto(env.BASE_URI);

    await page.locator("#user-name").fill(env.USERNAME);

    await page.locator("#password").fill(env.PASSWORD);

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

    await page.waitForTimeout(7000);

});

