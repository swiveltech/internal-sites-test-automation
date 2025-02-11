import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Tech Site -> Careers Page ", () => {
  // Covered Test Case Number : SG-28, SG-30, SG-31
  it("Verify the Careers Page", async () => {
    allureReporter.addStory("Swivel Tech Site Careers Page");
    allureReporter.startStep("Swivel Tech -> Verify the Careers Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
  });
});
