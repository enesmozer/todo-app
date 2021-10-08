// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'app should work': (browser) => {
    browser
      .init()
      .waitForElementVisible('#app', 5000)
      .waitForElementVisible('#app .title', 5000)
      .waitForElementVisible('#app .table', 5000)
      .click('#app .new-item')
      .waitForElementVisible('#app .todo-form', 5000)
      .waitForElementVisible('#app .submit-button', 5000)
      .waitForElementVisible('#app [data-name]', 5000)
      .waitForElementVisible('#app [data-description]', 5000)
      .click('#app [data-name]')
      .pause(1000)
      .setValue('#app [data-name]', 'buy some milk')
      .setValue('#app [data-description]', 'you should buy milk for dessert')
      .click('#app .submit-button')
      .assert.containsText('#app', 'buy some milk')
      .assert.containsText('#app', 'you should buy milk for dessert')
      .pause(5000)
      .end();
  },
};
