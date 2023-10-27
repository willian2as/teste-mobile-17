const { join } = require('path')

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'williansouza_yqTrjx',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '7ax6dZZpeGqdoMMi9fpD',
    hostname: 'hub.browserstack.com',
    services: [
        [
            'browserstack',
            {
                app: 'bs://b2c8a4a95a9b9200c2e7f264e6159fb24a641bca',
                buildIdentifier: "${BUILD_NUMBER}",
                browserstackLocal: true
            },
        ]
    ],
    //baseURL: 'http://localhost',
    //port: 4723,
    //services: ['appium'],

    capabilities: [{
        //"platformName": "Android",
        //    "appium:options": {
        //        "automationName": "UiAutomator2",
        //        "platformVersion": "9.0",
        //        "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        //        "deviceName": "ebac-qe",
        //        "noReset": true
        //    },
        //    "appium:appPackage": "com.woocommerce.android",
        //    "appium:appActivity": ".ui.main.MainActivity",
        //    "appium:appWaitActivity": ".ui.login.LoginActivity"
        'bstack:options': {
            deviceName: 'Samsung Galaxy S9',
            platformVersion: '8.0',
            platformName: 'android',
            projectName: "Meu primeiro projeto em Device Farm",
            buildName: 'build1',
            sessionName: 'teste_ebac',
            debug: true,
            networkLogs: true
            
        }
    }],
    maxInstances: 1,
    waitforTimeout: 300000,
    specs: [
        './test/specs/produto.e2e.js'
    ],
    framework: 'mocha',
    mochaOpts: {
        timeout: 300000
    }
    

}