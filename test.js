// Importing selenium webdriver for our web driver
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');

// Setting path for code to opening the chrome browser
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

//  This is first test to get title of the website
async function firstTest(){
    try{
        var browser = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();

        await
        // Inputing the url of tester website
        browser.get('http://beasiswa.polinema.ac.id/');

        await browser.getTitle().then(function(title){
            console.log(title)
        });
        browser.quit();
    }
    catch(err){
        handleFailure(err, browser)
    }
}


// This is second test for click home feature



// This running the first test
firstTest();




// This is error handle
function handleFailure(err, browser){
    console.log('Something went wrong! \n', err.stack,'\n');

    browser.quit();
}