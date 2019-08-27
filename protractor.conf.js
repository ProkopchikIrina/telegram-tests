exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    onPrepare() {
        require('ts-node').register({
            project: 'tsconfig.json'
        });
    },
    SELENIUM_PROMISE_MANAGER: false
};
