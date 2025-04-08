import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.js";
import Data_ContactUs from "../../data/SwivelTech/dt_contactUs.js";
import LIB_ContactUs from "../../components/SwivelTech/LIB_ContactUs.js";
import PG_Home from "../../pages/SwivelTech/PG_Home.js";

describe("Swivel Tech Site -> Contact Us Page", () => {
  it("Verify the Contact Us Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify the Contact Us Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Home.bc_VerifyPageHeaderInHomePage();

    // Verify the Let's Talk navigation
    await LIB_Home.bc_ClickOnLetsTalkButton("Let’s Talk");
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ContactUs_Description,
    );

    await LIB_ContactUs.bc_VerifyCountry(Data_ContactUs.Country1, 2);
    await LIB_ContactUs.bc_VerifyCompanyAddress(
      Data_ContactUs.Country1,
      Data_ContactUs.CompanyName1WithAddress,
      Data_ContactUs.Company1ContactNumber,
    );

    await LIB_ContactUs.bc_VerifyCountry(Data_ContactUs.Country2, 3);
    await LIB_ContactUs.bc_VerifyCompanyAddress(
      Data_ContactUs.Country2,
      Data_ContactUs.CompanyName2WithAddress,
      Data_ContactUs.Company2ContactNumber,
    );

    await LIB_ContactUs.bc_VerifyCountry(Data_ContactUs.Country2, 4);
    await LIB_ContactUs.bc_VerifyCompanyAddress(
      Data_ContactUs.Country2,
      Data_ContactUs.CompanyName3WithAddress,
      Data_ContactUs.Company3ContactNumber,
    );

    let element = await PG_Home.ele_HamburgerIcon;
    if (await element.isDisplayed()) {
      await LIB_Common.bc_VerifyPageHeader(Data_ContactUs.Header_Email, 2);
    } else {
      await LIB_Common.bc_VerifyH3Header(Data_ContactUs.Header_Email);
    }
    await LIB_ContactUs.bc_VerifyEmail(
      Data_ContactUs.Header_Email,
      Data_ContactUs.EmailAddress,
    );

    if (await element.isDisplayed()) {
      await LIB_Common.bc_VerifyPageHeader(Data_ContactUs.Header_CallUs, 2);
    } else {
      await LIB_Common.bc_VerifyH3Header(Data_ContactUs.Header_CallUs);
    }
    await LIB_ContactUs.bc_VerifyContactNumber(
      Data_ContactUs.Header_CallUs,
      Data_ContactUs.ContactNumber,
    );

    //Verify the Send Us a message
    await LIB_Common.bc_VerifyH3Header(Data_ContactUs.Header_SendUsAMessage);

    await LIB_Common.bc_ClickOnButton("Send", 1);
    await LIB_ContactUs.bc_VerifyErrorMessage(
      Data_ContactUs.Label_FirstName,
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_VerifyErrorMessage(
      Data_ContactUs.Label_LastName,
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_VerifyErrorMessage(
      Data_ContactUs.Label_Email,
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_VerifyErrorMessage(
      Data_ContactUs.Label_PhoneNumber,
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_VerifyErrorMessage(
      Data_ContactUs.Label_CustomerInquiry,
      Data_ContactUs.ErrorMessage_DropDown,
    );
    await LIB_ContactUs.bc_VerifyErrorMessage(
      Data_ContactUs.Label_Message,
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_SendUsaMessage(
      "Automation_FirstName",
      "Automation_LastName",
      "Automation_Email",
      "(+94) 77 1234 121",
      1,
      "This is Test message",
    );
    await LIB_Common.bc_ClickOnButton("Send", 1);
    await LIB_ContactUs.bc_VerifyErrorMessage(
      Data_ContactUs.Label_Email,
      Data_ContactUs.ErrorMessage_EnterAValidEmailAddress,
    );
  });
});
