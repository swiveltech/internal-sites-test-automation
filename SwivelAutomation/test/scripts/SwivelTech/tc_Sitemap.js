import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Tech Site -> Sitemap Page ", () => {
  // Covered Test Case Number : SG-43, SG-44, SG-45, SG-46, SG-47, SG-48
  it("Verify the Sitemap Page", async () => {
    allureReporter.addStory("Swivel Tech Site Sitemap Page");
    allureReporter.startStep("Swivel Tech -> Verify the Sitemap Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
  });
});
