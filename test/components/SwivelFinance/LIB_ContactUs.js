import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_ContactUs from "../../pages/SwivelFinance/PG_ContactUs.js";
import LIB_Common from "../LIB_Common.js";

class ContactUs {
  /**
   * a method to Verify the Labels with the counts
   */
  async bc_FillSendUsAMessage(
    FirstName,
    LastName,
    Email,
    PhoneNumber,
    CompanyName,
    Country,
    Message,
  ) {
    await PG_ContactUs.tf_FirstName.clearValue();
    await PG_ContactUs.tf_FirstName.addValue(FirstName);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Type First Name as : " + FirstName,
    );
    await PG_ContactUs.tf_LastName.clearValue();
    await PG_ContactUs.tf_LastName.addValue(LastName);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Type Last Name as : " + LastName,
    );
    await PG_ContactUs.tf_Email.clearValue();
    await PG_ContactUs.tf_Email.addValue(Email);
    await LIB_Common.bc_LogAllureReportAndLogs("Type Email as : " + Email);

    await PG_ContactUs.tf_PhoneNumber.clearValue();
    await PG_ContactUs.tf_PhoneNumber.addValue(PhoneNumber);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Type Phone Number as : " + PhoneNumber,
    );
    await PG_ContactUs.tf_CompanyName.clearValue();
    await PG_ContactUs.tf_CompanyName.addValue(CompanyName);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Type Company Name as : " + CompanyName,
    );
    await PG_ContactUs.dd_Country.selectByVisibleText(Country);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Select the Country as : " + Country,
    );
    await PG_ContactUs.tf_Message.clearValue();
    await PG_ContactUs.tf_Message.addValue(Message);
    await LIB_Common.bc_LogAllureReportAndLogs("Type Message as : " + Message);
  }

  /**
   * a method to Verify the Error message under label
   */
  async bc_VerifyErrorMessageUnderLabel(Label, ErrorMessage) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.lbl_ErrorMessage(Label, ErrorMessage),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Error Message as : " +
        ErrorMessage +
        " , is present under the label : " +
        Label,
    );
  }

  /**
   * a method to Verify the Title with Value
   */
  async bc_VerifyTitleWitValue(Title, Value) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.lbl_HeaderWithValue(Title, Value),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Title as : " +
        Title +
        " , is present and value of that : " +
        Value,
    );
  }

  /**
   * a method to Verify the Title with Value
   */
  async bc_VerifyCompanyNameWithAddressAndPhoneNumber(
    Country,
    CompanyName,
    AddressLine1,
    AddressLine2,
    PhoneNumber,
  ) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.lbl_AddressWithCompanyNameAndPhoneNumber(
        Country,
        CompanyName,
        AddressLine1,
        AddressLine2,
        PhoneNumber,
      ),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Country as : " +
        Country +
        " , and below that company name as : " +
        CompanyName +
        " , and Address Line 1 : " +
        AddressLine1 +
        " , and phone number as : " +
        PhoneNumber +
        " is present.",
    );
  }
}
export default new ContactUs();
