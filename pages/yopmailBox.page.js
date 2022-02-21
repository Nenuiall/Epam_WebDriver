const {Builder, By, until} = require('selenium-webdriver');
driver = require('../test/specs/Hardcore.spec');

class YopmailBoxPage {
    get estimatedMonthlyCost() {
        return driver.findElement(By.xpath('//h3[normalize-space()="USD 1,082.77"]'));        
    };
    get mailFrame() {
        return driver.findElement(By.xpath('//iframe[@id="ifmail"]'));        
    }; 
  };
  
  
  module.exports = new YopmailBoxPage();
