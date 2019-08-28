import { $, $$, by, element } from 'protractor';

export class CountriesModalPo {
    private countriesModal = $('.countries_modal_wrap');
    private countriesModalSearchField = $('.countries_modal_search input');
    private countriesListDisplayedValues = $$('.countries_modal_country_name');

    isCountriesModalDisplayed() {
        return this.countriesModal.isDisplayed();
    }

    fillCountriesModalSearchField(value: string) {
        return this.countriesModalSearchField.sendKeys(value);
    }

    getCountriesListDisplayedValues() {
        return this.countriesListDisplayedValues.getText();
    }

    clickCountry(countryName: string) {
        return element(by.cssContainingText('.countries_modal_country_name', countryName)).click();
    }
}
