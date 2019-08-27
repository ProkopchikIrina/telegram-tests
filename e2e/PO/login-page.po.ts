import {$, browser, by, element, ExpectedConditions} from 'protractor';

export class LoginPagePo {
    private loginPageContent = $('.login_page');
    private accountNameInput = $('.account-name input');
    private countryInput = $('.login_phone_country_input_group div');
    private countryCodeInput = element(by.name('phone_country'));

    async loadLoginPage() {
        await browser.get('https://web.telegram.org');
        return browser.waitForAngularEnabled(false);
    }

    isLoginPageContentDisplayed() {
        return this.loginPageContent.isDisplayed();
    }

    waitAccountNameInput() {
        return  browser.wait(ExpectedConditions.visibilityOf(this.accountNameInput), 10000);
    }

    fillAccountNameInput(value: string) {
        return this.accountNameInput.sendKeys(value);
    }

    clickCountryCodeInput() {
        return this.countryCodeInput.click();
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
