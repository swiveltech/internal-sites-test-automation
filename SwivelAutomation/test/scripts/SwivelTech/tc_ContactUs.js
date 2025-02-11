import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Tech Site -> Contact Us Page ", () => {
  // Covered Test Case Number : SG-32, SG-33, SG-34
  it("Verify the Contact Us Page", async () => {
    allureReporter.addStory("Swivel Tech Site Contact Us Page");
    allureReporter.startStep("Swivel Tech -> Verify the Contact Us Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
  });
});
