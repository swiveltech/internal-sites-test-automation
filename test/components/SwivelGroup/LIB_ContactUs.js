import PG_ContactUs from "../../pages/SwivelGroup/PG_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import PG_Home from "../../pages/SwivelGroup/PG_Home.js";
class ContactUs {
  /**
   * a method to Verify the Contact Us
   */
  async bc_VerifyContactUsPage() {
    await expect(PG_ContactUs.lnk_SendUsAMessage).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Send Us a Message in contact us page",
    );
    await expect(PG_ContactUs.lbl_SendUsAMessage).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Sub Header as Send Us a Message in contact us page",
    );
    await expect(PG_ContactUs.tf_Email).toBePresent();

    await LIB_Common.bc_LogAllureReportAndLogs("Verify the Email text box");
    await expect(PG_ContactUs.tf_Name).toBePresent();

    await LIB_Common.bc_LogAllureReportAndLogs("Verify the Name text box");
    await expect(PG_ContactUs.dd_Subject).toBePresent();

    await LIB_Common.bc_LogAllureReportAndLogs("Verify the Subject drop down");
    await expect(PG_ContactUs.tf_PhoneNumber).toBePresent();

    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Phone number text box",
    );
    await expect(PG_ContactUs.tf_Message).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs("Verify the Message text area");
    await LIB_Common.bc_VerifyTheButton("Send", 1);
  }

  /**
   * a method to Verify the Visit Us Location
   */
  async bc_VerifyVisitUsLocations(
    subLocationHeader,
    companyName,
    addressLine1,
    addressLine2,
    phoneNumber,
  ) {
    await expect(
      PG_ContactUs.ele_VisitUsLocation(
        subLocationHeader,
        companyName,
        addressLine1,
        addressLine2,
        phoneNumber,
      ),
    ).toBePresent();

    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Visit Us location as " +
        subLocationHeader +
        " and company name : " +
        companyName +
        " and address line 1 : " +
        addressLine1 +
        " and address line 2 : " +
        addressLine2 +
        " and phone number : " +
        phoneNumber,
    );
  }

  /**
   * a method to Verify the Email us
   */
  async bc_VerifyEmailUs(emailAddress) {
    await expect(
      PG_ContactUs.lbl_EmailUsWithAddress(emailAddress),
    ).toBePresent();

    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Email us as " + emailAddress,
    );
  }

  /**
   * a method to Verify Footer
   */
  async bc_VerifyFooterCopyRightWithLogo(footerWord) {
    await expect(PG_ContactUs.lbl_Footer(footerWord)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Footer as " + footerWord,
    );
    await expect(PG_ContactUs.icn_FooterLogo).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Footer Application Logo",
    );
    await expect(PG_Home.lnk_CookiePolicy).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Footer Cookie Policy link",
    );
    await expect(PG_Home.lnk_PrivacyPolicy).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy Policy link in Footer",
    );
  }

  /**
   * a method to Click on Footer logo and verify the home page
   */
  async bc_ClickOnFooterLogoAndVerifyHomePage() {
    let element = await PG_ContactUs.icn_FooterLogo;
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    await PG_ContactUs.icn_FooterLogo.click();
    await browser.pause(1000);
    await LIB_Common.bc_VerifyTheButton("Find Out More", 1);
    await LIB_Common.bc_LogAllureReportAndLogs("Click on Footer logo");
  }

  /**
   * a method to Type email address
   */
  async bc_TypeEmailAddress(emailAddress) {
    await PG_ContactUs.tf_Email.clearValue();
    await PG_ContactUs.tf_Email.addValue(emailAddress);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Email Address type as " + emailAddress,
    );
  }

  /**
   * a method to Type Phone number
   */
  async bc_TypePhoneNumber(phoneNumber) {
    await PG_ContactUs.tf_PhoneNumber.clearValue();
    await PG_ContactUs.tf_PhoneNumber.addValue(phoneNumber);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Phone number type as " + phoneNumber,
    );
  }

  /**
   * a method to Verify the Error Message
   */
  async bc_VerifyErrorMessage(errorMessage) {
    await expect(PG_ContactUs.lbl_ErrorMessage(errorMessage)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Error Message as " + errorMessage,
    );
  }
}
export default new ContactUs();
