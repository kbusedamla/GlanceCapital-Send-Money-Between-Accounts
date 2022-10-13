Feature('Login');

Scenario('test something', ({ I }) => {
    I.amOnPage('https://dev.glancecapital.com');
    I.wait(2);
    I.click('//a[@class="btn btn-link"]');
    I.wait(2);
    I.fillField('//input[@id="input-email"]',"osman.saral+70@gmail.com");
    I.fillField('//input[@id="input-password"]',"123qweASD");
    I.click('//button[@id="btn-continue"]');
    I.wait(2);
    I.click('//button[text()="Move Money"]');
    I.click('//div[text()="Between Accounts"]');
    I.fillField('//input[@class="form-control"]',"1");
    I.fillField('//input[@id="note"]',"Test Note");
    I.click('//button[text()="Next"]');






});
