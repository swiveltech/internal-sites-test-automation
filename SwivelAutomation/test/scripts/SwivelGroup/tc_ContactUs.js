import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_ContactUs from "../../components/SwivelGroup/LIB_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelGroup/dt_home.json" assert { type: "json" };
import Data_ContactUs from "../../data/SwivelGroup/dt_contactUs.json" assert { type: "json" };

describe("Swivel Group Site -> Contact Us Page ", () => {
  // Covered Test Case Number : SG-32, SG-33, SG-34
  it("Verify the Contact Us Page", async () => {
    allureReporter.addStory("Swivel Group Site Contact Us Page");
    allureReporter.startStep("Swivel Group -> Verify the Contact Us Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    await browser.pause(2000);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
    await LIB_Home.bc_ClickOnLetsTalkButtonAndVerifyContactUsPage();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Contact_Us_Description, 1);
    await LIB_ContactUs.bc_VerifyContactUsPage();
    await LIB_ContactUs.bc_VerifyEmailUs(Data_ContactUs.EmailAddress);
    await LIB_Common.bc_ClickOnButton("Send", 1);
    await LIB_ContactUs.bc_TypeEmailAddress("invalid_email_address");
    await LIB_ContactUs.bc_VerifyErrorMessage(
      Data_ContactUs.ErrorMessage_EmailAddress,
    );
    await LIB_ContactUs.bc_TypePhoneNumber("Invalid_Phone_Number");
    // There is no phone number validation
    allureReporter.step("There is no phone number validation", () => {
      console.log("There is no phone number validation");
    });
    // await LIB_ContactUs.bc_VerifyErrorMessage(Data_ContactUs.ErrorMessage_FieldRequired);
  });
});
