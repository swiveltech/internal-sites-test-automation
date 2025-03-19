import fs from "fs";
import process from "process";
import { getCapabilities, allureEnv } from "../utils/util.js";
const utils = getCapabilities();
import webActions from "../infrastructure/web/webActions.js";
import kill from "kill-port";
import specConfig from "../specfiles.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Set default environment if ENV is not set
const env = process.env.ENV || "credentials";

// Read from default ".env" file.
dotenv.config();

// Alternatively, read from "../credentials.env" file.
dotenv.config({ path: path.resolve(__dirname, "..", "env", `${env}.env`) });

webActions.createLog();

// Retrieve the test plan from the environment variable or use a default value of "smoke"
const testPlan = (process.env.TEST_PLAN || "smoke").trim();
// Find the configuration in specConfig that matches the selected test plan
const selectedSpecConfig = specConfig.find(
  (config) => config.testingPlan === testPlan,
);
// If no matching configuration is found, throw an error indicating an invalid testing plan
if (!selectedSpecConfig) {
  throw new Error(`Invalid testing plan: ${testPlan}`);
}

export const config = {
  runner: "local",

  specs: selectedSpecConfig.specs,
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: selectedSpecConfig.maxInstances,
  capabilities: utils.runTimeCapabilities,
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  services: [utils.runTimeServices],
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "./allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        addConsoleLogs: true,
        disableMochaHooks: false,
        reportedEnvironmentVars: allureEnv(),
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 6000000,
  },

  onPrepare: async function (config, capabilities) {
    await kill(4723, "tcp");
    const allureResultsPath = path.join(
      process.cwd(),
      "./reports/allure-results",
    );
    try {
      if (fs.existsSync(allureResultsPath)) {
        fs.rmdirSync(allureResultsPath, { recursive: true });
        console.log(`${allureResultsPath} is deleted`);
      }
    } catch (error) {
      console.log("Error while deliting");
    }
    const logFilePath = "./logs/allure-log.log";

    if (fs.existsSync(logFilePath)) {
      fs.writeFileSync(logFilePath, "");
    }
  },

  before: function (capabilities, specs) {},

  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries },
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },

  // onComplete: async function (exitCode, config, capabilities, results) {
  //   },
};
