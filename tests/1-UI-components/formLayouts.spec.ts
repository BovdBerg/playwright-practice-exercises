import { test, expect, Locator } from '@playwright/test';

test.describe('Form Layouts', () => {

    let usingTheGridForm: Locator;

    /**
     * Navigate to the right page before each test
     */
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200');
        await page.getByText('Forms').click();
        await page.getByText('Form Layouts').click();

        // TODO: Initialize the form locator here
        // usingTheGridForm = 
    });

    test('Fill form input fields', async () => {
        const email = 'test@test.com';
        const password = 'password123';  // NOSONAR
        let usingTheGridEmailInput: Locator;
        let usingTheGridPasswordInput: Locator;
        // TODO: assign correct locator for the email & password input fields here, hint: chain from the `usingTheGridForm` locator to find the email input field within the form

        // TODO: fill the input fields with the `email` and `password` values

        expect(usingTheGridEmailInput).toHaveValue(email);  // Locator assertion
        expect(await usingTheGridEmailInput.inputValue()).toEqual(email);  // Generic assertion

        expect(usingTheGridPasswordInput).toHaveValue(password);
    });

    test('Check radio option 1', async () => {
        let radioOption1: Locator;
        // TODO: assign correct locator for the first radio option here, hint: chain from `usingTheGridForm` again

        // TODO: check the first radio option here, using the `force: true` option to bypass any potential issues with element visibility or interactivity

        await expect(radioOption1).toBeChecked();  // Locator assertion
        expect(await radioOption1.isChecked()).toBeTruthy();  // Generic assertion
    });
});
