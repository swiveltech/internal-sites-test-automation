import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Tech Site -> Home Page ", () => {
  // Covered Test Case Number : SF-1, SF-2, SF-3
  it("Verify the Home Page", async () => {
    allureReporter.addFeature("Verify the Swivel Tech Home Page");
    allureReporter.addStory("Home Page");
    allureReporter.startStep("Swivel Tech -> Home Page Verification");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
  });
});
