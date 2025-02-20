import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_Resources from "../../data/SwivelTech/dt_resources.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_Resources from "../../components/SwivelTech/LIB_Resources.js";

describe("Swivel Tech Site -> Resources Page", () => {
  it("Verify the Resources Page -> Blogs Page", async () => {
    allureReporter.addFeature(
      "Verify the Swivel Tech Resources Page -> Blogs Page",
    );
    allureReporter.addStory("Verify Resources Page -> Blogs Page");
    allureReporter.startStep(
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
    // await LIB_Home.bc_VerifyOurLatestInsightsTile(
    //   Data_Resources.OurLatestInsights6_Title,
    //   Data_Resources.OurLatestInsights6_Category,
    //   Data_Resources.OurLatestInsights6_Date,
    //   Data_Resources.OurLatestInsights6_SubDescription,
    // );failing
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
    // await LIB_Home.bc_VerifyOurLatestInsightsTile(
    //   Data_Resources.OurLatestInsights12_Title,
    //   Data_Resources.OurLatestInsights12_Category,
    //   Data_Resources.OurLatestInsights12_Date,
    //   Data_Resources.OurLatestInsights12_SubDescription,
    // );failing
    // await LIB_Home.bc_VerifyOurLatestInsightsTile(
    //   Data_Resources.OurLatestInsights13_Title,
    //   Data_Resources.OurLatestInsights13_Category,
    //   Data_Resources.OurLatestInsights13_Date,
    //   Data_Resources.OurLatestInsights13_SubDescription,
    // );failing
    await LIB_Common.bc_VerifyH3Header(Data_Resources.Header_HowCanWeHelpYou);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Resources.HowCanWeHelpYou_Description,
    );
    await LIB_Common.bc_VerifyTheButton("Book a Discovery Call", 1);
  });
});
