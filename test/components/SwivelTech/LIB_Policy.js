import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_Policy from "../../pages/SwivelTech/PG_Policy.js";
import LIB_Common from "../LIB_Common.js";
class Policy {
  /**
   * a method to Verify the policy message
   */
  async bc_VerifyPolicyMessage(message) {
    await assertionHandler.assertElementDisplayed(
      PG_Policy.ele_lblDivDescription(message),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description as : " + message,
    );
  }

  /**
   * a method to Verify the policy message with 3 text
   */
  async bc_VerifyPolicyMessageForThreeText(message1, message2, message3) {
    await assertionHandler.assertElementDisplayed(
      PG_Policy.ele_lblDescriptionWith3Text(message1, message2, message3),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description one as : " + message1,
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description two as : " + message2,
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description three as : " + message3,
    );
  }

  /**
   * a method to Verify the policy message with 2 text
   */
  async bc_VerifyPolicyMessageForTwoText(message1, message2) {
    await assertionHandler.assertElementDisplayed(
      PG_Policy.ele_lblDescriptionWith2Text(message1, message2),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description one as : " + message1,
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description two as : " + message2,
    );
  }
}
export default new Policy();
