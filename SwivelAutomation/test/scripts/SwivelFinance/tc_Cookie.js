import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/swivelGroup/dt_home.json" assert { type: "json" };
import Data_Cookies from "../../data/swivelGroup/dt_cookie.json" assert { type: "json" };

describe("Swivel Finance Site -> Cookie Page ", () => {
  // Covered Test Case Number : SG-38 , SG-39 , SG-40 , SG-42
  it("Verify the Cookie Policy", async () => {
    allureReporter.addStory("Swivel Finance Site Cookie Policy");
    allureReporter.startStep("Swivel Finance -> Cookie Policy");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
  });
});
