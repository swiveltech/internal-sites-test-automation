import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Home from "../../pages/SwivelFinance/PG_Home.js";

class Home {
  /**
   * a method to Verify the Swivel Group logo
   */
  async bc_VerifyHomePageLogo() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_SwivelFinanceLogo,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Finance logo on top of the Home page",
      () => {
        console.log("Verify the Swivel Finance logo on top of the Home page");
      },
    );
  }

  /**
   * a method to Verify the Services We Deliver tiles
   */
  async bc_VerifyServicesWeDeliver(Title, SubTitle) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_ServicesWeDeliverTile(Title, SubTitle),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Finance Services as : " +
        SubTitle +
        " ,Under the title : " +
        Title,
      () => {
        console.log(
          "Verify the Swivel Finance Services as : " +
            SubTitle +
            " ,Under the title : " +
            Title,
        );
      },
    );
  }
}
export default new Home();
