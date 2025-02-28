import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_Policy from "../../data/SwivelTech/dt_policy.json" assert { type: "json" };
import Data_Footer from "../../data/SwivelTech/dt_footer.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_Policy from "../../components/SwivelTech/LIB_Policy.js";

describe("Swivel Tech Site -> Policy Pages", () => {
  it("Verify the Policy Pages -> Privacy Policy Pages", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify Privacy Policy Pages",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    //Click on Privacy Policy
    await LIB_Common.bc_ClickOnLinks(Data_Home.Link_PrivacyPolicy);
    await LIB_Common.bc_VerifyTheAppURL("privacy-policy");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Footer.Header_SwivelTechPrivacyPolicy,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Footer.SwivelTechPrivacyPolicy_Description,
    );

    //Verify the Section "Personal Information We Collect"
    await LIB_Common.bc_VerifyH2Header(
      Data_Policy.Header_PersonalInformationWeCollect,
    );
    await LIB_Policy.bc_VerifyPolicyMessage(
      Data_Policy.PersonalInformationWeCollect_Description,
    );

    //Verify the Section "How We Use Your Personal Information"
    await LIB_Common.bc_VerifyH2Header(
      Data_Policy.Header_HowWeUseYourPersonalInformation,
    );
    await LIB_Policy.bc_VerifyPolicyMessageForThreeText(
      Data_Policy.HowWeUseYourPersonalInformation_Description1,
      Data_Policy.HowWeUseYourPersonalInformation_Description2,
      Data_Policy.HowWeUseYourPersonalInformation_Description3,
    );

    // Verify the Section "Transfers of personal data"
    await LIB_Common.bc_VerifyH2Header(
      Data_Policy.Header_TransfersOfPersonalData,
    );
    await LIB_Policy.bc_VerifyPolicyMessageForTwoText(
      Data_Policy.TransfersOfPersonalData_Description1,
      Data_Policy.TransfersOfPersonalData_Description2,
    );

    // Verify the Section "Cookies And Similar Technologies"
    await LIB_Common.bc_VerifyH2Header(
      Data_Policy.Header_CookiesAndSimilarTechnologies,
    );
    await LIB_Policy.bc_VerifyPolicyMessage(
      Data_Policy.CookiesAndSimilarTechnologies_Description,
    );

    // Verify the Section "Personal Data Retention"
    await LIB_Common.bc_VerifyH2Header(
      Data_Policy.Header_PersonalDataRetention,
    );
    await LIB_Policy.bc_VerifyPolicyMessage(
      Data_Policy.PersonalDataRetention_Description,
    );

    // Verify the Section "Third-Party Websites"
    await LIB_Common.bc_VerifyH2Header(Data_Policy.Header_ThirdPartyWebsites);
    await LIB_Policy.bc_VerifyPolicyMessage(
      Data_Policy.ThirdPartyWebsites_Description,
    );

    // Verify the Section "Your Rights"
    await LIB_Common.bc_VerifyH2Header(Data_Policy.Header_YourRights);
    await LIB_Policy.bc_VerifyPolicyMessage(Data_Policy.YourRights_Description);
    await LIB_Common.bc_VerifyLinks(Data_Policy.EmailAddress);

    // Verify the Section "Changes to this Privacy Policy"
    await LIB_Common.bc_VerifyH2Header(Data_Policy.Header_YourRights);
    await LIB_Policy.bc_VerifyPolicyMessage(Data_Policy.YourRights_Description);
    await LIB_Common.bc_VerifyLinks(Data_Policy.EmailAddress);

    // Verify the Section "Changes to this Privacy Policy"
    await LIB_Common.bc_VerifyH2Header(
      Data_Policy.Header_ChangesToThisPrivacyPolicy,
    );
    await LIB_Policy.bc_VerifyPolicyMessageForTwoText(
      Data_Policy.ChangesToThisPrivacyPolicy_Description1,
      Data_Policy.ChangesToThisPrivacyPolicy_Description2,
    );
  });

  it("Verify the Cookie Policy Pages -> Cookie Policy Pages", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Verify Cookie Policy Pages -> Cookie Policy Pages",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    //Click on Privacy Policy
    await LIB_Common.bc_ClickOnLinks(Data_Home.Link_PrivacyPolicy);
    await LIB_Common.bc_VerifyTheAppURL("privacy-policy");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Footer.Header_SwivelTechPrivacyPolicy,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Footer.SwivelTechPrivacyPolicy_Description,
    );
  });
});
