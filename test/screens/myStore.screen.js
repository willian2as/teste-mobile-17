class myStoreScreen {
    get #myStoreName(){return $('id:toolbar_subtitle')}
    get #myStoreLogo(){return $('(//android.widget.FrameLayout[@content-desc="My store"])[1]/android.view.ViewGroup/android.view.View')}

    
    async getStoreName(){
        return await this.#myStoreName.getText()
    }
    async getStoreLogo(){
        await this.#myStoreLogo.waitForExist()
        return await this.#myStoreLogo.isDisplayed()
    }
}

module.exports = new myStoreScreen()