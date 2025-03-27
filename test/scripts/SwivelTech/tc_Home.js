import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.js";
import Data_AboutUs from "../../data/SwivelTech/dt_aboutUs.js";
import Data_HowWeWork from "../../data/SwivelTech/dt_howWeWork.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import Data_OurServices from "../../data/SwivelTech/dt_ourServices.js";

describe("Swivel Tech Site -> Home Page", () => {
  it("Verify the Home Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Home Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Home.bc_VerifyHomeScreenTopPanel(
      "Home;About Us;How We Work;Services;Resources;Careers",
    );
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_VerifyTopSubPageHeader(Data_Home.Top_Header2);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Description, 1);
    await LIB_Home.bc_VerifyContactTopPanel(Data_Home.ContactNumber);

    //Verify the "START YOUR PROJECT TODAY"
    await LIB_Common.bc_VerifyTheButton("START YOUR PROJECT TODAY", 1);

    // Top First Sub set verify
    await LIB_Common.bc_VerifyH2Header(
      Data_Home.SubTitle_WeAreProficientInYourTechStack,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.SubTitle_AchieveInnovationAndExcellenceThroughOurSoftwareServices,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.AchieveInnovationAndExcellenceThroughOurSoftwareServices_Description,
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

    await LIB_Common.bc_VerifyTheButton("LEARN MORE ABOUT US", 1);

    // Verify the Software Solutions We Deliver
    await LIB_Common.bc_VerifyH2Header(
      Data_Home.SubTitle_SoftwareSolutionsWeDeliver,
    );
    await LIB_Home.bc_VerifySoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_EnterpriseSoftwareDevelopment,
    );
    await LIB_Home.bc_VerifySoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_QAAsAService,
    );
    await LIB_Home.bc_VerifySoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_DevOpsAsAService,
    );
    await LIB_Home.bc_VerifySoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_SearchEngineOptimisation,
    );
    await LIB_Home.bc_VerifySoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_ManagedServiceAugmentation,
    );
    await LIB_Home.bc_VerifySoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_ArtificialIntelligence,
    );

    // Verify the How We Work
    await LIB_Common.bc_VerifyH2Header(Data_Home.SubTitle_HowWeWork);
    await LIB_Home.bc_VerifyHowWeWork(
      Data_Home.HowWeWork_AugmentedModel,
      Data_Home.AugmentedModel_Description,
    );
    await LIB_Home.bc_VerifyHowWeWork(
      Data_Home.HowWeWork_ProjectBasedModel,
      Data_Home.ProjectBasedModel_Description,
    );

    // Verify the Why Choose Us?
    await LIB_Common.bc_VerifyH2Header(Data_Home.SubTitle_WhyChooseUs);
    await LIB_Home.bc_VerifyWhyChooseUsTile1(
      Data_Home.WhyChooseUs_Description1,
    );
    await LIB_Home.bc_VerifyWhyChooseUsTile2(
      Data_Home.WhyChooseUs_Description2,
    );
    await LIB_Home.bc_VerifyWhyChooseUsTile3(
      Data_Home.WhyChooseUs_Description3,
    );
    await LIB_Home.bc_VerifyWhyChooseUsTile4(
      Data_Home.WhyChooseUs_Description4,
    );

    await LIB_Common.bc_VerifyTheButton("LEARN MORE", 7);

    // Verify the Hear What Our Clients Have to Say
    await LIB_Common.bc_VerifyH2Header(
      Data_Home.SubTitle_HearWhatOurClientsHaveToSay,
    );
    await LIB_Home.bc_VerifyHearWhatOurClientsHaveToSay(
      Data_Home.ClientName1,
      Data_Home.Client1Designation,
      Data_Home.Client1Description,
    );
    await LIB_Home.bc_VerifyHearWhatOurClientsHaveToSay(
      Data_Home.ClientName2,
      Data_Home.Client2Designation,
      Data_Home.Client2Description,
    );
    await LIB_Home.bc_VerifyHearWhatOurClientsHaveToSay(
      Data_Home.ClientName3,
      Data_Home.Client3Designation,
      Data_Home.Client3Description,
    );

    //Verify the Successful tile
    await LIB_Common.bc_VerifyH2Header(
      Data_Home.SubTitle_SuccessfulClientProject,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.SuccessfulClientProject_Description,
      1,
    );
    await LIB_Home.bc_VerifySuccessfulClientProjectTile(
      Data_Home.Title_SuccessfulProject1,
      Data_Home.SuccessfulProject1_Description,
    );
    await LIB_Home.bc_VerifySuccessfulClientProjectTile(
      Data_Home.Title_SuccessfulProject2,
      Data_Home.SuccessfulProject2_Description,
    );
    await LIB_Home.bc_VerifySuccessfulClientProjectTile(
      Data_Home.Title_SuccessfulProject3,
      Data_Home.SuccessfulProject3_Description,
    );
    await LIB_Common.bc_VerifyTheButton("READ MORE", 1);

    //Verify the Trusted By
    await LIB_Common.bc_VerifyH2Header(Data_Home.Title_TrustedBy);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.TrustedBy_Description, 1);

    //Verify the Our Latest Insights
    await LIB_Common.bc_VerifyH2Header(Data_Home.Title_OurLatestInsights);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.OurLatestInsights_TopDescription,
      1,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights1_Title,
      Data_Resources.OurLatestInsights1_Category,
      Data_Resources.OurLatestInsights1_Date,
      Data_Resources.OurLatestInsights1_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights2_Title,
      Data_Resources.OurLatestInsights2_Category,
      Data_Resources.OurLatestInsights2_Date,
      Data_Resources.OurLatestInsights2_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights3_Title,
      Data_Resources.OurLatestInsights3_Category,
      Data_Resources.OurLatestInsights3_Date,
      Data_Resources.OurLatestInsights3_SubDescription,
    );

    await LIB_Common.bc_VerifyTheButton("ALL BLOG ARTICLES", 1);

    await LIB_Common.bc_VerifyH2Header(
      Data_Home.Title_DrivingInnovationBeyondImagination,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Home.SubTitle_DrivingInnovationBeyondImagination,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Home.Description_DrivingInnovationBeyondImagination,
    );
    await LIB_Common.bc_VerifyTheButton("LEARN MORE", 8);
    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_HowCanWeHelpYou);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Home.SubTitle_WeHaveHelped200ClientsWithOurTechOffshoringServices,
    );
    await LIB_Common.bc_VerifyTheButton("Book a Discovery Call", 1);

    // Verify the Careers
    await LIB_Common.bc_VerifyH2Header(
      Data_Home.Title_LookingToBuildUpYourCareer,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Home.SubTitle_WeAlwaysLookingForMoreGreatPeopleToJoinOurTeam,
    );
    await LIB_Common.bc_VerifyTheButton("CAREERS", 1);
    await LIB_Home.bc_VerifyHomeFooterPageLogo();
    await LIB_Home.bc_VerifyFooterOptions(
      Data_Home.Footer_MainMenu1,
      Data_Home.MainMenu1_OptionList,
    );
    await LIB_Home.bc_VerifyFooterOptions(
      Data_Home.Footer_MainMenu2,
      Data_Home.MainMenu2_OptionList,
    );
  });

  it("Verify the Top Panel Navigation From Home page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Top Panel Navigation From Home Page",
    );

    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_VerifyHomePageLogo();

    // Click on the "About Us" navigation
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_AboutUs);
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_AboutUs.Top_Description1);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(Data_AboutUs.Top_Description2);
    await LIB_Common.bc_VerifyTheAppURL("about-us");

    // Click on the "How We Work" -> "Project Based" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_HowWeWork,
      Data_Home.HowWeWork_ProjectBased,
    );
    await LIB_Common.bc_VerifyH1Header(Data_HowWeWork.ProjectBased_Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.ProjectBased_Top_Description1,
    );
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.ProjectBased_Top_Description2,
    );
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.ProjectBased_Top_Description3,
    );
    await LIB_Common.bc_VerifyTheAppURL("project-based-software-development");

    // Click on the "How We Work" -> "Staff Augmentation" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_HowWeWork,
      Data_Home.HowWeWork_StaffAugmentation,
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

    // Click on the "Resources" -> "Blogs" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Resources,
      Data_Home.Resources_Blogs,
    );
    await LIB_Common.bc_VerifyTheAppURL("blogs");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Blogs_Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.Blogs_Top_Description,
    );

    // Click on the "Resources" -> "Case Studies" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Resources,
      Data_Home.Resources_CaseStudies,
    );
    await LIB_Common.bc_VerifyTheAppURL("case-studies");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.CaseStudies_Description,
    );

    // Click on the "Careers" navigation
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Careers);
    await LIB_Common.bc_VerifyTheAppURL("careers");
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_Careers);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.Careers_Description,
    );

    // Click on the Let's Talk navigation
    await LIB_Common.bc_ClickOnButton("Let’s Talk", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");

    // Click on the "Services" -> "Artificial Intelligence" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_ArtificialIntelligence,
    );
    await LIB_Common.bc_VerifyTheAppURL("artificial-intelligence");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_ArtificialIntelligenceConsultingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ArtificialIntelligenceConsultingServices_Description,
    );

    // Click on the "Services" -> "DevOps As A Service" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_DevOpsAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("devops-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_DevOpsConsultingServicesAndSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.DevOpsConsultingServicesAndSolutions_Description,
    );

    // Click on the "Services" -> "Enterprise Software Development" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_EnterpriseSoftwareDevelopment,
    );
    await LIB_Common.bc_VerifyTheAppURL("enterprise-software-development");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_EnterpriseApplicationSoftwareDevelopmentSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.EnterpriseApplicationSoftwareDevelopmentSolutions_Description,
    );

    // Click on the "Services" -> "Managed Service Augmentation" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_ManagedServiceAugmentation,
    );
    await LIB_Common.bc_VerifyTheAppURL("managed-service-augmentation");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_SeamlesslyExpandYourTeamWithStaffAugmentation,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.SeamlesslyExpandYourTeamWithStaffAugmentation_Description,
    );

    // Click on the "Services" -> "MVP Factory" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_MVPFactory,
    );
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_MVPFactory);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.MVPFactory_Description1,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.MVPFactory_Description2,
    );
    await LIB_Common.bc_VerifyTheAppURL("mvp-factory");

    // Click on the "Services" -> "QA As A Service" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_QAAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("qa-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_QAAsAService);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.QAAsAService_Description,
    );

    // Click on the "Services" -> "Search Engine Optimisation" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_SearchEngineOptimisation,
    );
    await LIB_Common.bc_VerifyTheAppURL("search-engine-optimization");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_SEOConsultancyAndAuditingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.SEOConsultancyAndAuditingServices_Description,
    );

    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
  });

  it("Verify the Inner button and link Navigation From Home page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Inner button and link Navigation From Home Page",
    );

    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_VerifyHomePageLogo();

    //Click on "START YOUR PROJECT TODAY"
    await LIB_Common.bc_ClickOnButton("START YOUR PROJECT TODAY", 1);

    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    //Click on "LEARN MORE ABOUT US"
    await LIB_Common.bc_ClickOnButton("LEARN MORE ABOUT US", 1);

    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_AboutUs.Top_Description1);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(Data_AboutUs.Top_Description2);
    await LIB_Common.bc_VerifyTheAppURL("about-us");

    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Home.bc_ClickSoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_EnterpriseSoftwareDevelopment,
    );
    await LIB_Common.bc_VerifyTheAppURL("enterprise-software-development");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_EnterpriseApplicationSoftwareDevelopmentSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.EnterpriseApplicationSoftwareDevelopmentSolutions_Description,
    );
    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickSoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_QAAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("qa-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_QAAsAService);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.QAAsAService_Description,
    );
    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickSoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_DevOpsAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("devops-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_DevOpsConsultingServicesAndSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.DevOpsConsultingServicesAndSolutions_Description,
    );
    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickSoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_SearchEngineOptimisation,
    );
    await LIB_Common.bc_VerifyTheAppURL("search-engine-optimization");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_SEOConsultancyAndAuditingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.SEOConsultancyAndAuditingServices_Description,
    );
    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickSoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_ManagedServiceAugmentation,
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
    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickSoftwareSolutionsWeDeliverTile(
      Data_Home.Tile_ArtificialIntelligence,
    );
    await LIB_Common.bc_VerifyTheAppURL("artificial-intelligence");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_ArtificialIntelligenceConsultingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ArtificialIntelligenceConsultingServices_Description,
    );
    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_ClickOnButton("LEARN MORE", 7);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_VerifyTheButton("READ MORE", 1);
    await LIB_Common.bc_ClickOnButton("READ MORE", 1);
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.CaseStudies_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("case-studies");
    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_VerifyTheButton("ALL BLOG ARTICLES", 1);
    await LIB_Common.bc_ClickOnButton("ALL BLOG ARTICLES", 1);
    await LIB_Common.bc_VerifyTheAppURL("blogs");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Blogs_Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.Blogs_Top_Description,
    );
    await LIB_Home.bc_ClickOnAppLogo();
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_VerifyTheButton("LEARN MORE", 8);
    await LIB_Common.bc_ClickOnButton("LEARN MORE", 8);
    // Get parent window GUID
    let parentGUID = await browser.getWindowHandle();
    // Wait until a new window appears
    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length > 1,
    );

    // Get all window GUIDs and find the child window
    let allGUIDs = await browser.getWindowHandles();
    let childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // Switch to child window
    await browser.switchToWindow(childGUID);
    await browser.pause(3000);
    const currentUrl = await browser.getUrl();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on SwivelHack Learn more link in home page. Clicked URL : " +
        currentUrl,
    );
    await LIB_Common.bc_TakeScreenShot("SwivelHack");
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
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
  });
});
