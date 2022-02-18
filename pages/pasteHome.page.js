const {Builder, By, until} = require('selenium-webdriver');
driver = require('../tests_samples/BringItOn.spec');

class HomePage {   
  get newPasteForm() {
    return driver.findElement(By.id('postform-text'));
  };  
  get pasteNameForm() {
    return driver.findElement(By.id('postform-name'));
  }; 
  get pasteBtn() {
    return driver.findElement(By.className('btn -big'));       
  };
  get  syntaxHighlightingMenu() {
    return driver.findElement(By.xpath('(//span[@class="select2-selection select2-selection--single"])[1]'));
  };
  get optionOfsyntaxHighlightingMenu() {
    return driver.findElement(By.xpath('(//li[contains( text(),"Bash")])[1]'));    
  };
  get pasteExpirationMenu() {
    return driver.findElement(By.xpath('(//span[@class="select2-selection select2-selection--single"])[2]'));    
  };
  get optionOfpasteExpirationMenu() {
    return driver.findElement(By.xpath('//li[contains( text(),"10 Minutes")]'));       
  };

  async clickPasteBtn() {
    await driver.wait(until.elementIsVisible(this.pasteBtn), 1000).click(); 
  };   
  async clickSyntaxHighlightingMenu() {
    await driver.wait(until.elementIsVisible(this.syntaxHighlightingMenu), 1000).click();       
  };
  async clickOptionOfsyntaxHighlightingMenu() {
    await driver.wait(until.elementIsVisible(this.optionOfsyntaxHighlightingMenu), 1000).click();
  };
  async clickPasteExpirationMenu() {
    await driver.wait(until.elementIsVisible(this.pasteExpirationMenu), 1000).click();
}; 
  async clickOptionOfpasteExpirationMenu() { 
    await driver.wait(until.elementIsVisible(this.optionOfpasteExpirationMenu), 1000).click();
  };   
  async sendNewPasteFormText(text) {
    await this.newPasteForm.sendKeys(text);
};
  async sendPasteNameFormText(title) {
    await this.pasteNameForm.sendKeys(title);
  };  
};

module.exports = new HomePage();
