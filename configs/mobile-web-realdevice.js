// wdio.conf.js

import { config } from "./wdio.conf.js";

config.capabilities = [
  {
    platformName: "iOS",
    browserName: "Safari",
    "appium:deviceName": "Swivel’s iPad",
    "appium:platformVersion": "18.3",
    "appium:automationName": "XCUITest",
    "appium:udid": "00008110-001A09E41E07801E",
  },
];

config.services = [["appium"]];
config.port = 4723;

export { config };
