const {Builder, By, until} = require('selenium-webdriver');
driver = require('../test/specs/BringItOn.spec');
const myWaits =  require('../helpers/waits');

class HomePage {   
  get newPasteForm() {
    return driver.findElement(By.id('postform-text'));
  };  
  get pasteNameForm() {
    return driver.findElement(By.id('postform-name'));
  }; 
  get pasteBtn() {
    await myWaits.myWaitbyClN('btn -big',1000);    
  };
  get  syntaxHighlightingMenu() {
    await myWaits.myWaitbyXp('(//span[@class="select2-selection select2-selection--single"])[1]',10000);
  };
  get optionOfsyntaxHighlightingMenu() {
    await myWaits.myWaitbyXp('(//li[contains( text(),"Bash")])[1]',10000);
  };
  get pasteExpirationMenu() {
    await myWaits.myWaitbyXp('(//span[@class="select2-selection select2-selection--single"])[2]',10000);
  };
  get optionOfpasteExpirationMenu() {
    await myWaits.myWaitbyXp('//li[contains( text(),"10 Minutes")]',10000);    
  };

  async clickPasteBtn() {
    try {
      await this.pasteBtn.click();    
    } catch(err) {
      console.log(err);
    };    
  };   
  async clickSyntaxHighlightingMenu() {
    try {
      await this.syntaxHighlightingMenu.click();      
    } catch(err) {
      console.log(err);
    };   
  };
  async clickOptionOfsyntaxHighlightingMenu() {
    try {
      await this.optionOfsyntaxHighlightingMenu.click();
    } catch(err) {
      console.log(err);
    };     
  };
  async clickPasteExpirationMenu() {
    try {
      await this.pasteExpirationMenu.click();
    } catch(err) {
      console.log(err);
    };    
}; 
  async clickOptionOfpasteExpirationMenu() { 
    try {
      await this.optionOfpasteExpirationMenu.click();
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

