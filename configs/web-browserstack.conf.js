// wdio.conf.js

import { config } from "./wdio.conf.js";
import configs from "../config.json" assert { type: "json" };

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
      args: ["--disable-gpu", "--disable-dev-shm-usage", "--no-sandbox", "--user-data-dir=/tmp/chrome-user-data-${Date.now()}"],
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
