import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/swivelGroup/dt_home.json" assert { type: "json" };
import Data_Cookies from "../../data/swivelGroup/dt_cookie.json" assert { type: "json" };

describe("Swivel Group Site", () => {
  // Covered Test Case Number : SG-1, SG-7,SG-12, SG-13, SG-17
  it("Verify the Home Page", async () => {
    allureReporter.addFeature("Verify the Swivel group Home Page");
    allureReporter.addStory("Home Page");
    allureReporter.startStep("Swivel Group -> Home Page Verification");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
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

  // Covered Test Case Number : SG-2 , SG-16
  it("Verify user navigating to the correct section using links in the navigation bar", async () => {
    allureReporter.addStory("Swivel Site Top Navigation");
    allureReporter.startStep("Swivel Group -> Navigation Verification");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    // Navigate to home tab
    await LIB_Home.bc_NavigateToTabFromTopNavigation("Home");

    // Verify the Home Headers with Application logo
    await LIB_Home.bc_VerifyHomePageLogo();
    // Verify the Top Description
    await LIB_Common.bc_VerifyPageHeader(Data_Home.HomePage_Top_Description, 1);
    await LIB_Common.bc_VerifyTheButton("Find Out More", 1);

    // Navigate to About Us tab
    await LIB_Home.bc_NavigateToTabFromTopNavigation("About Us");
    await LIB_Common.bc_VerifyTheAppURL("about-us");
    await LIB_Common.bc_VerifyH1Header("A Trusted Global Partner");

    // Navigate to Newsroom tab
    await LIB_Home.bc_NavigateToTabFromTopNavigation("Newsroom");
    await LIB_Common.bc_VerifyTheAppURL("newsroom");
    await LIB_Common.bc_VerifyH1Header("Newsroom");

    // Navigate to Careers tab
    await LIB_Home.bc_NavigateToTabFromTopNavigation("Careers");
    await LIB_Common.bc_VerifyTheAppURL("careers");
    await LIB_Common.bc_VerifyH1Header("Careers");

    // Navigate to home tab
    await LIB_Home.bc_ClickOnApplicationLogoAndVerifyTheAppURL();
    // Verify the Top Description
    await LIB_Common.bc_VerifyPageHeader(Data_Home.HomePage_Top_Description, 1);
    await LIB_Common.bc_VerifyTheButton("Find Out More", 1);

    await LIB_Home.bc_ClickOptionFromFooterPanel("Home", 1);
    // Verify the Top Description
    await LIB_Common.bc_VerifyPageHeader(Data_Home.HomePage_Top_Description, 1);
    await LIB_Common.bc_VerifyTheButton("Find Out More", 1);

    // Navigate to About Us tab
    await LIB_Home.bc_ClickOptionFromFooterPanel("About Us", 2);
    await LIB_Common.bc_VerifyTheAppURL("about-us");
    await LIB_Common.bc_VerifyH1Header("A Trusted Global Partner");

    // Navigate to Newsroom tab
    await LIB_Home.bc_ClickOptionFromFooterPanel("Newsroom", 3);
    await LIB_Common.bc_VerifyTheAppURL("newsroom");
    await LIB_Common.bc_VerifyH1Header("Newsroom");

    // Navigate to Careers tab
    await LIB_Home.bc_ClickOptionFromFooterPanel("Careers", 4);
    await LIB_Common.bc_VerifyTheAppURL("careers");
    await LIB_Common.bc_VerifyH1Header("Careers");

    // Navigate to Sitemap tab
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap", 5);
    await LIB_Common.bc_VerifyTheAppURL("sitemap");
    await LIB_Common.bc_VerifyH1Header("Sitemap");
  });

  // Covered Test Case Number : SG-38 , SG-39 , SG-40 , SG-41, SG-42
  it("Verify the Cookie Policy and Privacy Policy", async () => {
    allureReporter.addStory("Swivel Site Cookie Policy and Privacy Policy");
    allureReporter.startStep(
      "Swivel Group -> Cookie Policy and Privacy Policy",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    await LIB_Home.bc_VerifyWeValueYourPrivacy(
      Data_Home.Privacy_Header,
      Data_Home.Privacy_Description,
    );

    await LIB_Common.bc_ClickOnLinks("Cookie Policy");
    await browser.switchWindow(config.URLS.SWIVEL_GROUP + "cookie-policy");
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Cookie_Header, 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Top_Description, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.WhatAreCookies_Description,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Title_WhatAreCookies, 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Title_HowWeUseCookies, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.HowWeUseCookies_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.HowWeUseCookies_Description2,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.HowWeUseCookies_Description3,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.Title_DisablingCookies,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.DisablingCookies_Description,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Title_TheCookiesWeSet, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description2,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description3,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description4,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description5,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description6,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description7,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Title_MoreInformation, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.MoreInformation_Description,
      1,
    );
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
    // Click on Decline All Button
    await LIB_Common.bc_ClickOnButton("Decline All", 1);
    await LIB_Home.bc_VerifyWeValueYourPrivacyNotPresent(
      Data_Home.Privacy_Header,
      Data_Home.Privacy_Description,
    );

    await LIB_Home.bc_ClearCacheAndCookiesAndReload();
    await LIB_Home.bc_VerifyWeValueYourPrivacy(
      Data_Home.Privacy_Header,
      Data_Home.Privacy_Description,
    );

    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
    await LIB_Home.bc_VerifyWeValueYourPrivacyNotPresent(
      Data_Home.Privacy_Header,
      Data_Home.Privacy_Description,
    );
  });

  // Covered Test Case Number : SG-18
  it("Verify social media links are clickable and redirecting to correct page", async () => {
    allureReporter.addStory(
      "Swivel Site Verify the social media links and navigation",
    );
    allureReporter.startStep(
      "Swivel Group -> Home Page -> Navigation of Social Media",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);

    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);

    // Click on Facebook and verify it
    await LIB_Home.bc_ClickOnFacebookIcon();
    await browser.switchWindow("Swivel Group | Facebook");
    await LIB_Home.bc_VerifyTheFacebookPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Click on Twitter and verify it
    await LIB_Home.bc_ClickOnTwitterIcon();
    await browser.pause(8000);
    await browser.switchWindow("Log in to X / X");
    await LIB_Home.bc_VerifyTheTwitterPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Click on Linkedin and verify it
    await LIB_Home.bc_ClickOnLinkedinIcon();
    await browser.switchWindow("Swivel Group | LinkedIn");
    await LIB_Home.bc_VerifyTheLinkedinPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Click on Instagram and verify it
    await LIB_Home.bc_ClickOnInstagramIcon();
    await browser.switchWindow(
      "Swivel Group (@swivel.group) • Instagram photos and videos",
    );
    await LIB_Home.bc_VerifyTheInstagramPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
  });
});
