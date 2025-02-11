import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Tech Site -> Contact Us Page ", () => {
  // Covered Test Case Number : SG-41
  it("Verify the Privacy Policy", async () => {
    allureReporter.addStory("Swivel Tech Site Privacy Policy");
    allureReporter.startStep("Swivel Tech -> Privacy Policy");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
  });
});
