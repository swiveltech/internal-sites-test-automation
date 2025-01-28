import PG_ContactUs from "../../pages/SwivelGroup/PG_ContactUs.js";
import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../LIB_Common.js";
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
      console.log("Verify the Email text Box");
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
}
export default new ContactUs();
