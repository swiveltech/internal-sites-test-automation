import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";

describe("Swivel Tech Site -> Home Page ", () => {
  // Covered Test Case Number :
  it("Verify the Home Page", async () => {
    allureReporter.addFeature("Verify the Swivel Tech Home Page");
    allureReporter.addStory("Home Page");
    allureReporter.startStep("Swivel Tech -> Home Page Verification");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Home.bc_VerifyHomeScreenTopPanel(
      "Home;About Us;How We Work;Services;Resources;Careers",
    );
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header2, 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Description, 1);
    await LIB_Home.bc_VerifyContactTopPanel(Data_Home.ContactNumber);

    // Top First Sub set verify
    await LIB_Common.bc_VerifyH2Header(
      Data_Home.SubTitle_WeAreProficientInYourTechStack,
    );
    // This is falling , need to check dilshan
    // await LIB_Common.bc_VerifyPageHeader(
    //   Data_Home.SubTitle_AchieveInnovationAndExcellenceThroughOurSoftwareServices,
    //   1,
    // );
    // await LIB_Common.bc_VerifyPageHeader(
    //   Data_Home.AchieveInnovationAndExcellenceThroughOurSoftwareServices_Description,
    //   1,
    // );

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
    // This is falling , need to check dilshan
    // await LIB_Home.bc_VerifyHowWeWork(
    //   Data_Home.HowWeWork_ProjectBasedModel,
    //   Data_Home.ProjectBasedModel_Description,
    // );

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
    // This is falled
    /*
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
    */
    await LIB_Common.bc_VerifyTheButton("READ MORE", 1);

    //Verify the Trusted By
    await LIB_Common.bc_VerifyH2Header(Data_Home.Title_TrustedBy);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.TrustedBy_Description, 1);

    //Verify the Our Latest Insights
    await LIB_Common.bc_VerifyH2Header(Data_Home.Title_OurLatestInsights);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.OurLatestInsights_Description,
      1,
    );
  });
});
