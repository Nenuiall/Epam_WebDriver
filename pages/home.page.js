const {Builder, By, until} = require('selenium-webdriver');
driver = require('../test/specs/BringItOn.spec');

class HomePage {   
  get newPasteForm() {
    return driver.findElement(By.id('postform-text'));
  };  
  get pasteNameForm() {
    return driver.findElement(By.id('postform-name'));
  };  
  async clickPasteBtn() {
    try {
      let newPasteBtn = await driver.wait(until.elementLocated(By.className('btn -big')),1000);
    newPasteBtn.click();
    } catch(err) {
      console.log(err);
    };    
  };   
  async clickSyntaxHighlightingMenu() {
    try {
      let syntaxHighlightingMenu = await driver.wait(until.elementLocated(By.xpath('(//span[@class="select2-selection select2-selection--single"])[1]')),10000);
      syntaxHighlightingMenu.click();
    } catch(err) {
      console.log(err);
    };   
  };
  async clickOptionOfsyntaxHighlightingMenu() {
    try {
      let optionOfsyntaxHighlightingMenu = await driver.wait(until.elementLocated(By.xpath('(//li[contains( text(),"Bash")])[1]')),10000);
    optionOfsyntaxHighlightingMenu.click();
    } catch(err) {
      console.log(err);
    };     
  };
  async clickPasteExpirationMenu() {
    try {
      let pasteExpirationMenu = await driver.wait(until.elementLocated(By.xpath('(//span[@class="select2-selection select2-selection--single"])[2]')),10000);
    pasteExpirationMenu.click();
    } catch(err) {
      console.log(err);
    };    
}; 
  async clickOptionOfpasteExpirationMenu() { 
    try {
      let optionOfpasteExpirationMenu = await driver.wait(until.elementLocated(By.xpath('//li[contains( text(),"10 Minutes")]')),10000);
    optionOfpasteExpirationMenu.click();
    } catch(err) {
      console.log(err);
    };    
  };   
  async sendNewPasteFormText(text) {
    await this.newPasteForm.sendKeys(text);
};
  async sendPasteNameFormText(title) {
    await this.pasteNameForm.sendKeys(title);
  };  
};
module.exports = new HomePage();

