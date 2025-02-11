import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_ContactUs from "../../components/SwivelGroup/LIB_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/swivelGroup/dt_home.json" assert { type: "json" };
import Data_ContactUs from "../../data/swivelGroup/dt_contactUs.json" assert { type: "json" };

describe("Swivel Finance Site -> Contact Us Page ", () => {
  // Covered Test Case Number : SG-32, SG-33, SG-34
  it("Verify the Contact Us Page", async () => {
    allureReporter.addStory("Swivel Finance Site Contact Us Page");
    allureReporter.startStep("Swivel Finance -> Verify the Contact Us Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
  });
});
