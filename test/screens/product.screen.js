class productScreen {
    get #addImage(){return $('id:textAddImage')}
    get #addTitle(){return $('id:editText')}
    get #addDescription(){return $('android=new UiSelector().text("Describe your product")')}
    get #botaoRetorno(){return $('~Navigate up')}
    get #addPrice(){return $('android=new UiSelector().text("Add price")')}
    get #okButton(){return $('android=new UiSelector().text("OK")')}
    get #inventory(){return $('android=new UiSelector().text("Inventory")')}
    get #publishButton(){return $('id:menu_publish')}

    async addingImage(){
        await this.#addImage.click()
        await $('android=new UiSelector().text("WordPress media library")').click()
        await $('android.widget.ImageView').click()
        await $('id:mnu_confirm_selection').click()
        await this.#botaoRetorno.click()
    }

    async addingTitle(nomeProduto){
        await this.#addTitle.setValue(nomeProduto)
    }

    async productDescription(descricao){
        await this.#addDescription.click()
        await $('id:visualEditor').setValue(descricao)
        await this.#botaoRetorno.click()
    }

    async addingPrice(rPrice, sPrice){
        await this.#addPrice.click()
        await $('android=new UiSelector().text("Regular price")').setValue(rPrice)
        await $('android=new UiSelector().text("Sale price")').setValue(sPrice)
        await $('id:switchSetting_switch').click()
        await $('id:scheduleSale_startDate').click()
        await $('~23 October 2023').click()
        await this.#okButton.click()
        await driver.touchAction([ {action: 'longPress', x: 0, y: 1000}, { action: 'moveTo', x: 0, y: 10}, 'release' ]);
        await $('id:scheduleSale_endDate').click()
        await $('~31 October 2023').click()
        await this.#okButton.click()
        await $('id:product_tax_status').click()
        await $('android=new UiSelector().text("None")').click()
        await $('id:product_tax_class').click()
        await $('android=new UiSelector().text("Taxa zero")').click()
        await this.#botaoRetorno.click()
    }
    async stockControl(sku, quantidade){
        await this.#inventory.click()
        await $('id:product_sku').$('android.widget.EditText').setValue(sku)
        await $('id:manageStock_switch').click()
        await $('id:product_stock_quantity').$('android.widget.EditText').setValue(quantidade)
        await $('id:spinner_edit_text').click()
        await $('android=new UiSelector().text("Do not allow")').click()
        await this.#botaoRetorno.click()
    }
    async publishingProduct(){
        await this.#publishButton.click()
    }

}

module.exports = new productScreen()