const {Builder, By, until} = require('selenium-webdriver');
driver = require('../test/specs/BringItOn.spec');

class myWaits {
    async myWaitbyClN(myClass, time) {
        await driver.wait(until.elementLocated(By.className(myClass)),time);
      };
    async myWaitbyXp(myXpath, time) {
        await driver.wait(until.elementLocated(By.xpath(myXpath)),time);
      };
};

module.exports = new myWaits();
