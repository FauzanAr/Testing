// Importing selenium webdriver for our web driver
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var chromedriver = require('chromedriver');
var test = require('selenium-webdriver/testing');

// Setting path for code to opening the chrome browser
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

var browser = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();

test.describe('First Test', function(){
    test.before(function(){
        browser.get('http://beasiswa.polinema.ac.id/');
    });

    test.after(function(){
        browser.quit();
    });

    test.it('The Test Case', function(){
        browser.getTitle().then(function(){
            expect(title).equals('fauzan');
        })

        browser.sleep();
    });
});



//-----------------------------=====-------------------------------------------------====----------------

//  This is first test to get title of the website
// async function firstTest(){
//     try{
//         var browser = new webdriver.Builder()
//         .withCapabilities(webdriver.Capabilities.chrome())
//         .build();

//         await
//         // Inputing the url of tester website
//         browser.get('http://beasiswa.polinema.ac.id/');

//         await browser.getTitle().then(function(title){
//             expect(title).to.equal('Fauzan');
//         });
//         browser.quit();
//     }
//     // Catching the fail try of the function
//     catch(err){
//         handleFailure(err, browser)
//     }
// }


// This is second test for click home feature
// async function secodTest(){
//     try{
//         var browser = new webdriver.Builder()
//         .withCapabilities(webdriver.Capabilities.chrome())
//         .build();

//         await

//         browser.get('http://beasiswa.polinema.ac.id/persyaratan');
//     }

//     catch(err){
//         handleFailure(err, browser)
//     }
// }


// This running the first test
// firstTest();



// This is error handle
// function handleFailure(err, browser){
//     console.log('Something went wrong! \n', err.stack,'\n');
//     browser.quit();
// }