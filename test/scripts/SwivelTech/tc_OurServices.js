import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_OurServices from "../../components/SwivelTech/LIB_OurServices.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_OurServices from "../../data/SwivelTech/dt_ourServices.json" assert { type: "json" };
import Data_Resources from "../../data/SwivelTech/dt_resources.json" assert { type: "json" };
import Data_HowWeWork from "../../data/SwivelTech/dt_howWeWork.json" assert { type: "json" };

describe("Swivel Tech Site -> Our Services Pages", () => {
  it("Verify the Our Services Pages", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify Our Services Pages",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_ClickOnButton("LEARN MORE", 7);
    await LIB_Common.bc_VerifyTheAppURL("our-services");

    let appURL = await browser.getUrl();
    await LIB_Common.bc_LogAllureReportAndLogs("Application URL : " + appURL);

    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    await LIB_Common.bc_VerifyTheButton("schedule a call", 1);
    await LIB_Common.bc_ClickOnButton("schedule a call", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_ClickOnButton("LEARN MORE", 7);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    //Verify the "Trusted Partner in Corporate Software Development"
    await LIB_Common.bc_VerifyAnyText(
      Data_OurServices.Header_TrustedPartnerInCorporateSoftwareDevelopment,
      1,
    );
    // Verify the Services with Count
    await LIB_Home.bc_VerifyServicesWithCount(
      Data_Home.Services_YearsInBusiness,
      Data_Home.YearsInBusiness_Count,
    );
    await LIB_Home.bc_VerifyServicesWithCount(
      Data_Home.Services_Resources,
      Data_Home.Resources_Count,
    );
    await LIB_Home.bc_VerifyServicesWithCount(
      Data_Home.Services_ClientsTrustedUs,
      Data_Home.ClientsTrustedUs_Count,
    );
    await LIB_Home.bc_VerifyServicesWithCount(
      Data_Home.Services_ClientsTrustedUs,
      Data_Home.ClientsTrustedUs_Count,
    );

    //Verify the "Our Software Development Services"
    await LIB_Common.bc_VerifyH2Header(
      Data_OurServices.Header_OurSoftwareDevelopmentServices,
    );
    await LIB_OurServices.bc_VerifyOurSoftwareDevelopmentServicesTile(
      Data_OurServices.T1_OurSoftwareDevelopmentServices,
      Data_OurServices.D1_OurSoftwareDevelopmentServices,
    );
    await LIB_OurServices.bc_VerifyOurSoftwareDevelopmentServicesTile(
      Data_OurServices.T2_OurSoftwareDevelopmentServices,
      Data_OurServices.D2_OurSoftwareDevelopmentServices,
    );
    await LIB_OurServices.bc_VerifyOurSoftwareDevelopmentServicesTile(
      Data_OurServices.T3_OurSoftwareDevelopmentServices,
      Data_OurServices.D3_OurSoftwareDevelopmentServices,
    );
    await LIB_OurServices.bc_VerifyOurSoftwareDevelopmentServicesTile(
      Data_OurServices.T4_OurSoftwareDevelopmentServices,
      Data_OurServices.D4_OurSoftwareDevelopmentServices,
    );
    await LIB_OurServices.bc_VerifyOurSoftwareDevelopmentServicesTile(
      Data_OurServices.T5_OurSoftwareDevelopmentServices,
      Data_OurServices.D5_OurSoftwareDevelopmentServices,
    );

    //Click on Learn More link under the each Software Services
    await LIB_OurServices.bc_ClickOnOurSoftwareDevelopmentServicesTileLearnMoreLink(
      Data_OurServices.T1_OurSoftwareDevelopmentServices,
    );
    await LIB_Common.bc_VerifyTheAppURL("enterprise-software-development");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_EnterpriseApplicationSoftwareDevelopmentSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.EnterpriseApplicationSoftwareDevelopmentSolutions_Description,
    );

    // Click on the "Services"
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Services);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    await LIB_OurServices.bc_ClickOnOurSoftwareDevelopmentServicesTileLearnMoreLink(
      Data_OurServices.T2_OurSoftwareDevelopmentServices,
    );
    await LIB_Common.bc_VerifyTheAppURL("qa-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_QAAsAService);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.QAAsAService_Description,
    );
    // Click on the "Services"
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Services);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    await LIB_OurServices.bc_ClickOnOurSoftwareDevelopmentServicesTileLearnMoreLink(
      Data_OurServices.T3_OurSoftwareDevelopmentServices,
    );

    await LIB_Common.bc_VerifyTheAppURL("devops-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_DevOpsConsultingServicesAndSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.DevOpsConsultingServicesAndSolutions_Description,
    );
    // Click on the "Services"
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Services);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    await LIB_OurServices.bc_ClickOnOurSoftwareDevelopmentServicesTileLearnMoreLink(
      Data_OurServices.T4_OurSoftwareDevelopmentServices,
    );
    await LIB_Common.bc_VerifyTheAppURL("search-engine-optimization");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_SEOConsultancyAndAuditingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.SEOConsultancyAndAuditingServices_Description,
    );
    // Click on the "Services"
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Services);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    await LIB_OurServices.bc_ClickOnOurSoftwareDevelopmentServicesTileLearnMoreLink(
      Data_OurServices.T5_OurSoftwareDevelopmentServices,
    );
    await LIB_Common.bc_VerifyH1Header(
      Data_HowWeWork.StaffAugmentation_Top_Header1,
    );
    await LIB_Home.bc_VerifySubPageHeaderInH1(
      Data_HowWeWork.StaffAugmentation_Top_Header2,
      1,
    );
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.StaffAugmentation_Top_Description1,
    );
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.StaffAugmentation_Top_Description2,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_HowWeWork.StaffAugmentation_Top_Description3,
    );
    await LIB_Common.bc_VerifyTheAppURL("staff-augmentation");
    // Click on the "Services"
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Services);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    await LIB_OurServices.bc_ClickOnOurSoftwareDevelopmentServicesTileLearnMoreLink(
      Data_OurServices.T6_OurSoftwareDevelopmentServices,
    );
    await LIB_Common.bc_VerifyTheAppURL("artificial-intelligence");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_ArtificialIntelligenceConsultingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ArtificialIntelligenceConsultingServices_Description,
    );
    // Click on the "Services"
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Services);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    //Verify the "Entrust Your Corporate Software Development Needs to Us "
    await LIB_Common.bc_VerifyH2Header(
      Data_OurServices.Header_EntrustYourCorporateSoftwareDevelopmentNeedsToUs,
    );
    await LIB_OurServices.bc_VerifyEntrustYourCorporateSoftwareDevelopmentNeedsToUs(
      "Access the Best Talent in<br> the Industry",
      Data_OurServices.T1_EntrustYourCorporateSoftwareDevelopmentNeedsToUs,
      Data_OurServices.D1_EntrustYourCorporateSoftwareDevelopmentNeedsToUs,
    );
    await LIB_OurServices.bc_VerifyEntrustYourCorporateSoftwareDevelopmentNeedsToUs(
      "Robust Employee Performance Management",
      Data_OurServices.T2_EntrustYourCorporateSoftwareDevelopmentNeedsToUs,
      Data_OurServices.D2_EntrustYourCorporateSoftwareDevelopmentNeedsToUs,
    );
    await LIB_OurServices.bc_VerifyEntrustYourCorporateSoftwareDevelopmentNeedsToUs(
      "Agile Approach to<br> Software Development ",
      Data_OurServices.T3_EntrustYourCorporateSoftwareDevelopmentNeedsToUs,
      Data_OurServices.D3_EntrustYourCorporateSoftwareDevelopmentNeedsToUs,
    );
    await LIB_OurServices.bc_VerifyEntrustYourCorporateSoftwareDevelopmentNeedsToUs(
      "Eliminate Overhead Costs",
      Data_OurServices.T4_EntrustYourCorporateSoftwareDevelopmentNeedsToUs,
      Data_OurServices.D4_EntrustYourCorporateSoftwareDevelopmentNeedsToUs,
    );

    //Verify the "We Are Proficient in Your Tech Stack"
    await LIB_Common.bc_VerifyH2Header(
      Data_OurServices.Header_WeAreProficientInYourTechStack,
    );
    await LIB_Common.bc_VerifyH2Header(
      Data_OurServices.Header_ExceedingClientExpectationsEveryTime,
    );
  });
});
