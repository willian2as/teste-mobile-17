const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");

describe('Access Admin Panel', () => {
    it('Should login with valid credentials', async () => {
        await $('id:button_skip').click()
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress('http://lojaebac.ebaconline.art.br/')
        await loginScreen.continue()
        await loginScreen.setEmailAddress('lojaebacqe@gmail.com')
        await loginScreen.continueEmail()
        await loginScreen.setPassword('GD*peToHNJ1#c$sgk08EaYJQ')
        
        expect(await myStoreScreen.getStoreLogo()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    });
});