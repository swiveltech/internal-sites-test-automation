import webActions from "../../../infrastructure/web/webActions.js";
import LIB_Auth from "../../components/LIB_Auth.js";
import LIB_AFLHome from "../components/LIB_AFLHome.js";
import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

afterEach(async function () {
  // Check if the test failed
  const testFailed = this.currentTest.state === "failed";

  // If the test failed, log out of the application
  if (testFailed) {
    await LIB_Auth.bc_Logout();
  }
});

describe("Login/Logout to comet", () => {
  allureReporter.addFeature("Login/Logout to comet");
  it("comet login/logout", async () => {
    allureReporter.addStory("login/logout to Comet application successfully");
    allureReporter.startStep("login/logout to Comet application successfully");
    await webActions.openUrl(config.DEFAULT_URL);
    await browser.pause(6000);
    await LIB_Auth.bc_Logout();
  });
});

describe("Login Validations and Login to Application", () => {
  allureReporter.addFeature("Login Validations and Login to Application");
  it("Visual, Reset Password, Field validations in Login Screen", async () => {
    allureReporter.addStory(
      "Visual, Reset Password, Field validations in Login Screen",
    );
    allureReporter.startStep(
      "Visual, Reset Password, Field validations in Login Screen",
    );
    await webActions.openUrl(config.DEFAULT_URL);
    await LIB_Auth.bc_VerifyLoginScreen();
    await LIB_Auth.bc_Logout();
  });
});
