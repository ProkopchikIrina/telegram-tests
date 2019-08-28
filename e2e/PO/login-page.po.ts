import { $, browser, by, element } from 'protractor';

export class LoginPagePo {
    private loginPageContent = $('.login_page');
    private countryInput = $('.login_phone_country_input_group div');
    private countryCodeInput = element(by.name('phone_country'));

    async loadLoginPage() {
        await browser.get(browser.baseUrl);
        return browser.waitForAngularEnabled(false);
    }

    isLoginPageContentDisplayed() {
        return this.loginPageContent.isDisplayed();
    }

    async fillCountryCodeInput(value: string) {
        await this.countryCodeInput.clear();
        return this.countryCodeInput.sendKeys(value);
    }

    clearCountryCodeInput() {
        return this.countryCodeInput.clear();
    }

    getCountryInputValue() {
        return this.countryInput.getText();
    }

    clickCountryInput() {
        return this.countryInput.click();
    }

    getCountryCodeInputValue() {
        return this.countryCodeInput.getAttribute('value');
    }
}
