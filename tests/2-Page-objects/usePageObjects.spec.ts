import { test } from '@playwright/test';
import { PageManager } from '../../page-objects/pageManager';

// TODO: First inspect the page-objects/ folder and its contents.
test.describe('Using Page Objects', () => {

    let pageManager: PageManager;

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/');
        pageManager = new PageManager(page);  // Initialize the PageManager with the current page
    });

    test.describe('On the "Form Layouts" page', () => {
        test.beforeEach(async () => {
            // TODO: Open the Form Layouts page using the `pageManager` > `navigationPage` > `openFormLayoutsPage()`
        });

        test('Submit inline form', async () => {
            const name = 'John Doe';
            const email = 'john.doe@example.com';
            const rememberMe = true;

            // TODO: Submit the "Inline Form" using `submitInlineForm()`
            await pageManager.onFormLayoutsPage().submitInlineForm(
                name,
                email,
                rememberMe
            );

            // TODO: wait for 1 second using the page base class' waitForNSeconds

            // TODO: Assert that the values are entered correctly and the submit button is pressed
        });
    });

    test.describe('On the "Datepicker" page', () => {
        test.beforeEach(async () => {
            // TODO: Open the Datepicker page using the `pageManager` > `navigationPage` > `openDatepickerPage()`
        });

        test("Select tomorrow's date", async () => {
            const daysAfterToday = 1;

            // TODO: Select tomorrow's date using `selectSingleDateAfterToday()`

            // TODO: Assert that the correct date is selected
        });
    });
});
