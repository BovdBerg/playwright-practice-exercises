import { Page } from '@playwright/test';

/**
 * Base class for all page objects.
 * Contains common methods and properties that can be used across different pages.
 */
export class PageBase {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForNSeconds(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }
}
