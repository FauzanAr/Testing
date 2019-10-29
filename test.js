// Importing selenium webdriver for our web driver
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');
var chai = require('chai');
var expect = chai.expect;

// Setting path for code to opening the chrome browser
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

describe('First Test', function(){
    before(function(){
        browser.get('http://beasiswa.polinema.ac.id/');
    });

    after(function(){
        browser.quit();
    });

    it('Test case the title should "Beasiswa Polinema"', function(){
        browser.getTitle().then(function(title){
            expect(title).equals('Beasiswa Polinema');
        })
    });

    it('Test case the title not should "Testing"', function(){
        browser.getTitle().then(function(title){
            expect(title).to.not.equals('Testing');
        })
    })
});