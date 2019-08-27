import {$, browser, by, element, ExpectedConditions} from 'protractor';

export class CountriesModalPo {
    private countriesModal = $('.modal-dialog');
    private countriesModalSearchField = $('.countries-modal-search input');

    isCountriesModalDisplayed() {
        return this.countriesModal.isDisplayed();
    }

    fillCountriesModalSearchField(value: string) {
        return this.countriesModalSearchField.sendKeys(value);
    }
}
