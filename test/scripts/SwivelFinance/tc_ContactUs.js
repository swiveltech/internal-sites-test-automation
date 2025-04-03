import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.js";
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";
import Data_ContactUs from "../../data/SwivelFinance/dt_contactUs.js";
import LIB_ContactUs from "../../components/SwivelFinance/LIB_ContactUs.js";

describe("Swivel Finance Site -> Contact Us Page", () => {
  it("Verify the Contact Us Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Contact Us Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Let's Talk  button and verify the landing page
    await LIB_Home.bc_ClickOnLetsTalkButton();
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    await LIB_Common.bc_VerifyH1Header(Data_ContactUs.Header_ContactUs);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheButton("Send Us a Message", 1);
    await LIB_Common.bc_VerifyTheButton("Send", 1);
    //Verify the "Send us a message"
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.Header_SendUsAMessage,
    );

    //Click on Send button
    await LIB_Common.bc_ClickOnButton("Send", 1);
    await LIB_ContactUs.bc_VerifyErrorMessageUnderLabel(
      "First Name",
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_VerifyErrorMessageUnderLabel(
      "Last Name",
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_VerifyErrorMessageUnderLabel(
      "Email",
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_VerifyErrorMessageUnderLabel(
      "Phone Number",
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_VerifyErrorMessageUnderLabel(
      "Company",
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );
    await LIB_ContactUs.bc_VerifyErrorMessageUnderLabel(
      "Country",
      Data_ContactUs.ErrorMessage_PleaseSelectAnOption,
    );
    await LIB_ContactUs.bc_VerifyErrorMessageUnderLabel(
      "Message",
      Data_ContactUs.ErrorMessage_ThisFieldIsRequired,
    );

    //Fill the data with invalid email address
    await LIB_ContactUs.bc_FillSendUsAMessage(
      "Automation_FirstName",
      "Automation_LastName",
      "Invalid_Email",
      "(+94) 79 777 77778",
      "Automation_Company",
      "Sri Lanka",
      "This is Test message.please ignore it",
    );
    await LIB_ContactUs.bc_VerifyErrorMessageUnderLabel(
      "Email",
      Data_ContactUs.ErrorMessage_EnterAValidEmailAddress,
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "These is no error validation in phone number field.",
    );
    await LIB_Common.bc_TakeScreenShot(
      "Swivel Finance Contact Us page with invalid email",
    );
    //Fill the data with valid email address
    await LIB_ContactUs.bc_FillSendUsAMessage(
      "Automation_FirstName",
      "Automation_LastName",
      "test123@gmail.com",
      "(+94) 79 777 7777",
      "Automation_Company",
      "Sri Lanka",
      "This is Test message.please ignore it",
    );
    await LIB_Common.bc_TakeScreenShot(
      "Swivel Finance Contact Us page with valid data",
    );
    await LIB_ContactUs.bc_VerifyTitleWitValue(
      Data_ContactUs.Header_EmailUs,
      Data_ContactUs.Email,
    );

    await LIB_Common.bc_VerifyH3Header(Data_ContactUs.Header_VisitUs);
    await LIB_ContactUs.bc_VerifyCompanyNameWithAddressAndPhoneNumber(
      Data_ContactUs.Country_Australia,
      Data_ContactUs.CompanyName_SwivelGroupForAustralia,
      Data_ContactUs.Australia_AddressLine1,
      Data_ContactUs.Australia_AddressLine2,
      Data_ContactUs.Australia_Office_ContactNumber,
    );
    await LIB_ContactUs.bc_VerifyCompanyNameWithAddressAndPhoneNumber(
      Data_ContactUs.Country_SriLanka,
      Data_ContactUs.CompanyName_SwivelGroupForSriLanka,
      Data_ContactUs.SriLanka_AddressLine1,
      Data_ContactUs.SriLanka_AddressLine2,
      Data_ContactUs.SriLanka_Office_ContactNumber,
    );
    await LIB_ContactUs.bc_VerifyCompanyNameWithAddressAndPhoneNumber(
      Data_ContactUs.Country_SriLanka,
      Data_ContactUs.CompanyName_SwivelTech,
      Data_ContactUs.TechOffice_SriLanka_AddressLine1,
      Data_ContactUs.TechOffice_SriLanka_AddressLine2,
      Data_ContactUs.SriLanka_TechOffice_ContactNumber,
    );
  });
});
