exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./e2e/TestSuites/login-page.spec.ts'],
    onPrepare() {
        require('ts-node').register({
            project: 'tsconfig.json'
        });
    },
    baseUrl: 'https://web.telegram.org',
    SELENIUM_PROMISE_MANAGER: false
};
