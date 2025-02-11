import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Finance Site -> Cookie Page ", () => {
  // Covered Test Case Number : SG-38 , SG-39 , SG-40 , SG-42
  it("Verify the Cookie Policy", async () => {
    allureReporter.addStory("Swivel Finance Site Cookie Policy");
    allureReporter.startStep("Swivel Finance -> Cookie Policy");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
  });
});
