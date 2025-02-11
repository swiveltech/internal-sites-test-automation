import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_ContactUs from "../../components/SwivelGroup/LIB_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/swivelGroup/dt_home.json" assert { type: "json" };
import Data_PrivacyPolicy from "../../data/swivelGroup/dt_privacyPolicy.json" assert { type: "json" };

describe("Swivel Finance Site -> Contact Us Page ", () => {
  // Covered Test Case Number : SG-41
  it("Verify the Privacy Policy", async () => {
    allureReporter.addStory("Swivel Finance Site Privacy Policy");
    allureReporter.startStep("Swivel Finance -> Privacy Policy");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
  });
});
