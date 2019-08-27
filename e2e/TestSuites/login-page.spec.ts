import { LoginPagePo } from '../PO/login-page.po';
import { CountriesModalPo } from '../PO/countries-modal.po';
import {browser} from "protractor";

fdescribe('[LOGIN_PAGE]', () => {
    let loginPage: LoginPagePo,
        countriesModal: CountriesModalPo;

    beforeAll(async() => {
        loginPage = new LoginPagePo();
        countriesModal = new CountriesModalPo();
    });

    describe('[LOGIN_PAGE]', () => {
        it('[LOGIN_PAGE] Login page is loaded', async() => {
            await loginPage.loadLoginPage();
            expect(await loginPage.isLoginPageContentDisplayed()).toBeTruthy();
        });

        it('[LOGIN_PAGE] Changed value is entered in "country code" input field', async() => {
            const changedValue = '333';
            await loginPage.fillCountryCodeInput(changedValue);
            expect(await loginPage.getCountryCodeInputValue()).toEqual(changedValue);
        });

        it('[LOGIN_PAGE] Value of "country" input field automatically changed to "France"', async() => {
            expect(await loginPage.getCountryInputValue()).toEqual('France');
        });

        it('[LOGIN_PAGE] "Country code" input field is cleared', async() => {
            await loginPage.clearCountryCodeInput();
            expect(await loginPage.getCountryCodeInputValue()).toEqual('');
        });

        it('[LOGIN_PAGE] Value of "country" input field automatically changed to "Unknown"', async() => {
            expect(await loginPage.getCountryInputValue()).toEqual('Unknown');
        });
    });

    fdescribe('[LOGIN_PAGE]', () => {
        it('[LOGIN_PAGE] Login page is loaded', async() => {
            await loginPage.loadLoginPage();
            expect(await loginPage.isLoginPageContentDisplayed()).toBeTruthy();
        });

        it('[LOGIN_PAGE] "Countries" modal is displayed', async() => {
            await loginPage.clickCountryInput();
            expect(await countriesModal.isCountriesModalDisplayed()).toBeTruthy();
        });

        it('[LOGIN_PAGE] Value of "country" input field automatically changed to "France"', async() => {
            await countriesModal.fillCountriesModalSearchField('bel');
        });

        it('[LOGIN_PAGE] "Country code" input field is cleared', async() => {
            await browser.sleep(9000);

            await loginPage.clearCountryCodeInput();
            expect(await loginPage.getCountryCodeInputValue()).toEqual('');
        });

        it('[LOGIN_PAGE] Value of "country" input field automatically changed to "Unknown"', async() => {
            expect(await loginPage.getCountryInputValue()).toEqual('Unknown');
        });
    });
});
