import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Tech Site -> Newsroom", () => {
  // Covered Test Case Number : SG-25, SG-26, SG-27
  it("Verify the Newsroom page and Careers section", async () => {
    allureReporter.addStory(
      "Swivel Tech Site Verify the Newsroom page and Careers section",
    );
    allureReporter.startStep(
      "Swivel Tech -> Home Page ->  Newsroom -> Verify all articles and navigate to careers page  ",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
  });
});
