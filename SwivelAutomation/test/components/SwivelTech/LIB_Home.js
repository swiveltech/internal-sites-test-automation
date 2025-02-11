import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Home from "../../pages/SwivelTech/PG_Home.js";
class Home {
  /**
   * a method to Verify the Swivel Tech logo
   */
  async bc_VerifyHomePageLogo() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_SwivelTechLogo,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Tech logo on top of the Home page",
      () => {
        console.log("Verify the Swivel Tech logo on top of the Home page");
      },
    );
  }
}
export default new Home();
