/*ЗАДАНИЕ: При выполнении задания необходимо использовать возможности Selenium WebDriver,
юнит-тест фреймворка и концепцию Page Object. Автоматизировать следующий сценарий:
1. Открыть https://pastebin.com или аналогичный сервис в любом браузере
2. Создать New Paste со следующими деталями:
* Код: "Hello from WebDriver"
* Paste Expiration: "10 Minutes"
* Paste Name / Title: "helloweb"*/

const HomePage =  require('../specs/home.page');
const {Builder} = require('selenium-webdriver');
const {beforeEach, afterEach} = require('mocha');


describe('Pastebin test', function() {
  this.timeout(0);
  beforeEach(async function() {   
    driver = new Builder().forBrowser('chrome').build(); 
    driver.manage().setTimeouts({implicit: 10000});
  });
  afterEach(async function() {
    // this.driver.quit();
  });
  it('some test', async function() {
    await driver.get('https://pastebin.com/'); // выполняется
    await HomePage.newPasteFormText('Hello from WebDriver'); // выполняется
    await HomePage.pasteNameFormText('helloweb'); // выполняется     
    await HomePage.pasteExpirationMenu.click(); // здесь ошибка
    await HomePage.optionOfpasteExpirationMenu.click(); // здесь ошибка
    await HomePage.createNewPasteBtn.click();
  });
});

module.exports = driver;

