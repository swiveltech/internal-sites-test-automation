import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Sitemap from "../../components/SwivelGroup/LIB_Sitemap.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Sitemap from "../../data/swivelGroup/dt_sitemap.json" assert { type: "json" };
import Data_AboutUs from "../../data/swivelGroup/dt_aboutUs.json" assert { type: "json" };
import Data_SwivelFinance from "../../data/swivelGroup/dt_swivelFinance.json" assert { type: "json" };
import Data_SwivelTalent from "../../data/swivelGroup/dt_swivelTalent.json" assert { type: "json" };
import Data_Careers from "../../data/swivelGroup/dt_careers.json" assert { type: "json" };
import Data_PrivacyPolicy from "../../data/swivelGroup/dt_privacyPolicy.json" assert { type: "json" };
import Data_ContactUs from "../../data/swivelGroup/dt_contactUs.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_AboutUs from "../../components/SwivelGroup/LIB_AboutUs.js";

describe("Swivel Finance Site -> Sitemap Page ", () => {
  // Covered Test Case Number : SG-43, SG-44, SG-45, SG-46, SG-47, SG-48
  it("Verify the Sitemap Page", async () => {
    allureReporter.addStory("Swivel Finance Site Sitemap Page");
    allureReporter.startStep("Swivel Finance -> Verify the Sitemap Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
  });
});
