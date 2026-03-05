import { Page } from '@playwright/test';
import { PageBase } from './pageBase';

export class FormLayoutPage extends PageBase {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Submits the "Using the Grid" form with the provided details.
     * @param email 
     * @param password 
     * @param option the option to select (e.g., "Option 1", "Option 2", etc.)
     */
    async submitUsingTheGridForm(email: string, password: string, option: string) {
        const usingTheGridForm = this.page.locator('nb-card', { hasText: 'Using the Grid' });
        await usingTheGridForm.getByRole('textbox', { name: 'Email' }).fill(email);
        await usingTheGridForm.getByRole('textbox', { name: 'Password' }).fill(password);
        await usingTheGridForm.getByRole('radio', { name: option }).check({ force: true });
        await usingTheGridForm.getByRole('button', { name: 'Sign in' }).click();
    }

    /**
     * Submits the inline form with the provided details.
     * @param name full name
     * @param email email address
     * @param rememberMe whether to check the "Remember me" checkbox
     */
    async submitInlineForm(name: string, email: string, rememberMe: boolean) {
        const inlineForm = this.page.locator('nb-card', { hasText: 'Inline form' });
        await inlineForm.getByRole('textbox', { name: 'Jane Doe' }).fill(name);
        await inlineForm.getByRole('textbox', { name: 'Email' }).fill(email);
        const rememberMeCheckbox = inlineForm.getByRole('checkbox', { name: 'Remember me' });
        if (rememberMe) {
            await rememberMeCheckbox.check({ force: true });
        } else {
            await rememberMeCheckbox.uncheck({ force: true });
        }
        await inlineForm.getByRole('button', { name: 'Submit' }).click();
    }
}
