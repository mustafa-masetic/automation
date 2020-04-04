const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Example Test with Mocha and Chai', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it.only('should search for "sulzer gmbh" and click on link with a name "Standorte"', async () => {
        await driver.get('https://www.google.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
        await driver.findElement(By.linkText('Standorte')).click();
        const title = await driver.getTitle();

        expect(title).to.equal('Unsere Standorte - Wir sind weltweit für Sie da');
    });

    after(async () => driver.quit());
});