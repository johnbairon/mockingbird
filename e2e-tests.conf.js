var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {
                args: ['--disable-web-security']
            }
        },
        baseUrl: 'http://localhost:8100',
        specs: [
            'test/e2e/**/*.tests.js'
        ],
        jasmineNodeOpts: {
            isVerbose: true,
        },

        onPrepare: function() {
          jasmine.getEnv().addReporter(
            new HtmlScreenshotReporter({
              dest: 'target/screenshots',
              filename: 'my-report.html'
            })
          );
        }
};
