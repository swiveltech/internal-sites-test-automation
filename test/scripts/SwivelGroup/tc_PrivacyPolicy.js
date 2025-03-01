import config from "../../../config.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_ContactUs from "../../components/SwivelGroup/LIB_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelGroup/dt_home.json" assert { type: "json" };
import Data_PrivacyPolicy from "../../data/SwivelGroup/dt_privacyPolicy.json" assert { type: "json" };

describe("Swivel Group Site -> Privacy Policy Page ", () => {
  // Covered Test Case Number : SG-41
  it("Verify the Privacy Policy", async () => {
    await LIB_Common.bc_StartAllureReportStep("Swivel Group -> Privacy Policy");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    await LIB_Home.bc_VerifyWeValueYourPrivacy(
      Data_Home.Privacy_Header,
      Data_Home.Privacy_Description,
    );
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);

    // Click on Privacy Policy Button in bottom
    await LIB_Common.bc_ClickOnLinks("Privacy Policy");

    await LIB_Common.bc_VerifyH1Header(Data_PrivacyPolicy.PrivacyPolicy_Header);
    await LIB_Common.bc_VerifyPageHeader(Data_PrivacyPolicy.Top_Description, 1);

    // Verify the Sub contains "Personal Information We Collect"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Title_PersonalInformationWeCollect,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.PersonalInformationWeCollect_Description,
      1,
    );

    // Verify the Sub contains "How We Use Your Personal Information"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Title_HowWeUseYourPersonalInformation,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.HowWeUseYourPersonalInformation_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.HowWeUseYourPersonalInformation_Description2,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.HowWeUseYourPersonalInformation_Description3,
      1,
    );

    // Verify the Sub contains "Transfers of personal data"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Title_TransfersOfPersonalData,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.TransfersOfPersonalData_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.TransfersOfPersonalData_Description2,
      1,
    );

    // Verify the Sub contains "Cookies and Similar Technologies"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Title_CookiesAndSimilarTechnologies,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.CookiesAndSimilarTechnologies_Description,
      1,
    );

    // Verify the Sub contains "Personal Data Retention"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Title_PersonalDataRetention,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.PersonalDataRetention_Description,
      1,
    );

    // Verify the Sub contains "Third-Party Websites"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Title_ThirdPartyWebsites,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.ThirdPartyWebsites_Description,
      1,
    );

    // Verify the Sub contains "Your Rights"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Title_YourRights,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.YourRights_Description,
      1,
    );
    await LIB_Common.bc_VerifyLinks(Data_PrivacyPolicy.YourRights_EmailAddress);

    // Verify the Sub contains "Changes to this Privacy Policy"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Title_ChangesToThisPrivacyPolicy,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.ChangesToThisPrivacyPolicy_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.ChangesToThisPrivacyPolicy_EffectiveDate,
      1,
    );
    await LIB_ContactUs.bc_ClickOnFooterLogoAndVerifyHomePage();
  });
});
