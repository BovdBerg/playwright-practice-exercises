import { test, expect, Locator } from '@playwright/test';

test.describe('Tooltips', () => {
    /**
     * Navigate to the right page before each test
     */
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200');
        await page.getByText('Modal & Overlays').click();
        await page.getByText('Tooltip').click();
    });


    test('Show tooltip on hover', async ({ page }) => {
        let coloredTooltips: Locator;  // TODO: locate the colored tooltips card here
        let defaultColoredTooltip: Locator;  // TODO: locate the default button within the colored tooltips card here, hint: use the `hasText` option

        // TODO: hover over `defaultColoredTooltip` here

        const shownTooltip = page.locator('nb-tooltip').textContent();
        expect(shownTooltip).toEqual('This is tooltip');
    });
});
