import PG_AFLHome from "../../pages/SwivelGroup/PG_Home.js";
import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";

class Home {
  async bc_VerifyHomePageLogo() {
    // await assertionHandler.assertElementDisplayed(
    //   PG_AFLHome.img_AFLLogo,
    //   "Element not exist",
    // );
  }

  /**
   * a method to navigate settings
   */
  async bc_NavigateToSettings() {
    // await PG_AFLHome.btn_Settings.click();
    // allureReporter.addStep("Navigate to the settings", "", "passed");
  }


}
export default new Home();
