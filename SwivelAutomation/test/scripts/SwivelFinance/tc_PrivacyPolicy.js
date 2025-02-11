import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Finance Site -> Contact Us Page ", () => {
  // Covered Test Case Number : SG-41
  it("Verify the Privacy Policy", async () => {
    allureReporter.addStory("Swivel Finance Site Privacy Policy");
    allureReporter.startStep("Swivel Finance -> Privacy Policy");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
  });
});
