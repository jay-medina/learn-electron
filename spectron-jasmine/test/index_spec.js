var Application = require('spectron').Application;
var electron = require('electron')

/**
 * Spectron documentation: https://github.com/electron/spectron
 * app.client: Spectron uses WebdriverIO as the client.
 *   - Spectron has added addition methods to the client api. These are located
 *     on the spectron documentation.
 *   - API is located here: http://webdriver.io/api.html
 */
describe('Sample Spectron Runner', function () {
  let app;
  const TIMEOUT = 10000;

  beforeEach(function (done) {
    app = new Application({
      path: electron,
      args: ['src']
    })

    app.start().then(done);
  });

  afterEach(function (done) {
    if (app && app.isRunning()) {
      app.stop().then(done)
    }
  })

  it('opens a window', expectWindowCountToBe(1));

  it('should get a url', expectURLTitleToBe('https://duckduckgo.com', 'DuckDuckGo'));


  function expectWindowCountToBe(count) {
    return function (done) {
      app.client.waitUntilWindowLoaded(TIMEOUT).getWindowCount().then(actual => {
        expect(actual).toBe(count)
        done()
      });
    }
  }

  function expectURLTitleToBe(url, title) {
    return function (done) {
      app.client.url(url).getTitle().then(actual => {
        expect(actual).toBe(title);
        done()
      })
    }
  }
});