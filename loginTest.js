const { Builder, By, until } = require('selenium-webdriver'); 
const chrome = require('selenium-webdriver/chrome'); 
 
async function runLoginTest() { 
    // 1. Setup Chrome in Headless Mode (This is what you fixed for GitHub Actions!) 
    let options = new chrome.Options(); 
    options.addArguments('--headless');  
 
    // 2. Initialize the WebDriver 
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build(); 
 
    try { 
        // 3. Navigate to the website 
        console.log("Navigating to SauceDemo..."); 
        await driver.get('https://www.saucedemo.com/'); 
 
        // 4. Find the username and password fields and type data 
        await driver.findElement(By.id('user-name')).sendKeys('standard_user'); 
        await driver.findElement(By.id('password')).sendKeys('secret_sauce'); 
 
        // 5. Click the Login Button 
        await driver.findElement(By.id('login-button')).click(); 
 
        // 6. Explicit Wait: Wait until the inventory page loads (Your other roadblock fix!) 
        let inventoryList = await driver.wait(until.elementLocated(By.className('inventory_list')), 
5000); 
         
        // 7. Assertion (Did it work?) 
        if (inventoryList) { 
            console.log("TEST PASSED: Successfully logged in and loaded inventory."); 
        } 
 
    } catch (error) { 
        console.log("TEST FAILED: " + error); 
    } finally { 
        // 8. Always close the browser 
        await driver.quit(); 
    } 
} 
 
runLoginTest();