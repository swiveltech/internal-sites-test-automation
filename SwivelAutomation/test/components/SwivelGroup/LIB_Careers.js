import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Careers from "../../pages/SwivelGroup/PG_Careers.js";
class Careers {
  /**
   * a method to Verify the top Description
   */
  async bc_VerifyTopDescription(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblTopHeaderWithDescription(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Top Description in Careers page as : " + Description,
      () => {
        console.log(
          "Verify the Top Description in Careers page as : " + Description,
        );
      },
    );
  }

  /**
   * a method to Verify the Pegging tile
   */
  async bc_VerifyPeggingTile(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.img_Pegging,
      "Element not exist",
    );
    allureReporter.step("Verify the Pegging Icon is present.", () => {
      console.log("Verify the Pegging Icon is present.");
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsSubtitleTiles(Title),
      "Element not exist",
    );
    allureReporter.step("Verify the Pegging Title as " + Title, () => {
      console.log("Verify the Pegging Title as " + Title);
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsDescriptionTiles(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Pegging Title as " +
        Title +
        " and description as " +
        Description,
      () => {
        console.log(
          "Verify the Pegging Title as " +
            Title +
            " and description as " +
            Description,
        );
      },
    );
  }
}
export default new Careers();
