import { Page } from '@playwright/test';

export class PageBase {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForNSeconds(seconds: number) {
        await this.page.waitForTimeout(seconds * 1000);
    }
}
