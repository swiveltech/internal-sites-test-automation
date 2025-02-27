import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_Policy from "../../data/SwivelTech/dt_policy.json" assert { type: "json" };
import Data_Footer from "../../data/SwivelTech/dt_footer.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_Policy from "../../components/SwivelTech/LIB_Policy.js";

describe("Swivel Tech Site -> Policy Pages", () => {
  it("Verify the Policy Pages -> Privacy Policy Pages", async () => {
    allureReporter.addFeature(
      "Verify the Swivel Tech Policy Pages -> Privacy Policy Pages",
    );
    allureReporter.addStory("Verify Policy Pages -> Privacy Policy Pages");
    allureReporter.startStep(
      "Swivel Tech -> Verify Policy Pages -> Privacy Policy Pages",
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
  });
});
