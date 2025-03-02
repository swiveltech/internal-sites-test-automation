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
  async bc_VerifyContactNumber(phoneNumber) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_lblContactNumber(phoneNumber),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Phone Number as : " + phoneNumber,
    );
  }

  /**
   * a method to Verify the Contact number
   */
  async bc_VerifyEmail(EmailAddress) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_lblEmailAddress(EmailAddress),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Email Address as : " + EmailAddress,
    );
  }
}
export default new ContactUs();
