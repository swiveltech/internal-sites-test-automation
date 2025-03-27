// wdio.conf.js

import { config } from "./wdio.conf.js";
import configs from "../config.js";

config.user = configs.BS_User;
config.key = configs.BS_Key;

config.hostname = "hub.browserstack.com";

config.capabilities = [
  {
    browserName: configs.browserName,
    "bstack:options": {
      os: configs.OS_Name,
      osVersion: configs.OS_Version,
      browserVersion: "latest",
      acceptInsecureCerts: "true",
    },
    "goog:chromeOptions": {
      args: ["--start-maximized"],
    },
  },
];

config.services = [
  [
    "browserstack",
    {
      browserstackLocal: false,
      opts: { forcelocal: false },
      appURL: configs.DEFAULT_URL,
    },
    "devtools",
  ],
];

export { config };
