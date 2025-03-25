import PG_Policy from "../../pages/SwivelTech/PG_Policy.js";
import LIB_Common from "../LIB_Common.js";
class Policy {
  /**
   * a method to Verify the policy message
   */
  async bc_VerifyPolicyMessage(message) {
    await expect(PG_Policy.lbl_DivDescription(message)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description as : " + message,
    );
  }

  /**
   * a method to Verify the policy message with 3 text
   */
  async bc_VerifyPolicyMessageForThreeText(message1, message2, message3) {
    await expect(
      PG_Policy.lbl_DescriptionWith3Text(message1, message2, message3),
    ).toBePresent();
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
   * a method to Verify the policy message with 3 text in center
   */
  async bc_VerifyPolicyMessageForThreeTextInCenter(
    message1,
    message2,
    message3,
  ) {
    await expect(
      PG_Policy.lbl_DescriptionWith3TextInCenter(message1, message2, message3),
    ).toBePresent();
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
    await expect(
      PG_Policy.lbl_DescriptionWith2Text(message1, message2),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description one as : " + message1,
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description two as : " + message2,
    );
  }
}
export default new Policy();
