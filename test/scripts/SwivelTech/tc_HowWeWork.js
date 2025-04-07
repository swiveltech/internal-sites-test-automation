import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.js";
import Data_HowWeWork from "../../data/SwivelTech/dt_howWeWork.js";
import LIB_HowWeWork from "../../components/SwivelTech/LIB_HowWeWork.js";
import LIB_Resources from "../../components/SwivelTech/LIB_Resources.js";
import PG_Home from "../../pages/SwivelTech/PG_Home.js";

describe("Swivel Tech Site -> How We Work -> Project Based Page", () => {
  it("Verify the How We Work -> Project Based Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify How We Work -> Project Based Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
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

    // Verify the step tile
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number1,
      Data_HowWeWork.Number1_Title,
      Data_HowWeWork.Number1_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number2,
      Data_HowWeWork.Number2_Title,
      Data_HowWeWork.Number2_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number3,
      Data_HowWeWork.Number3_Title,
      Data_HowWeWork.Number3_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number4,
      Data_HowWeWork.Number4_Title,
      Data_HowWeWork.Number4_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number5,
      Data_HowWeWork.Number5_Title,
      Data_HowWeWork.Number5_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number6,
      Data_HowWeWork.Number6_Title,
      Data_HowWeWork.Number6_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number7,
      Data_HowWeWork.Number7_Title,
      Data_HowWeWork.Number7_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number8,
      Data_HowWeWork.Number8_Title,
      Data_HowWeWork.Number8_Description,
    );

    //Verify the "FAQs"
    await LIB_Common.bc_VerifyH2Header(Data_HowWeWork.Header_FAQs);
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question1,
      Data_HowWeWork.Answer1,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question2,
      Data_HowWeWork.Answer2,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question3,
      Data_HowWeWork.Answer3,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question4,
      Data_HowWeWork.Answer4,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question5,
      Data_HowWeWork.Answer5,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question6,
      Data_HowWeWork.Answer6,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question7,
      Data_HowWeWork.Answer7,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question8,
      Data_HowWeWork.Answer8,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question9,
      Data_HowWeWork.Answer9,
    );

    //Verify the "200+ Successful Client Projects and Counting"
    await LIB_Common.bc_VerifyH2Header(
      Data_HowWeWork.Header_200SuccessfulClientProjectsAndCounting,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_HowWeWork.SuccessfulClientProjectsAndCounting_Description,
      1,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_CustomisableFeaturesAndMagentomigration,
      Data_Resources.CustomisableFeaturesAndMagentomigration_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile2,
      Data_Resources.Tile2_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile3,
      Data_Resources.Tile3_Description,
    );
    await LIB_Common.bc_VerifyTheButton("Read  more", 1);
    await LIB_Common.bc_ClickOnButton("Read  more", 1);
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.CaseStudies_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("case-studies");
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

    //Click on Book A Discovery Call
    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_HowCanWeHelpYou);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Home.SubTitle_WeHaveHelped200ClientsWithOurTechOffshoringServices,
    );
    await LIB_Common.bc_VerifyTheButton(
      Data_Resources.Header_BookADiscoveryCall,
      1,
    );

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

  it("Verify the How We Work -> Staff Augmentation Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify How We Work -> StaffAugmentation Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
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

    //Verify the "Benefits of Choosing This Option"
    await LIB_Common.bc_VerifyH2Header(
      Data_HowWeWork.Header_BenefitsOfChoosingThisOption,
    );
    await LIB_HowWeWork.bc_VerifyBenefitsOfChoosingThisOption(
      Data_HowWeWork.SubTitle_Benefits1,
      Data_HowWeWork.Benefits1_Description,
    );
    await LIB_HowWeWork.bc_VerifyBenefitsOfChoosingThisOption(
      Data_HowWeWork.SubTitle_Benefits2,
      Data_HowWeWork.Benefits2_Description,
    );
    await LIB_HowWeWork.bc_VerifyBenefitsOfChoosingThisOption(
      Data_HowWeWork.SubTitle_Benefits3,
      Data_HowWeWork.Benefits3_Description,
    );
    await LIB_HowWeWork.bc_VerifyBenefitsOfChoosingThisOption(
      Data_HowWeWork.SubTitle_Benefits4,
      Data_HowWeWork.Benefits4_Description,
    );
    await LIB_HowWeWork.bc_VerifyBenefitsOfChoosingThisOption(
      Data_HowWeWork.SubTitle_Benefits5,
      Data_HowWeWork.Benefits5_Description,
    );

    //Verify the "Our Process"
    await LIB_Common.bc_VerifyH2Header(Data_HowWeWork.Header_OurProcess);

    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number1,
      Data_HowWeWork.Title_OurProcess1,
      Data_HowWeWork.OurProcess1_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number2,
      Data_HowWeWork.Title_OurProcess2,
      Data_HowWeWork.OurProcess2_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number3,
      Data_HowWeWork.Title_OurProcess3,
      Data_HowWeWork.OurProcess3_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number4,
      Data_HowWeWork.Title_OurProcess4,
      Data_HowWeWork.OurProcess4_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number5,
      Data_HowWeWork.Title_OurProcess5,
      Data_HowWeWork.OurProcess5_Description,
    );

    //Verify the "FAQs"
    await LIB_Common.bc_VerifyH2Header(Data_HowWeWork.Header_FAQs);
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.OurProcess_Question1,
      Data_HowWeWork.OurProcess_Answer1,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.OurProcess_Question2,
      Data_HowWeWork.OurProcess_Answer2,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.OurProcess_Question3,
      Data_HowWeWork.OurProcess_Answer3,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.OurProcess_Question4,
      Data_HowWeWork.OurProcess_Answer4,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.OurProcess_Question5,
      Data_HowWeWork.OurProcess_Answer5,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.OurProcess_Question6,
      Data_HowWeWork.OurProcess_Answer6,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.OurProcess_Question7,
      Data_HowWeWork.OurProcess_Answer7,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.OurProcess_Question8,
      Data_HowWeWork.OurProcess_Answer8,
    );

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

    await LIB_Common.bc_VerifyTheButton("ALL BLOG ARTICLES ", 1);
    await LIB_Common.bc_ClickOnButton("ALL BLOG ARTICLES ", 1);

    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Blogs_Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.Blogs_Top_Description,
    );
    let element = await PG_Home.ele_HamburgerIcon;
    if (await element.isDisplayed()) {
      await LIB_Resources.bc_VerifyCategoriesOptionsInTab(
        "Categories",
        "All;Security;Staff Augmentation;Reporting;Software Development;Cloud Applications;AI",
      );
    } else {
      await LIB_Common.bc_VerifyH6Header("Categories");
      await LIB_Resources.bc_VerifyCategoriesOptions(
        "Categories",
        "All;Security;Staff Augmentation;Reporting;Software Development;Cloud Applications;AI",
      );
    }
    await LIB_Common.bc_VerifyTheAppURL("blogs");

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

    //Click on Book A Discovery Call
    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_HowCanWeHelpYou);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Home.SubTitle_WeHaveHelped200ClientsWithOurTechOffshoringServices,
    );
    await LIB_Common.bc_VerifyTheButton(
      Data_Resources.Header_BookADiscoveryCall,
      1,
    );

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
