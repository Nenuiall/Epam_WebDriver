const { Builder, By, until } = require('selenium-webdriver');
driver = require('../test/specs/HurtMePlenty.spec');

class GoogleCloudPage {
  get searchBtn() {
    return driver.findElement(By.xpath('//form[@class="devsite-search-form"]'));        
  };
  get searchBox() {
    return driver.findElement(By.xpath('//input[@class="devsite-search-field devsite-search-query"]'));        
  };  
  get calculatorLink() {
    return driver.findElement(By.xpath('//div[@class="gs-title"]//b[contains(text(),"Google Cloud Pricing Calculator")]'));          
  };

  async openGoogleCloudPage() {
    await driver.get('https://cloud.google.com/');
  };
  async sendSearchText(text) {
    await this.searchBox.sendKeys(text);    
  };  
  async clickSearchBtn() {    
      await driver.wait(until.elementIsVisible(this.searchBtn), 1000).click();  
  };
  async clickCalculatorLink() {
    await driver.wait(until.elementIsVisible(this.calculatorLink), 15000).click();
  }; 
  async goToPricingCalculatorPage() {
    await this.openGoogleCloudPage();
    await this.clickSearchBtn();
    await this.sendSearchText('Google Cloud Platform Pricing Calculator\n');        
    await this.clickCalculatorLink(); 
  };   
};


module.exports = new GoogleCloudPage();
