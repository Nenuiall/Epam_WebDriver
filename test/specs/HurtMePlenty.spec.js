/*При выполнении задания необходимо использовать возможности Selenium WebDriver, 
юнит-тест фреймворка и концепцию Page Object. Автоматизировать следующий сценарий:

1. Открыть https://cloud.google.com/
2. Нажав кнопку поиска по порталу вверху страницы, ввести в поле поиска"Google Cloud Platform Pricing Calculator"
3. Запустить поиск, нажав кнопку поиска.
4. В результатах поиска кликнуть "Google Cloud Platform Pricing Calculator" и перейти на страницу калькулятора.
5. Активировать раздел COMPUTE ENGINE вверху страницы
6. Заполнить форму следующими данными:
    * Number of instances: 4
    * What are these instances for?: оставить пустым
    * Operating System / Software: Free: Debian, CentOS, CoreOS, Ubuntu, or other User Provided OS
    * VM Class: Regular
    * Instance type: n1-standard-8    (vCPUs: 8, RAM: 30 GB)
    * Выбрать Add GPUs
        * Number of GPUs: 1
        * GPU type: NVIDIA Tesla V100
    * Local SSD: 2x375 Gb
    * Datacenter location: Frankfurt (europe-west3)
    * Commited usage: 1 Year
7. Нажать Add to Estimate
8. Проверить соответствие данных следующих полей: VM Class, Instance type, Region, local SSD, commitment term
9. Проверить что сумма аренды в месяц совпадает с суммой получаемой при ручном прохождении теста.*/

const GoogleCloudPage =  require('../../pages/googleCloud.page');
const PricingCalculatorPage = require('../../pages/pricingCalculator.page');
const {Builder, until} = require('selenium-webdriver');
const {before, after} = require('mocha');
const chai = require('chai');
const {expect, assert} = require('chai');


describe('Google cloud test', async function() {  
  before(async function() {
    driver = new Builder().forBrowser('chrome').build();        
  });
  after(async function() {
    driver.quit();
  });

  it('VM Class should be "regular"', async function() {     
    await GoogleCloudPage.goToPricingCalculatorPage();
    await PricingCalculatorPage.fillCalculatorForm();

    let expectedVmClass = 'VM class: regular';
    let actualVmClass = await driver.wait(until.elementIsVisible(PricingCalculatorPage.vmClass), 5000).getText();
    expect(actualVmClass).to.be.equal(expectedVmClass);
  });

  it('Instance type should be "n1-standard-8"', async function() {
    let expectedInstanceType = 'n1-standard-8';
    let actualInstanceType = await driver.wait(until.elementIsVisible(PricingCalculatorPage.instanceType), 5000).getText();
    expect(actualInstanceType).to.be.equal(expectedInstanceType);            
  }); 

  it('Region should be "Frankfurt"', async function() {
    let expectedRegion = 'Region: Frankfurt';
    let actualRegion = await driver.wait(until.elementIsVisible(PricingCalculatorPage.region), 5000).getText();
    expect(actualRegion).to.be.equal(expectedRegion);
  });

  it('Local SSD should be "2x375 GiB"', async function() {
    let expectedLocalSsd = 'Local SSD: 2x375 GiB';
    let actualLocalSsd = await driver.wait(until.elementIsVisible(PricingCalculatorPage.localSsdInfo), 5000).getText();
    expect(actualLocalSsd).to.be.equal(expectedLocalSsd);
  });

  it('Commitment term should be "1 Year"', async function() {
    let expectedCommitmentTerm = 'Commitment term: 1 Year';
    let actualCommitmentTerm = await driver.wait(until.elementIsVisible(PricingCalculatorPage.commitmentTerm), 5000).getText();
    expect(actualCommitmentTerm).to.be.equal(expectedCommitmentTerm);
  });  

  it('Estimated Cost should be "1,082.77 USD per 1 month"', async function() {
    let costByManualTesting = 'Estimated Component Cost: USD 1,082.77 per 1 month';
    let actualCost = await driver.wait(until.elementIsVisible(PricingCalculatorPage.estimatedCostInfo), 5000).getText();
    expect(actualCost).to.be.equal(costByManualTesting);
  });
});
  
module.exports = driver;


