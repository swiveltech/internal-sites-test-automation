import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Tech Site -> About Us", () => {
  // Covered Test Case Number : SG-19, SG-20, SG-21, SG-22, SG-23, SG24
  it("Verify the About Us", async () => {
    allureReporter.addStory("Swivel Tech Site About Us");
    allureReporter.startStep("Swivel Tech -> Verify the About Us Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
  });
});
