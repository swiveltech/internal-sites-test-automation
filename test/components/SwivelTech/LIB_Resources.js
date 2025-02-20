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
}
export default new Resources();
