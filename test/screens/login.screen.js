class LoginScreen {
    get #StoreAdress(){return $('android.widget.EditText')}
    get #continue() { return $('id:bottom_button')}
    get #emailAddress() {return $('id:input').$('android.widget.EditText')}
    get #continueEmail() {return $('id:login_continue_button')}
    get #password() {return $('android=new UiSelector().text("Password")')}

    async setStoreAddress (url){
        await this.#StoreAdress.setValue(url)
    }

    async continue (){
        await this.#continue.click()
    }

    async setEmailAddress (email){
        await this.#emailAddress.setValue(email)
    }

    async continueEmail (){
        await this.#continueEmail.click()
    }

    async setPassword (password){
        await this.#password.setValue(password)
        await this.#continue.click()
    }
}

module.exports = new LoginScreen()