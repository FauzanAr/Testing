// Importing selenium webdriver for our web driver
var webdriver = require('selenium-webdriver');

// Importing webdriver for chrome, because we using chrome
var browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

// Inputing the url of tester website

browser.get('http://beasiswa.polinema.ac.id/');

var promise = browser.getTitle();

promise.then(function(title){
    console.log(title);
});

// Closing the test
browser.quit();