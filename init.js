require("dotenv").config();
const {Builder, By} = require('selenium-webdriver');
const Chrome = require('selenium-webdriver/chrome');
const assert = require("assert");
const options = new Chrome.Options();
const flush = require('flush-cache');
flush()


module.exports= {
  assert: assert,

  By: By,
  
  mainURL:  process.env["MAIN_URL"],

  driver: new Builder().forBrowser('chrome')
            .setChromeOptions(options.addArguments("window-size=1600,1000"))
            .setChromeOptions(options.addArguments("disk-cache-size=0"))
            .setChromeOptions(options.detachDriver(true))
            .build()

}