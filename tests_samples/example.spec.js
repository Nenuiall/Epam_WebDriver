
const {Builder, By} = require('selenium-webdriver');

(async function firstScript() {
  try {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://pastebin.com/');
    
    driver.manage().setTimeouts({implicit: 5000});
    driver.manage().window().maximize();

    const newPaste = await driver.findElement(By.id('postform-text'));
    await newPaste.sendKeys('Hello from WebDriver');

    // eslint-disable-next-line max-len
    const pasteExpiration = await driver.findElement(By.xpath('(//span[@class="select2 select2-container select2-container--default"])[2]'));
    await pasteExpiration.click();

    // eslint-disable-next-line max-len
    const elemOfList = await driver.findElement(By.xpath('//li[contains( text(),"10 Minutes")]'));
    await elemOfList.click();

    // eslint-disable-next-line max-len
    const pasteName = await driver.findElement(By.id('postform-name'));
    await pasteName.sendKeys('helloweb');

    await driver.quit();
  } catch (error) {
    console.log(error);
  }
})();
