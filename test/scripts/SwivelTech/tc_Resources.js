import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_Resources from "../../data/SwivelTech/dt_resources.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_Resources from "../../components/SwivelTech/LIB_Resources.js";

describe("Swivel Tech Site -> Resources Page", () => {
  it("Verify the Resources Page -> Blogs Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify Resources Page -> Blogs Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Resources,
      Data_Home.Resources_Blogs,
    );
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Blogs_Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.Blogs_Top_Description,
    );
    await LIB_Resources.bc_VerifyH6Header("Categories");
    await LIB_Resources.bc_VerifyCategoriesOptions(
      "Categories",
      "All;Security;Staff Augmentation;Reporting;Software Development;Cloud Applications;AI",
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

    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights4_Title,
      Data_Resources.OurLatestInsights4_Category,
      Data_Resources.OurLatestInsights4_Date,
      Data_Resources.OurLatestInsights4_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights5_Title,
      Data_Resources.OurLatestInsights5_Category,
      Data_Resources.OurLatestInsights5_Date,
      Data_Resources.OurLatestInsights5_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTileInPTag(
      Data_Resources.OurLatestInsights6_Title,
      Data_Resources.OurLatestInsights6_Category,
      Data_Resources.OurLatestInsights6_Date,
      Data_Resources.OurLatestInsights6_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights7_Title,
      Data_Resources.OurLatestInsights7_Category,
      Data_Resources.OurLatestInsights7_Date,
      Data_Resources.OurLatestInsights7_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights8_Title,
      Data_Resources.OurLatestInsights8_Category,
      Data_Resources.OurLatestInsights8_Date,
      Data_Resources.OurLatestInsights8_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights9_Title,
      Data_Resources.OurLatestInsights9_Category,
      Data_Resources.OurLatestInsights9_Date,
      Data_Resources.OurLatestInsights9_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights10_Title,
      Data_Resources.OurLatestInsights10_Category,
      Data_Resources.OurLatestInsights10_Date,
      Data_Resources.OurLatestInsights10_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights11_Title,
      Data_Resources.OurLatestInsights11_Category,
      Data_Resources.OurLatestInsights11_Date,
      Data_Resources.OurLatestInsights11_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTileInPTag(
      Data_Resources.OurLatestInsights12_Title,
      Data_Resources.OurLatestInsights12_Category,
      Data_Resources.OurLatestInsights12_Date,
      Data_Resources.OurLatestInsights12_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTileInPTag(
      Data_Resources.OurLatestInsights13_Title,
      Data_Resources.OurLatestInsights13_Category,
      Data_Resources.OurLatestInsights13_Date,
      Data_Resources.OurLatestInsights13_SubDescription,
    );
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
  });

  it("Verify the Resources Page -> Case Studies Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify Resources Page -> Case Studies Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Resources,
      Data_Home.Resources_CaseStudies,
    );
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.CaseStudies_Description,
    );
    await LIB_Resources.bc_VerifyH6Header("Categories");
    await LIB_Resources.bc_VerifyCategoriesOptions(
      "Categories",
      "All;DevOps;Software Development;App Development;Enterprise Development",
    );

    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_CustomisableFeaturesAndMagentomigration,
      Data_Resources.CustomisableFeaturesAndMagentomigration_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile2,
      Data_Resources.Tile2_Description,
    );
    //
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile3,
      Data_Resources.Tile3_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile4,
      Data_Resources.Tile4_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile5,
      Data_Resources.Tile5_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile6,
      Data_Resources.Tile6_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile7,
      Data_Resources.Tile7_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile8,
      Data_Resources.Tile8_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTileFor3Text(
      Data_Resources.CaseStudies_Header_Tile9,
      Data_Resources.Tile9_Description1,
      Data_Resources.Tile9_Description2,
      Data_Resources.Tile9_Description3,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile10,
      Data_Resources.Tile10_Description,
    );
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
  });
});
