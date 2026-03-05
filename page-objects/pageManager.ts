import { Page } from "@playwright/test";
import { NavigationPage } from "./navigationPage";
import { FormLayoutPage } from "./formLayoutsPage";
import { DatepickerPage } from "./datepickerPage";

/**
 * Used to navigate to different pages, i.e. the left side menu.
 */
export class PageManager {
    private readonly navigationPage: NavigationPage;
    private readonly formLayoutsPage: FormLayoutPage;
    private readonly datepickerPage: DatepickerPage;

    constructor(page: Page) {
        this.navigationPage = new NavigationPage(page);
        this.formLayoutsPage = new FormLayoutPage(page);
        this.datepickerPage = new DatepickerPage(page);
    }

    navigate() {
        return this.navigationPage
    }

    onFormLayoutsPage() {
        return this.formLayoutsPage
    }

    onDatepickerPage() {
        return this.datepickerPage
    }
}