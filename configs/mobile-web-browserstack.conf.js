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
      deviceName: configs.deviceName,
      osVersion: configs.platformVersion,
      deviceOrientation: "portrait",
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
