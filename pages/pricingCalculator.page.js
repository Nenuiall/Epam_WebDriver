const {Builder, By, until} = require('selenium-webdriver');
driver = require('../test/specs/HurtMePlenty.spec');

class PricingCalculatorPage {
    get instancesField() {          
        return driver.findElement(By.xpath('//md-input-container/child::input[@ng-model="listingCtrl.computeServer.quantity"]'));                               
    };  
    get seriesOfMachineField() {
        return driver.findElement(By.xpath('//md-select[@name="series"]/parent::md-input-container'));
    };
    get seriesOfMachine() {
        return driver.findElement(By.xpath('//md-option[@value="n1"]'));
    };
    get typeOfMachineField() {
        return driver.findElement(By.xpath('//label[text()="Machine type"]/parent::md-input-container'));
    };
    get typeOfMachine() {
        return driver.findElement(By.xpath('//md-option[@value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]'));
    };
    get gpuCheckbox() {
        return driver.findElement(By.xpath('//md-checkbox[@ng-model="listingCtrl.computeServer.addGPUs"]'));
    };
    get numberOfGpuField() {
        return driver.findElement(By.xpath('//md-select[@placeholder="Number of GPUs"]'));
    };
    get numberOfGpu() {
        return driver.findElement(By.css('md-option[value="1"][class="ng-scope md-ink-ripple"][ng-disabled]'));
    };
    get typeOfGpuField() {
        return driver.findElement(By.xpath('//md-select[@placeholder="GPU type"]'));
    };
    get typeOfGpu() {
        return driver.findElement(By.xpath('//md-option[@value="NVIDIA_TESLA_V100"]'));
    };
    get localSsdField() {
        return driver.findElement(By.xpath('//md-select[@placeholder="Local SSD"]'));
    };
    get localSsd() {
        return driver.findElement(By.xpath('(//md-option[@ng-value="item.value"][@value="2"])[2]'));
    };
    get locationOfDatacenterField() {
        return driver.findElement(By.xpath('//md-select[@placeholder="Datacenter location"]'));
    };
    get locationOfDatacenter() {
        return driver.findElement(By.xpath('//md-option[@id="select_option_239"][@value="europe-west3"]'));
    };
    get commitedUsageField() {
        return driver.findElement(By.xpath('//md-select[@placeholder="Committed usage"]'));
    };
    get commitedUsage() {
        return driver.findElement(By.xpath('(//md-option[@ng-value="1"][@value="1"])[2]'));
    };
    get addToEstimateBtn() {
        return driver.findElement(By.xpath('//button[@aria-label="Add to Estimate"]'));
    };
    get vmClass() {
        return driver.findElement(By.xpath('//div[contains (text(),"VM class: regular")]'));
    };
    get instanceType() {
        return driver.findElement(By.xpath('//div[contains (text(),"Instance type: n1-standard-8")]'));
    };
    get region() {
        return driver.findElement(By.xpath('//div[contains (text(),"Region: Frankfurt")]'));
    };
    get localSsdInfo() {
        return driver.findElement(By.xpath('//div[contains (text(),"Local SSD: 2x375 GiB")]'));
    };
    get commitmentTerm() {
        return driver.findElement(By.xpath('//div[contains (text(),"Commitment term: 1 Year")]'));
    };
    get estimatedCostInfo() {
        return driver.findElement(By.xpath('(//b[@class="ng-binding"])[1]'));
    };


    async openPricingCalculatorPage() {
        await driver.get('https://cloud.google.com/products/calculator');
    };   
    async sendTextToInstancesField(text) {       
        await driver.switchTo().frame(driver.findElement(By.xpath('//iframe[@allow="clipboard-write https://cloud-dot-devsite-v2-prod.appspot.com"]'))); 
        await driver.switchTo().frame(driver.findElement(By.xpath('//iframe[@id="myFrame"]')));        
        this.instancesField.sendKeys(text);
    };
    async selectSeriesOfMachine() {  
        await driver.wait(until.elementIsVisible(this.seriesOfMachineField), 2000).click();  
        await driver.wait(until.elementIsVisible(this.seriesOfMachine), 2000).click();       
    };
    async selectTypeOfMachine() {
        await driver.wait(until.elementIsVisible(this.typeOfMachineField), 2000).click();  
        await driver.wait(until.elementIsVisible(this.typeOfMachine), 2000).click();
    };
    async addGpuCheckbox() {
        await this.gpuCheckbox.click();        
    };
    async selectNumberOfGpu() {
        await driver.wait(until.elementIsVisible(this.numberOfGpuField), 2000).click();  
        await driver.wait(until.elementIsVisible(this.numberOfGpu), 2000).click();
    };
    async selectTypeOfGpu() {
        await driver.wait(until.elementIsVisible(this.typeOfGpuField), 2000).click();  
        await driver.wait(until.elementIsVisible(this.typeOfGpu), 2000).click();
    };
    async selectLocalSsd() {
        await driver.wait(until.elementIsVisible(this.localSsdField), 2000).click();  
        await driver.wait(until.elementIsVisible(this.localSsd), 2000).click();
    };
    async selectLocationOfDatacenter() {
        await driver.wait(until.elementIsVisible(this.locationOfDatacenterField), 2000).click();  
        await driver.wait(until.elementIsVisible(this.locationOfDatacenter), 2000).click();
    };
    async selectCommitedUsage() {
        await driver.wait(until.elementIsVisible(this.commitedUsageField), 2000).click();  
        await driver.wait(until.elementIsVisible(this.commitedUsage), 2000).click();
    };
    async clickAddToEstimateBtn() {
        await this.addToEstimateBtn.click();        
    }; 
    async fillCalculatorForm() {
        try {            
            await this.sendTextToInstancesField('4');
            await this.selectSeriesOfMachine();
            await this.selectTypeOfMachine();
            await this.addGpuCheckbox();    
            await this.selectTypeOfGpu(); 
            await this.selectNumberOfGpu();   
            await this.selectLocalSsd();
            await this.selectLocationOfDatacenter();
            await this.selectCommitedUsage();
            await this.clickAddToEstimateBtn();
        } catch(err) {
            console.log(err);
        };        
    }; 
};

module.exports = new PricingCalculatorPage();
