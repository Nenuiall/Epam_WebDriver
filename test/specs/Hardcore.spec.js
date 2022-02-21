const GoogleCloudPage =  require('../../pages/googleCloud.page');
const PricingCalculatorPage = require('../../pages/pricingCalculator.page');
const YopmailPage = require('../../pages/yopmailHome.page');
const YopmailBoxPage = require('../../pages/yopmailBox.page');
const {Builder, until} = require('selenium-webdriver');
const {before, after} = require('mocha');
const chai = require('chai');
const {expect, assert} = require('chai');
const yopmailBoxPage = require('../../pages/yopmailBox.page');


describe('Google cloud test', async function() {  
  before(async function() {
    driver = new Builder().forBrowser('chrome').build();        
  });
  after(async function() {
    // driver.quit();
  });

  it('Total Estimated Monthly Cost should be "USD 1,082.77"', async function() {     
      await GoogleCloudPage.goToPricingCalculatorPage();
      await PricingCalculatorPage.fillCalculatorForm();      
      await driver.navigate().to('https://yopmail.com/en/');
      await YopmailPage.getRandomEmailAddress();
      let generatedAdress = await YopmailPage.newAdressField.getText();
      let urlOfYopmailBox = 'https://YOPmail.com?' + generatedAdress;
      await driver.navigate().back();
      await driver.navigate().back();
      await driver.sleep(10000);
      await PricingCalculatorPage.clickEmailEstimateBtn();
      await PricingCalculatorPage.sendEmailToEmailEstimateField(generatedAdress);
      await PricingCalculatorPage.clickEmailSendBtn();
      await driver.navigate().to(urlOfYopmailBox);
      await driver.sleep(10000);
      await driver.switchTo().frame(yopmailBoxPage.mailFrame);

      let expectedEstimatedCost = 'USD 1,082.77';
      let estimatedCostFromYopmailBox = await driver.wait(until.elementIsVisible(YopmailBoxPage.estimatedMonthlyCost), 1000).getText();
      expect(estimatedCostFromYopmailBox).to.be.equal(expectedEstimatedCost);
  });
});
  
module.exports = driver;

