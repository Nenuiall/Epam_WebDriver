const { Builder, By, until } = require('selenium-webdriver');
driver = require('../test/specs/Hardcore.spec');

class YopmailPage {
  get randomEmailAddressBtn() {
      return driver.findElement(By.xpath('//a[@title="Disposable Email Address Generator creates a new temporary email address for you in one click!"]//b[1]'));        
  }; 
  get newAdressBtn() {
      return driver.findElement(By.xpath('//span[@class="notmobile"][normalize-space()="Copy to clipboard"]'));        
  };
  get newAdressField() {
      return driver.findElement(By.xpath('//div[@id="egen"]'));        
  };
   
  async getRandomEmailAddress() {
      await this.randomEmailAddressBtn.click();
  };    
};

module.exports = new YopmailPage();
