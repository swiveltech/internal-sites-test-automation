import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Careers from "../../pages/SwivelTech/PG_Careers.js";
import PG_Common from "../../pages/PG_Common.js";

class Careers {
  /**
   * a method to Verify the Our Benefits Tile
   */
  async bc_VerifyOurBenefitsTile(SubTitle, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblH3Header(SubTitle),
      "Element not exist",
    );
    allureReporter.step("Verify the H3 Sub Header as : " + SubTitle, () => {
      console.log("Verify the H3 Sub Header as : " + SubTitle);
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_OurBenefitsDescription(SubTitle, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Description as : " +
        Description +
        " , under the sub header as : " +
        SubTitle,
      () => {
        console.log(
          "Verify the Description as : " +
            Description +
            " , under the sub header as : " +
            SubTitle,
        );
      },
    );
  }
}
export default new Careers();
