# Setup codeceptjs

## Initialize node project
 - Initialize npm project: `npm init`
 - Install codeceptjs dependency: `npm install --save -dev codeceptjs`
 - Initialize codeceptjs: `codeceptjs init`
 - Install selenium-standalone dependency: `npm install --save -dev selenium-standalone`
 - Install selenium server: `node_modules/selenium-standalone/bin/selenium-standalone install`
 - Start selenium server: `node_modules/selenium-standalone/bin/selenium-standalone start`
 - Create file with name: `example_test.js`

 ## Add first test in example.js
 ```
Feature('testing with codeceptjs');

Scenario('should search for "sulzer gmbh" and click on link with a name "Standorte"', (I) => {
    I.amOnPage('https://google.com');
    I.waitForVisible({name: 'q'}, 5);
    I.fillField({name: 'q'}, 'sulzer gmbh');
    I.pressKey('Enter');
    I.waitForVisible(locate('a').withText('Standorte'), 5);
    I.click(locate('a').withText('Standorte'));
    I.seeInCurrentUrl('https://www.sulzer.de/de/standorte/');
});
```
- Run steps: `npx codeceptjs run --steps`
