const {Builder, By, until} = require('selenium-webdriver');
driver = require('../specs/test.spec');

class HomePage {   
  get newPasteForm() {
      return driver.findElement(By.id('postform-text'));
    };  
  get pasteNameForm() {
    return driver.findElement(By.id('postform-name'));
  };  
  get pasteExpirationMenu() {
    // eslint-disable-next-line max-len    
    return driver.findElement(By.xpath('(//span[@class="select2 select2-container select2-container--default"])[2]'));
  };
  get optionOfpasteExpirationMenu() {    
    // eslint-disable-next-line max-len
    return driver.findElement(By.xpath('//li[contains( text(),"10 Minutes")]'));
  };
  async newPasteFormText(someCode) {
    await this.newPasteForm.sendKeys(someCode);
};
  async pasteNameFormText(title) {
    await this.pasteNameForm.sendKeys(title);
  };
  get createNewPasteBtn() {
    return driver.findElement(By.className('btn -big'));
  };
};
module.exports = new HomePage();

