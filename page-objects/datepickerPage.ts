import { expect, Page } from "@playwright/test";
import { PageBase } from "./pageBase";

export class DatepickerPage extends PageBase {
    constructor(page: Page) {
        super(page);
    }

    private async selectDateAfterToday(daysFromToday: number) {
        let date = new Date();
        date.setDate(date.getDate() + daysFromToday);
        const expectedDate = date.getDate().toString();
        const expectedMonthShort = date.toLocaleString('En-US', { month: 'short' });
        const expectedMonthLong = date.toLocaleString('En-US', { month: 'long' });
        const expectedYear = date.getFullYear();
        const expectedDateString = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`;

        let calendarMonthYear = await this.page.locator('nb-calendar-view-mode').textContent();
        const expectedMonthYear = `${expectedMonthLong} ${expectedYear}`;
        while (!calendarMonthYear.includes(expectedMonthYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click();
            calendarMonthYear = await this.page.locator('nb-calendar-view-mode').textContent();
        }

        await this.page.locator(`.day-cell.ng-star-inserted`).getByText(expectedDate, { exact: true }).click();
        return expectedDateString;
    }

    async selectSingleDateAfterToday(daysFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Form Picker');
        await calendarInputField.click();
        const expectedDateString = await this.selectDateAfterToday(daysFromToday);
        await expect(calendarInputField).toHaveValue(expectedDateString);
    }

    async selectRangeOfDatesAfterToday(startDaysFromToday: number, endDaysFromToday: number) {
        const calendarInputField = this.page.getByPlaceholder('Range Picker');
        await calendarInputField.click();
        const expectedStartDateString = await this.selectDateAfterToday(startDaysFromToday);
        const expectedEndDateString = await this.selectDateAfterToday(endDaysFromToday);
        const expectedRangeString = `${expectedStartDateString} - ${expectedEndDateString}`;
        await expect(calendarInputField).toHaveValue(expectedRangeString);
    }
}
