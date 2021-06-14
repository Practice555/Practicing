import {Config} from "protractor";
export let config : Config = {
    directConnect : true,
    // capabilities: {
        //'browserName': 'chrome'
    //},
    //specs: ['testingAPIGET.js'],
    specs: ['spec1.js'],
    SELENIUM_PROMISE_MANAGER: false
  };