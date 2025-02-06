import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Newsroom from "../../components/SwivelGroup/LIB_Newsroom.js";
import LIB_ContactUs from "../../components/SwivelGroup/LIB_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/swivelGroup/dt_home.json" assert { type: "json" };
import Data_ContactUs from "../../data/swivelGroup/dt_contactUs.json" assert { type: "json" };
import Data_Newsroom from "../../data/swivelGroup/dt_newsroom.json" assert { type: "json" };

describe("Swivel Finance Site -> Home Page ", () => {
  // Covered Test Case Number : SF-1, SF-2, SF-3
  it("Verify the Home Page", async () => {
    allureReporter.addFeature("Verify the Swivel Finance Home Page");
    allureReporter.addStory("Home Page");
    allureReporter.startStep("Swivel Finance -> Home Page Verification");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
  });
});
