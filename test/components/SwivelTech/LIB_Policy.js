import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Policy from "../../pages/SwivelTech/PG_Policy.js";
import PG_Common from "../../pages/PG_Common.js";

class Policy {
  /**
   * a method to Verify the policy message
   */
  async bc_VerifyPolicyMessage(message) {
    await assertionHandler.assertElementDisplayed(
      PG_Policy.ele_lblDivDescription(message),
      "Element not exist",
    );
    allureReporter.step("Verify the description as : " + message, () => {
      console.log("Verify the description as : " + message);
    });
  }
}
export default new Policy();
