import webActions from "../../../infrastructure/web/webActions.js";
import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/swivelGroup/dt_home.json" assert { type: "json" };

describe("Swivel Group Site", () => {
  it("Verify the Home Page", async () => {
    allureReporter.addFeature("Verify the Swivel group Home Page");
    allureReporter.addStory("Home Page");
    allureReporter.startStep("Swivel Group -> Home Page Verification");
    await LIB_Common.bc_OpenApplication(config.DEFAULT_URL);
    // Verify the Headers and top panel
    await LIB_Home.bc_VerifyHomePageLogo();
    await LIB_Home.bc_VerifyHomeScreenTopPanel(
      "Home;About Us;Newsroom;Careers",
    );
    await LIB_Home.bc_VerifyContactDetailsInTopPanel(Data_Home.ContactNumber);

    // Navigate to home tab
    await LIB_Home.bc_NavigateToTabFromTopNavigation("Home");

    // Verify the Top Description
    await LIB_Common.bc_VerifyPageHeader(Data_Home.HomePage_Top_Description, 1);
    await LIB_Common.bc_VerifyTheButton("Find Out More", 1);

    // Verify the 'Experts In' Section
    await LIB_Common.bc_VerifyPageHeader("Experts In", 1);
    await LIB_Home.bc_VerifyTheExpertsInTitle(
      Data_Home.ExpertsIn1_SoftwareDevelopment,
      1,
    );
    await LIB_Home.bc_VerifyTheExpertsInTitle(
      Data_Home.ExpertsIn2_AccountingAndFinance,
      2,
    );
    await LIB_Home.bc_VerifyTheExpertsInTitle(
      Data_Home.ExpertsIn3_Recruitment,
      3,
    );
    await LIB_Home.bc_VerifyTheExpertsInTitle(
      Data_Home.ExpertsIn4_DevOpsAsAService,
      4,
    );
    await LIB_Home.bc_VerifyTheExpertsInTitle(
      Data_Home.ExpertsIn5_QAAsAService,
      5,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.HomePage_Bottom_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.HomePage_Bottom_Description2,
      1,
    );

    //Verify the Center Item
    await LIB_Home.bc_VerifyTheCenterItems(
      Data_Home.Title_SolutionDesign,
      Data_Home.SolutionDesign_Description,
      1,
    );
    await LIB_Home.bc_VerifyTheCenterItems(
      Data_Home.Title_Implementation,
      Data_Home.Implementation_Description,
      2,
    );
    await LIB_Home.bc_VerifyTheCenterItems(
      Data_Home.Title_Delivery,
      Data_Home.Delivery_Description,
      3,
    );

    //Verify the 'Our Brands' Section
    await LIB_Common.bc_VerifyPageHeader("Our Brands", 1);
    await LIB_Home.bc_VerifyOurBrandsInHomePage(
      "Swivel_Tech_Brand_",
      Data_Home.SwivelTech_Description,
    );
    await LIB_Home.bc_VerifyOurBrandsInHomePage(
      "Swivel_Finance_Brand_",
      Data_Home.SwivelFinance_Description,
    );
    await LIB_Home.bc_VerifyOurBrandsInHomePage(
      "Swivel_Talent_Brand_",
      Data_Home.SwivelTalent_Description,
    );
    await LIB_Home.bc_VerifyOurBrandsInHomePage(
      "Swivel_Foundation_Brand_",
      Data_Home.SwivelFoundation_Description,
    );

    //Verify the our brand with links
    await LIB_Home.bc_VerifyOurBrandsWithLinksInHomePage(
      "Swivel_Tech_Brand_",
      "Visit SwivelTech",
    );
    await LIB_Home.bc_VerifyOurBrandsWithLinksInHomePage(
      "Swivel_Finance_Brand_",
      "Visit SwivelFinance",
    );
    await LIB_Home.bc_VerifyOurBrandsWithLinksInHomePage(
      "Swivel_Talent_Brand_",
      "Visit SwivelTalent",
    );
    await LIB_Home.bc_VerifyOurBrandsWithLinksInHomePage(
      "Swivel_Foundation_Brand_",
      "Visit SwivelFoundation",
    );
    await LIB_Common.bc_TakeScreenShot("Our Brands");
    //Verify the 'Our Clients' Section
    await LIB_Common.bc_VerifyPageHeader("Our Clients", 1);
    await LIB_Common.bc_TakeScreenShot("Our Clients");

    //Verify the 'Newsroom' Section
    await LIB_Common.bc_VerifyPageHeader("Newsroom", 1);
    await LIB_Common.bc_TakeScreenShot("Newsroom");

    // Verify the Top Description
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.HomePage_Bottom_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.HomePage_Bottom_Description2,
      1,
    );
    await LIB_Common.bc_VerifyTheButton("Chat To Us", 1);

    // Verify the footer panel
    await LIB_Home.bc_VerifyHomeScreenFooterPanel(
      "Home;About Us;Newsroom;Careers;Sitemap",
    );
    await LIB_Home.bc_VerifyTheSocialMediaIcon();
  });
});
