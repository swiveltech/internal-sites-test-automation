import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Careers from "../../data/swivelGroup/dt_careers.json" assert { type: "json" };
import LIB_Careers from "../../components/SwivelGroup/LIB_Careers.js";

describe("Swivel Finance Site -> Careers Page ", () => {
  // Covered Test Case Number : SG-28, SG-30, SG-31
  it("Verify the Careers Page", async () => {
    allureReporter.addStory("Swivel Finance Site Careers Page");
    allureReporter.startStep("Swivel Finance -> Verify the Careers Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
  });
});
