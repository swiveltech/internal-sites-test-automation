import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Resources from "../../pages/SwivelTech/PG_Resources.js";

class Resources {
  /**
   * a method to Verify the H6 Header
   */
  async bc_VerifyH6Header(Header) {
    await assertionHandler.assertElementDisplayed(
      PG_Resources.ele_lblH6Header(Header),
      "Element not exist",
    );
    allureReporter.step("Verify the H6 Header as : " + Header, () => {
      console.log("Verify the H6 Header as : " + Header);
    });
  }

  /**
   * a method to Verify the Categories Options
   */
  async bc_VerifyCategoriesOptions(Header, Options) {
    let optionsToVerify =
      typeof Options === "string" && Options.includes(";")
        ? Options.split(";")
        : [Options];

    for (const optionToCheck of optionsToVerify) {
      await assertionHandler.assertElementDisplayed(
        PG_Resources.ele_CategoriesOptions(Header, optionToCheck),
        "Element not exist",
      );

      allureReporter.step(
        "Verify the Categories Options as : " + optionToCheck,
        () => {
          console.log("Verify the Categories Options as : " + optionToCheck);
        },
      );
    }
  }
}
export default new Resources();
