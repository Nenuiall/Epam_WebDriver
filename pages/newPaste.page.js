const {Builder, By, until} = require('selenium-webdriver');
driver = require('../test/specs/BringItOn.spec');

class newPastePage {
  get tagSyntax() {
    return driver.findElement(By.xpath('(//a[@class="btn -small h_800"])[1]'));   
  }; 
  get textOfNewPaste() {
    return driver.findElement(By.xpath('//ol[@class="text"]'));
  };  
};


module.exports = new newPastePage();

