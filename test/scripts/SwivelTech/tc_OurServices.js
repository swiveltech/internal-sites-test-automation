import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import PG_Common from "../../pages/PG_Common.js";
import LIB_OurServices from "../../components/SwivelTech/LIB_OurServices.js";
import Data_OurServices from "../../data/SwivelTech/dt_ourServices.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.js";
import Data_HowWeWork from "../../data/SwivelTech/dt_howWeWork.js";

describe("Swivel Tech Site -> Our Services Pages", () => {
  it("Verify the Our Services Pages", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify Our Services Pages",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_ClickOnButton("LEARN MORE", 8);
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
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_ClickOnButton("LEARN MORE", 8);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    //Verify the "Trusted Partner in Corporate Software Development"
    await LIB_Common.bc_VerifyAnyText(
      Data_OurServices.Header_TrustedPartnerInCorporateSoftwareDevelopment,
      1,
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
    await LIB_OurServices.bc_VerifyExceedingClientExpectationsEveryTime(
      "Geoff Smeaton",
      Data_OurServices.PersonName1,
      Data_OurServices.PersonName1_Job,
      Data_OurServices.PersonName1_Description,
    );
    await LIB_OurServices.bc_VerifyExceedingClientExpectationsEveryTime(
      "Phil Whitehouse",
      Data_OurServices.PersonName2,
      Data_OurServices.PersonName2_Job,
      Data_OurServices.PersonName2_Description,
    );
    await LIB_OurServices.bc_VerifyExceedingClientExpectationsEveryTime(
      "Joel Rembach",
      Data_OurServices.PersonName3,
      Data_OurServices.PersonName3_Job,
      Data_OurServices.PersonName3_Description,
    );

    //Verify the Successful tile
    await LIB_Common.bc_VerifyH2Header(
      Data_Home.SubTitle_SuccessfulClientProject,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.SuccessfulClientProject_Description,
      1,
    );
    await LIB_OurServices.bc_VerifySuccessfulClientProjectTile(
      Data_Home.Title_SuccessfulProject1,
      Data_Home.SuccessfulProject1_Description,
    );
    await LIB_OurServices.bc_VerifySuccessfulClientProjectTile(
      Data_Home.Title_SuccessfulProject2,
      Data_Home.SuccessfulProject2_Description,
    );
    await LIB_OurServices.bc_VerifySuccessfulClientProjectTile(
      Data_Home.Title_SuccessfulProject3,
      Data_Home.SuccessfulProject3_Description,
    );
    await LIB_Common.bc_VerifyTheButton("READ MORE", 1);
    await LIB_Common.bc_ClickOnButton("READ MORE", 1);
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.CaseStudies_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("case-studies");
    // Click on the "Services" navigation
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Services);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);
    await LIB_Common.bc_VerifyH3Header(Data_Resources.Header_HowCanWeHelpYou);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Resources.HowCanWeHelpYou_Description,
    );
    await LIB_Common.bc_VerifyTheButton(
      Data_Resources.Header_BookADiscoveryCall,
      1,
    );
    //Click on Book A Discovery Call
    await LIB_Common.bc_ClickOnButton(
      Data_Resources.Header_BookADiscoveryCall,
      1,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ContactUs_Description,
    );
    // Click on the "Services" navigation
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Services);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);
    await LIB_Common.bc_VerifyH3Header(Data_Resources.Header_HowCanWeHelpYou);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Resources.HowCanWeHelpYou_Description,
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Below code might be failed due to small screen size. Please refer the JIRA ticket for that : https://swiveltech.atlassian.net/browse/SW-1625?focusedCommentId=35236",
    );
    // This to fix the scroll in issue
    let element = await PG_Common.lbl_H2Header(
      Data_OurServices.Header_OurSoftwareDevelopmentServices,
    );
    await element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    await browser.pause(5000);

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
  });
});
