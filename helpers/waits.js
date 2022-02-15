const {Builder, By, until} = require('selenium-webdriver');
driver = require('../test/specs/BringItOn.spec');

class myWaits {
    async waitbyClN(myClass, time) {
        await driver.wait(until.elementLocated(By.className(myClass)),time);
      };
    async waitbyXp(myXpath, time) {
        await driver.wait(until.elementLocated(By.xpath(myXpath)),time);
      };
};

module.exports = new myWaits();
