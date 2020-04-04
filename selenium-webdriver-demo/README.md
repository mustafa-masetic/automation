# Setup selenium webdriver

## Initialize node project
 - Initialize npm project: `npm init`
 - Instal Chromedriver: `npm install --save -dev chromedriver`
 - Create file with name: `example.js`

 ## Add first test in example.js
 ```
const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('sulzer gmbh', Key.RETURN);
    await driver.wait(until.titleIs('sulzer gmbh - Google-Suche'), 5000);
  } finally {
    await driver.quit();
  }
})();
```
 - Go to `cd ./node_modules/.bin`
 - Run test: `node ./../../example.js`

 ## Add second test in example-with-mocha.js
 - create new file: `example-with-mocha.js`
 - install mocha: `npm install --save -dev mocha`
 - install chai: `npm install --save -dev chai`
 - Add code in `example-with-mocha.js`

 ```
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
 ```
  - Go to `cd ./node_modules/.bin`
  - Run test: `node mocha ./../../example-with-mocha.js --timeout 15000`