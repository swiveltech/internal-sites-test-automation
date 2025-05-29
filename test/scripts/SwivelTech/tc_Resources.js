import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_Resources from "../../components/SwivelTech/LIB_Resources.js";
import PG_Home from "../../pages/SwivelTech/PG_Home.js";

describe("Swivel Tech Site -> Resources Page", () => {
  it("Verify the Resources Page -> Blogs Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify Resources Page -> Blogs Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Home.bc_VerifyPageHeaderInHomePage();
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Resources,
      Data_Home.Resources_Blogs,
    );
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

    //Check the load more
    await LIB_Resources.bc_ClickOnLoadMoreButton();

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

    //Check the load more
    await LIB_Resources.bc_ClickOnLoadMoreButton();

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
    await LIB_Home.bc_VerifyPageHeaderInHomePage();
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Resources,
      Data_Home.Resources_CaseStudies,
    );
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.CaseStudies_Description,
    );
    let element = await PG_Home.ele_HamburgerIcon;
    if (await element.isDisplayed()) {
      await LIB_Resources.bc_VerifyCategoriesOptionsInTab(
        "Categories",
        "All;DevOps;Software Development;App Development;Enterprise Development",
      );
    } else {
      await LIB_Common.bc_VerifyH6Header("Categories");
      await LIB_Resources.bc_VerifyCategoriesOptions(
        "Categories",
        "All;DevOps;Software Development;App Development;Enterprise Development",
      );
    }

    //Verify the Categories tiles
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
    //Check the load more
    await LIB_Resources.bc_ClickOnLoadMoreButton();

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

  it("Verify the Resources Page -> Swivel Talk Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify Resources Page -> Swivel Talk Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Home.bc_VerifyPageHeaderInHomePage();
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Resources,
      Data_Home.Resources_SwivelTalk,
    );
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_SwivelTalk);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.SwivelTalk_Description,
    );

    await LIB_Common.bc_VerifyH2Header(
      Data_Resources.SwivelTalk_H2Header1,
    );
    // Latest Episode
    await LIB_Common.bc_VerifyH2Header(Data_Resources.SwivelTalk_H2Header1);
    await LIB_Resources.bc_VerifySwivelTalkCards(
      Data_Resources.SwivelTalk_Episode4_title,
      Data_Resources.SwivelTalk_Episode4_date,
      Data_Resources.SwivelTalk_Episode4_hosted,
      Data_Resources.SwivelTalk_Episode4_description
    );
    await LIB_Resources.bc_verifyWatchNowForEpisode(Data_Resources.WatchNow_Button,1, Data_Resources.SwivelTalk_Episode4_videoId);

    // Previous Episodes
    await LIB_Common.bc_VerifyH2Header(Data_Resources.SwivelTalk_H2Header2);

    await LIB_Resources.bc_VerifySwivelTalkCards(
      Data_Resources.SwivelTalk_Episode3_title,
      Data_Resources.SwivelTalk_Episode3_date,
      Data_Resources.SwivelTalk_Episode3_hosted,
      Data_Resources.SwivelTalk_Episode3_description
    );
    await LIB_Resources.bc_verifyWatchNowForEpisode(Data_Resources.WatchNow_Button,2, Data_Resources.SwivelTalk_Episode3_videoId);

    await LIB_Resources.bc_VerifySwivelTalkCards(
      Data_Resources.SwivelTalk_Episode2_title,
      Data_Resources.SwivelTalk_Episode2_date,
      Data_Resources.SwivelTalk_Episode2_hosted,
      Data_Resources.SwivelTalk_Episode2_description
    );
    await LIB_Resources.bc_verifyWatchNowForEpisode(Data_Resources.WatchNow_Button,3, Data_Resources.SwivelTalk_Episode2_videoId);

    // Load more and verify Episode 1
    await LIB_Resources.bc_ClickOnLoadMoreButton();

    await LIB_Resources.bc_VerifySwivelTalkCards(
      Data_Resources.SwivelTalk_Episode1_title,
      Data_Resources.SwivelTalk_Episode1_date,
      Data_Resources.SwivelTalk_Episode1_hosted,
      Data_Resources.SwivelTalk_Episode1_description
    );
    await LIB_Resources.bc_verifyWatchNowForEpisode(Data_Resources.WatchNow_Button,4, Data_Resources.SwivelTalk_Episode1_videoId);

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
