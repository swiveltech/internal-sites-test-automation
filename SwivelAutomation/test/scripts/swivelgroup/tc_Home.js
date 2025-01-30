import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Newsroom from "../../components/SwivelGroup/LIB_Newsroom.js";
import LIB_ContactUs from "../../components/SwivelGroup/LIB_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/swivelGroup/dt_home.json" assert { type: "json" };
import Data_ContactUs from "../../data/swivelGroup/dt_contactUs.json" assert { type: "json" };
import Data_Newsroom from "../../data/swivelGroup/dt_newsroom.json" assert { type: "json" };

describe("Swivel Group Site", () => {
  // Covered Test Case Number : SG-1, SG-6, SG-7,SG-12, SG-13, SG-17
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

    await LIB_Home.bc_ClickOptionFromFooterPanel("Home");
    // Verify the Top Description
    await LIB_Common.bc_VerifyPageHeader(Data_Home.HomePage_Top_Description, 1);
    await LIB_Common.bc_VerifyTheButton("Find Out More", 1);

    // Navigate to About Us tab
    await LIB_Home.bc_ClickOptionFromFooterPanel("About Us");
    await LIB_Common.bc_VerifyTheAppURL("about-us");
    await LIB_Common.bc_VerifyH1Header("A Trusted Global Partner");

    // Navigate to Newsroom tab
    await LIB_Home.bc_ClickOptionFromFooterPanel("Newsroom");
    await LIB_Common.bc_VerifyTheAppURL("newsroom");
    await LIB_Common.bc_VerifyH1Header("Newsroom");

    // Navigate to Careers tab
    await LIB_Home.bc_ClickOptionFromFooterPanel("Careers");
    await LIB_Common.bc_VerifyTheAppURL("careers");
    await LIB_Common.bc_VerifyH1Header("Careers");

    // Navigate to Sitemap tab
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");
    await LIB_Common.bc_VerifyTheAppURL("sitemap");
    await LIB_Common.bc_VerifyH1Header("Sitemap");
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

  // Covered Test Case Number : SG-3, SG-4, SG-5
  it("Verify the Let's Talk and phone functionality", async () => {
    allureReporter.addStory(
      "Swivel Group Site Verify the Let's Talk and phone functionality",
    );
    allureReporter.startStep(
      "Swivel Group -> Home Page -> Verify the Let's Talk and phone functionality",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    await LIB_Home.bc_ClickOnLetsTalkButtonAndVerifyContactUsPage();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Contact_Us_Description, 1);
    await LIB_ContactUs.bc_VerifyContactUsPage();
    await LIB_ContactUs.bc_VerifyEmailUs(Data_ContactUs.EmailAddress);
    // Verify the Australia location
    await LIB_ContactUs.bc_VerifyVisitUsLocations(
      Data_ContactUs.Australia_SubHeader,
      Data_ContactUs.Australia_OfficeName,
      Data_ContactUs.Australia_Location_AddressLine1,
      Data_ContactUs.Australia_Location_AddressLine2,
      Data_ContactUs.Australia_Office_Number,
    );
    // Verify the Sri Lanka location 1
    await LIB_ContactUs.bc_VerifyVisitUsLocations(
      Data_ContactUs.SriLanka_SubHeader,
      Data_ContactUs.SriLanka_OfficeName,
      Data_ContactUs.SriLanka_Location_AddressLine1,
      Data_ContactUs.SriLanka_Location_AddressLine2,
      Data_ContactUs.SriLanka_Office_Number,
    );
    // Verify the Sri Lanka tech Office Location
    await LIB_ContactUs.bc_VerifyVisitUsLocations(
      Data_ContactUs.SriLanka_SubHeader,
      Data_ContactUs.SriLanka_TechOfficeName,
      Data_ContactUs.SriLanka_TechOffice_Location_AddressLine1,
      Data_ContactUs.SriLanka_TechOffice_Location_AddressLine2,
      Data_ContactUs.SriLanka_TechOffice_Number,
    );

    await LIB_ContactUs.bc_VerifyFooterCopyRightWithLogo(
      Data_ContactUs.Footer_CopyRight,
    );
    await LIB_ContactUs.bc_ClickOnFooterLogoAndVerifyHomePage();

    // Click on Find out more button in home page and verify the contact us page
    await LIB_Common.bc_ClickOnButton("Find Out More", 1);
    await LIB_Common.bc_VerifyH1Header("Contact Us");
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Contact_Us_Description, 1);
    await LIB_ContactUs.bc_VerifyContactUsPage();
    await LIB_ContactUs.bc_ClickOnFooterLogoAndVerifyHomePage();

    // Verify the phone functionality in home page
    await LIB_Home.bc_ClickOnPhoneNumberInHomePage(Data_Home.ContactNumber);
    // This browser alert is not captured in the screenshot.
    await LIB_Common.bc_TakeScreenShot("Calling Phone Number");
  });

  // Covered Test Case Number : SG-8, SG-9, SG-10, SG-11
  it("Verify the navigation of the our brands section", async () => {
    allureReporter.addStory(
      "Swivel Group Site Verify the navigation of the our brands section",
    );
    allureReporter.startStep(
      "Swivel Group -> Home Page ->  Our Brands -> Verify the navigation",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
    //Click on the our brand links
    // Swivel Finance Site
    await LIB_Home.bc_ClickOnOurBrandsLinksInHomePage(
      "Swivel_Finance_Brand_",
      "Visit SwivelFinance",
    );
    await browser.switchWindow(
      "Outsource Finance and Accounting Services - Swivel Finance",
    );
    await LIB_Common.bc_TakeScreenShot("Swivel Finance Site");
    await LIB_Common.bc_VerifyH1Header(
      "Australia's Premier Scalability Partner for Accounting Practices!",
    );
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Swivel Talent Site
    await LIB_Home.bc_ClickOnOurBrandsLinksInHomePage(
      "Swivel_Talent_Brand_",
      "Visit SwivelTalent",
    );
    await browser.switchWindow(
      "Swivel Talent | International Talent Acquisition Services",
    );
    await LIB_Common.bc_TakeScreenShot("Swivel Talent Site");
    await LIB_Common.bc_VerifyPageHeader("Top-tier Talent for", 1);
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Swivel Foundation Site
    await LIB_Home.bc_ClickOnOurBrandsLinksInHomePage(
      "Swivel_Foundation_Brand_",
      "Visit SwivelFoundation",
    );
    await browser.pause(2000);
    await browser.switchWindow("Home - Swivel Foundation");
    await LIB_Common.bc_TakeScreenShot("Swivel Foundation Site");
    await LIB_Common.bc_VerifyH1Header("“Create Opportunity");
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Swivel Tech Site
    await LIB_Home.bc_ClickOnOurBrandsLinksInHomePage(
      "Swivel_Tech_Brand_",
      "Visit SwivelTech",
    );
    await browser.pause(2000);
    await browser.switchWindow(
      "Software and Technology Consultancy Services - Swivel Tech",
    );
    await LIB_Common.bc_TakeScreenShot("Swivel Tech Site");
    await LIB_Common.bc_VerifyH1Header(
      "Purpose-Built Software Solutions Geared For Scale",
    );
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
  });

  // Covered Test Case Number : SG-14, SG-15
  it("Verify the navigation For More News and Chat to us section", async () => {
    allureReporter.addStory(
      "Swivel Group Site Verify the navigation For More News and Chat to us section",
    );
    allureReporter.startStep(
      "Swivel Group -> Home Page ->  Newsroom -> Verify the For More News and and Chat to us",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    await LIB_Home.bc_ClickOnForMoreNewsInHomePage();
    await LIB_Common.bc_VerifyH1Header(Data_Newsroom.Newsroom_Header);
    await LIB_Newsroom.bc_VerifyTopDescription(Data_Newsroom.Top_Description);
    await LIB_Newsroom.bc_VerifySocialClubEvents();

    await LIB_ContactUs.bc_ClickOnFooterLogoAndVerifyHomePage();

    // Click on Chat to us button in home page and verify the contact us page
    await LIB_Common.bc_ClickOnButton("Chat To Us", 1);
    await LIB_Common.bc_VerifyH1Header("Contact Us");
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Contact_Us_Description, 1);
    await LIB_ContactUs.bc_VerifyContactUsPage();
    await LIB_ContactUs.bc_ClickOnFooterLogoAndVerifyHomePage();
  });
});
