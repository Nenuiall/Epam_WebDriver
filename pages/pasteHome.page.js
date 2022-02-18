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
  get syntaxHighlightingMenu() {
    return driver.findElement(By.xpath('(//span[@class="select2-selection select2-selection--single"])[1]'));
  };
  get syntaxHighlightingField() {
    return driver.findElement(By.xpath('//input[@class="select2-search__field"]'));    
  };
  get pasteExpirationMenu() {
    return driver.findElement(By.xpath('(//span[@class="select2-selection select2-selection--single"])[2]'));    
  };
  get optionOfpasteExpirationMenu() {
    return driver.findElement(By.xpath('//li[contains( text(),"10 Minutes")]'));       
  };

  async openPastePage() {
    await driver.get('https://pastebin.com/'); 
  }; 
  async clickPasteBtn() {
    await driver.wait(until.elementIsVisible(this.pasteBtn), 1000).click(); 
  };   
  async selectSyntaxHighlighting() {
    await driver.wait(until.elementIsVisible(this.syntaxHighlightingMenu), 5000).click();
    let syntaxField = await driver.wait(until.elementLocated(this.syntaxHighlightingField), 5000);
    await syntaxField.sendKeys('Bash\n');       
  };
  async selectPasteExpiration() {
    await driver.wait(until.elementIsVisible(this.pasteExpirationMenu), 5000).click();
    await driver.wait(until.elementIsVisible(this.optionOfpasteExpirationMenu), 5000).click();
  };  
  async sendNewPasteFormText(text) {
    await this.newPasteForm.sendKeys(text);
  };
  async sendPasteNameFormText(title) {
    await this.pasteNameForm.sendKeys(title);
  };  
};


module.exports = new HomePage();

