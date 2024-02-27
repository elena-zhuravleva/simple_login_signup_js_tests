import { driver, assert, By, mainURL } from "../init";

(async function firstTest() {
  
  try {
    await driver.get(mainURL);
    let title = await driver.getTitle();
    assert.equal("Web form", title);
    console.log(title)

    await driver.manage().setTimeouts({implicit: 5000});
    let loginLink = await driver.findElement(By.xpath("//span[contains(text(),'Log in')]")).findElement(By.xpath("./.."));
    console.log(loginLink.getCssValue())
    await loginLink.click();

    loginInput = await driver.findElement(By.xpath("//input[@id='auth_email']"))
    await loginInput.clear()
    await loginInput.sendKeys('VasiaAA');

    passwordInput = driver.findElement(By.xpath("//input[@id='auth_password']"))
    await passwordInput.clear()
    await passwordInput.sendKeys('1234');

    signInButton = await driver.findElement(By.xpath("//button[contains(text(),'Sign in')]"))
    await signInButton.click()

    title = await driver.getTitle();
    assert.equal("Signin", title);


    console.log(title)

    await driver.sleep(3000)


  
    // let textBox = await driver.findElement(By.name('my-text'));
    // let submitButton = await driver.findElement(By.css('button'));
  
  
    // let message = await driver.findElement(By.id('message'));
    // let value = await message.getText();
    // assert.equal("Received!", value);
  } catch (e) {
    console.log(e)
  } 
  // finally {
  //   await driver.quit();
  // }
}())