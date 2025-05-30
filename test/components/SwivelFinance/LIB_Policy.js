import PG_Policy from "../../pages/SwivelFinance/PG_Policy.js";
import LIB_Common from "../LIB_Common.js";

class Policy {
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

  /**
   * a method to Verify the policy message with 2 text
   */
  async bc_VerifyPolicyMessageForTwoTextForPTag(message1, message2) {
    await expect(
      PG_Policy.lbl_DescriptionWith2TextForPTag(message1, message2),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description one as : " + message1,
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description two as : " + message2,
    );
  }

  /**
   * a method to Verify the policy message with 3 text
   */
  async bc_VerifyPolicyMessageForThreeTextForPTag(
    header,
    message1,
    message2,
    message3,
  ) {
    let applicationText = await PG_Policy.lbl_PtagToGetText(header).getText();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "System Description as : " + applicationText,
    );
    expect(applicationText).toHaveTextContaining(message1);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description one as : " + message1,
    );
    expect(applicationText).toHaveTextContaining(message2);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description two as : " + message2,
    );
    expect(applicationText).toHaveTextContaining(message3);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the description three as : " + message3,
    );
  }
}
export default new Policy();
