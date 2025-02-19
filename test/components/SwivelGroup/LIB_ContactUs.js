import PG_ContactUs from "../../pages/SwivelGroup/PG_ContactUs.js";
import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";
import PG_Home from "../../pages/SwivelGroup/PG_Home.js";
class ContactUs {
  /**
   * a method to Verify the Contact Us
   */
  async bc_VerifyContactUsPage() {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.lnk_SendUsAMessage,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Send Us a Message in contact us page",
      () => {
        console.log("Verify the Send Us a Message in contact us page");
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_lblSendUsAMessage,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Sub Header as Send Us a Message in contact us page",
      () => {
        console.log(
          "Verify the Sub Header as Send Us a Message in contact us page",
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.tf_Email,
      "Element not exist",
    );
    allureReporter.step("Verify the Email text Box", () => {
      console.log("Verify the Email text box");
    });
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.tf_Name,
      "Element not exist",
    );
    allureReporter.step("Verify the Name text box", () => {
      console.log("Verify the Name text box");
    });
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_ddSubject,
      "Element not exist",
    );
    allureReporter.step("Verify the Subject drop down", () => {
      console.log("Verify the Subject drop down");
    });
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.tf_PhoneNumber,
      "Element not exist",
    );
    allureReporter.step("Verify the Phone number text box", () => {
      console.log("Verify the Phone number text box");
    });
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.tf_Message,
      "Element not exist",
    );
    allureReporter.step("Verify the Message text area", () => {
      console.log("Verify the Message text area");
    });
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
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_VisitUsLocation(
        subLocationHeader,
        companyName,
        addressLine1,
        addressLine2,
        phoneNumber,
      ),
      "Element not exist",
    );
    allureReporter.step(
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
      () => {
        console.log(
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
      },
    );
  }

  /**
   * a method to Verify the Email us
   */
  async bc_VerifyEmailUs(emailAddress) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_lblEmailUsWithAddress(emailAddress),
      "Element not exist",
    );
    allureReporter.step("Verify the Email us as " + emailAddress, () => {
      console.log("Verify the Email us as " + emailAddress);
    });
  }

  /**
   * a method to Verify Footer
   */
  async bc_VerifyFooterCopyRightWithLogo(footerWord) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_lblFooter(footerWord),
      "Element not exist",
    );
    allureReporter.step("Verify the Footer as " + footerWord, () => {
      console.log("Verify the Footer as " + footerWord);
    });
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.icn_FooterLogo,
      "Element not exist",
    );
    allureReporter.step("Verify the Footer Application Logo", () => {
      console.log("Verify the Footer Application Logo");
    });
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_CookiePolicy,
      "Element not exist",
    );
    allureReporter.step("Verify the Footer Cookie Policy link", () => {
      console.log("Verify the Footer Cookie Policy link");
    });
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_PrivacyPolicy,
      "Element not exist",
    );
    allureReporter.step("Verify the Privacy Policy link in Footer", () => {
      console.log("Verify the Privacy Policy link in Footer");
    });
  }

  /**
   * a method to Click on Footer logo and verify the home page
   */
  async bc_ClickOnFooterLogoAndVerifyHomePage() {
    let element = await PG_ContactUs.icn_FooterLogo;
    await element.scrollIntoView({ block: "center", inline: "center" });
    await PG_ContactUs.icn_FooterLogo.click();
    await browser.pause(1000);
    await LIB_Common.bc_VerifyTheButton("Find Out More", 1);
    allureReporter.step("Click on Footer logo", () => {
      console.log("Click on Footer logo");
    });
  }

  /**
   * a method to Type email address
   */
  async bc_TypeEmailAddress(emailAddress) {
    await PG_ContactUs.tf_Email.clearValue();
    await PG_ContactUs.tf_Email.addValue(emailAddress);
    allureReporter.step("Email Address type as " + emailAddress, () => {
      console.log("Email Address type as " + emailAddress);
    });
  }

  /**
   * a method to Type Phone number
   */
  async bc_TypePhoneNumber(phoneNumber) {
    await PG_ContactUs.tf_PhoneNumber.clearValue();
    await PG_ContactUs.tf_PhoneNumber.addValue(phoneNumber);
    allureReporter.step("Phone number type as " + phoneNumber, () => {
      console.log("Phone number type as " + phoneNumber);
    });
  }

  /**
   * a method to Verify the Error Message
   */
  async bc_VerifyErrorMessage(errorMessage) {
    await assertionHandler.assertElementDisplayed(
      PG_ContactUs.ele_lblErrorMessage(errorMessage),
      "Element not exist",
    );
    allureReporter.step("Verify the Error Message as " + errorMessage, () => {
      console.log("Verify the Error Message as " + errorMessage);
    });
  }
}
export default new ContactUs();
