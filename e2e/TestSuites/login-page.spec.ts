import { LoginPagePo } from '../PO/login-page.po';
import { CountriesModalPo } from '../PO/countries-modal.po';

describe('[LOGIN_PAGE]', () => {
    let loginPage: LoginPagePo,
        countriesModal: CountriesModalPo;

    beforeAll(() => {
        loginPage = new LoginPagePo();
        countriesModal = new CountriesModalPo();
    });

    describe('[LOGIN_PAGE] Change country code', () => {
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

    describe('[LOGIN_PAGE] Select country using "countries" modal', () => {
        it('[LOGIN_PAGE] Login page is loaded', async() => {
            await loginPage.loadLoginPage();
            expect(await loginPage.isLoginPageContentDisplayed()).toBeTruthy();
        });

        it('[LOGIN_PAGE] "Countries" modal is displayed', async() => {
            await loginPage.clickCountryInput();
            expect(await countriesModal.isCountriesModalDisplayed()).toBeTruthy();
        });

        it('[LOGIN_PAGE] List of countries is filtered', async() => {
            await countriesModal.fillCountriesModalSearchField('bel');
            expect(await countriesModal.getCountriesListDisplayedValues()).toEqual(['Belarus', 'Belgium', 'Belize']);
        });

        it('[LOGIN_PAGE] Selected country is shown in "country" input', async() => {
            const countryName = 'Belgium';
            await countriesModal.clickCountry(countryName);
            expect(await loginPage.getCountryInputValue()).toEqual(countryName);
        });

        it('[LOGIN_PAGE] Code is automatically changed and corresponds selected country', async() => {
            expect(await loginPage.getCountryCodeInputValue()).toEqual('+32');
        });
    });
});
