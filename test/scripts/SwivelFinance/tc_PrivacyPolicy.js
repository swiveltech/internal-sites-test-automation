import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.json" assert { type: "json" };
import Data_PrivacyPolicy from "../../data/SwivelFinance/dt_privacyPolicy.json" assert { type: "json" };
import LIB_Policy from "../../components/SwivelFinance/LIB_Policy.js";

describe("Swivel Finance Site -> Privacy Policy Page", () => {
  it("Verify the Privacy Policy Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Privacy Policy Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Privacy Policy
    await LIB_Common.bc_ClickOnLinks("Privacy Policy");
    await LIB_Common.bc_VerifyH1Header(Data_PrivacyPolicy.Header_PrivacyPolicy);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_PrivacyPolicy.PrivacyPolicy_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("privacy-policy");

    //Verify the "Personal Information We Collect"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Header_PersonalInformationWeCollect,
      1,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_PrivacyPolicy.Description_PersonalInformationWeCollect,
    );

    //Verify the "How We Use Your Personal Information"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Header_HowWeUseYourPersonalInformation,
      1,
    );
    await LIB_Policy.bc_VerifyPolicyMessageForThreeTextForPTag(
      Data_PrivacyPolicy.Header_HowWeUseYourPersonalInformation,
      Data_PrivacyPolicy.HowWeUseYourPersonalInformation_Description1,
      Data_PrivacyPolicy.HowWeUseYourPersonalInformation_Description2,
      Data_PrivacyPolicy.HowWeUseYourPersonalInformation_Description3,
    );

    //Verify the "Transfers of Personal Data"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Header_TransfersOfPersonalData,
      1,
    );

    await LIB_Policy.bc_VerifyPolicyMessageForTwoTextForPTag(
      Data_PrivacyPolicy.TransfersOfPersonalData_Description1,
      Data_PrivacyPolicy.TransfersOfPersonalData_Description2,
    );

    //Verify the "Cookies and Similar Technologies"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Header_CookiesAndSimilarTechnologies,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.CookiesAndSimilarTechnologies_Description,
      1,
    );

    //Verify the "Personal Data Retention"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Header_PersonalDataRetention,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.PersonalDataRetention_Description,
      1,
    );

    //Verify the "Third-Party Websites"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Header_ThirdPartyWebsites,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.ThirdPartyWebsites_Description,
      1,
    );

    //Verify the "Your Rights"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Header_YourRights,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.YourRights_Description,
      1,
    );
    await LIB_Common.bc_VerifyLinks(Data_PrivacyPolicy.EmailAddress, 1);

    //Verify the "Changes to this Privacy Policy"
    await LIB_Common.bc_VerifyPageHeader(
      Data_PrivacyPolicy.Header_ChangesToThisPrivacyPolicy,
      1,
    );
    await LIB_Policy.bc_VerifyPolicyMessageForTwoTextForPTag(
      Data_PrivacyPolicy.ChangesToThisPrivacyPolicy_Description1,
      Data_PrivacyPolicy.ChangesToThisPrivacyPolicy_Description2,
    );
  });
});
