
import { test, expect } from '@playwright/test';

test.describe('Smart Home', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200');
        await page.getByText('IoT Dashboard').click();
    });

    test('Turn off the light & Coffee Maker', async ({ page }) => {
        // TODO: Use Codegen recording to interact with the light and coffee maker controls to turn them off

        // Assert that the light is turned off by checking that the status card has the "off" class
        const lightStatusCard = page.locator('ngx-status-card[ng-reflect-title="Light"]');
        const lightStatus = lightStatusCard.locator('nb-card');
        await lightStatus.scrollIntoViewIfNeeded();
        await expect(lightStatus).toHaveClass(/off/);

        // Repeat for the coffee maker
        const coffeeMakerStatusCard = page.locator('ngx-status-card[ng-reflect-title="Coffee Maker"]');
        const coffeeMakerStatus = coffeeMakerStatusCard.locator('nb-card');
        await coffeeMakerStatus.scrollIntoViewIfNeeded();
        await expect(coffeeMakerStatus).toHaveClass(/off/);
    });

    test('Heat to 30 degrees', async ({ page }) => {
        // TODO: Use Codegen recording to interact with the temperature dragger and set it to 30 degrees

        const tempBox = page.locator('[tabtitle="Temperature"] ng-temperature-dragger');
        await tempBox.scrollIntoViewIfNeeded();
        await expect(tempBox).toContainText('30');
    });

    test('Show security footage of camera #1, then camera #2', async () => {
        // TODO: Use Codegen recording to interact with the camera controls to:
        //  - scroll to "Security Cameras"
        //  - show footage of camera #1
        //  - assert that the correct footage is displayed
        //  - click the 4 squares icon to show the camera selection menu again
        //  - show footage of camera #2
        //  - assert that the correct footage is displayed
    });
});
