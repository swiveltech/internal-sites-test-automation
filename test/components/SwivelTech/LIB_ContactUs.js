import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_ContactUs from "../../pages/SwivelTech/PG_ContactUs.js";
import LIB_Common from "../LIB_Common.js";
class ContactUs {
  /**
   * a method to Verify the How We Grew Over the Years
   */
  async bc_VerifyCompanyAddress(country, addressWithCompanyName, phoneNumber) {
    await LIB_Common.bc_VerifyH3Header(country);

    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_CountryWithAddress(country, addressWithCompanyName),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Country as : " +
        country +
        " , Address as : " +
        addressWithCompanyName,
    );
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_CountryWithAddressWithContactNumber(
        country,
        addressWithCompanyName,
        phoneNumber,
      ),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Phone Number Under Address as : " +
        addressWithCompanyName +
        " , and Phone Number as : " +
        phoneNumber,
    );
  }

  /**
   * a method to Verify the Contact number
   */
  async bc_VerifyContactNumber(text, phoneNumber) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.lbl_ContactNumber(text, phoneNumber),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Phone Number as : " + phoneNumber,
    );
  }

  /**
   * a method to Verify the Contact number
   */
  async bc_VerifyEmail(text, emailAddress) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.lbl_EmailAddress(text, emailAddress),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Email Address as : " + emailAddress,
    );
  }

  /**
   * a method to Verify the Error Message
   */
  async bc_VerifyErrorMessage(label, errorMessage) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.lbl_ErrorMessage(label, errorMessage),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Error Message as : " +
        errorMessage +
        " , and It is Under label as : " +
        label,
    );
  }

  /**
   * a method to Send Us a Message
   */
  async bc_SendUsaMessage(
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    index,
    message,
  ) {
    await PG_ContactUs.tf_FirstName.clearValue();
    await PG_ContactUs.tf_FirstName.addValue(firstName);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "First Name type as " + firstName,
    );
    await PG_ContactUs.tf_LastName.clearValue();
    await PG_ContactUs.tf_LastName.addValue(lastName);
    await LIB_Common.bc_LogAllureReportAndLogs("Last Name type as " + lastName);
    await PG_ContactUs.tf_Email.clearValue();
    await PG_ContactUs.tf_Email.addValue(emailAddress);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Email Address type as " + emailAddress,
    );
    await PG_ContactUs.tf_PhoneNumber.clearValue();
    await PG_ContactUs.tf_PhoneNumber.addValue(phoneNumber);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Phone Number type as " + phoneNumber,
    );
    await PG_ContactUs.dd_CustomerInquiry.selectByIndex(index);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Customer Inquiry selected " + index + " value.",
    );
    await PG_ContactUs.tf_Message.clearValue();
    await PG_ContactUs.tf_Message.addValue(message);
    await LIB_Common.bc_LogAllureReportAndLogs("Message type as " + message);
  }
}
export default new ContactUs();
