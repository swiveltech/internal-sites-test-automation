import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.js";
import Data_AboutUs from "../../data/SwivelFinance/dt_aboutUs.js";
import Data_Careers from "../../data/SwivelFinance/dt_careers.js";
import Data_ContactUs from "../../data/SwivelFinance/dt_contactUs.js";
import Data_CookiePolicy from "../../data/SwivelFinance/dt_cookiePolicy.js";
import Data_PrivacyPolicy from "../../data/SwivelFinance/dt_privacyPolicy.js";
import Data_SuccessfulClientProject from "../../data/SwivelFinance/dt_successfulClientProject.js";
import Data_ThoughtLeadership from "../../data/SwivelFinance/dt_thoughtLeadership.js";
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";

describe("Swivel Finance Site -> Home Page", () => {
  it("Verify the Home Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Home Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);

    // Verify the top panel
    await LIB_Home.bc_VerifyHomePageLogo();
    await LIB_Home.bc_VerifyHomeScreenTopPanel(
      "Home;Services;How We Work;Insights;Who we are;Careers",
    );
    await LIB_Home.bc_VerifyPhoneNumberAndTalkButtonOnTop(
      Data_Home.ContactNumber,
    );

    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);
    await LIB_Common.bc_VerifyTheButton("Connect With Us", 1);

    //Verify the We value your privacy popup
    await LIB_Home.bc_VerifyWeValueYourPrivacyPopUp(
      Data_Home.PopUp_Header_WeValueYourPrivacy,
      Data_Home.PopUp_Description_WeValueYourPrivacy,
    );
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await browser.pause(3000);

    // Verify the Experts In
    await LIB_Common.bc_VerifyH4Header(Data_Home.Title_ExpertsIn);
    await LIB_Common.bc_TakeScreenShot("Experts In Swivel Finance");

    //Verify the Our Story
    await LIB_Common.bc_VerifyH2Header(Data_Home.Title_OurStory);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.OurStory_Description, 1);

    // Verify the Services We Deliver
    await LIB_Common.bc_VerifyH4Header(Data_Home.Title_ServicesWeDeliver);
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_GeneralLedgerAccounting,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_BusinessActivityStatements,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_IncomeTaxReturns,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_CompanyTaxReturns,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_ManagementReporting,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_Payroll,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_SelfManagedSuperFunds,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_Bookkeeping,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_Division7a,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_TaxPlanning,
    );

    // Verify the How We Work
    await LIB_Common.bc_VerifyH2Header(Data_Home.Title_HowWeWork);
    await LIB_Common.bc_VerifyH3Header(Data_Home.HowWeWork_SubTitle_Augmented);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.HowWeWork_Augmented_Description,
      1,
    );
    await LIB_Common.bc_VerifyH3Header(Data_Home.HowWeWork_SubTitle_JobBased);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.HowWeWork_JobBased_Description,
      1,
    );
    await LIB_Common.bc_VerifyH3Header(
      Data_Home.Title_SuccessfulClientProjectsAndCounting,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.SuccessfulClientProjectsAndCounting_Description,
      1,
    );

    await LIB_Home.bc_VerifySuccessfulClientProject(
      Data_Home.SubTitle_SuccessfulClient1,
      Data_Home.SuccessfulClient1_Description,
    );
    await LIB_Home.bc_VerifySuccessfulClientProject(
      Data_Home.SubTitle_SuccessfulClient2,
      Data_Home.SuccessfulClient2_Description,
    );
    await LIB_Home.bc_VerifySuccessfulClientProject(
      Data_Home.SubTitle_SuccessfulClient3,
      Data_Home.SuccessfulClient3_Description,
    );

    // Verify the We Have Worked With Them
    await LIB_Common.bc_VerifyH3Header(
      Data_Home.Title_WeHaveWorkedWithThousandsOfAmazingPeople,
    );

    await LIB_Home.bc_VerifyWeHaveWorkedWithThem(
      Data_Home.People1_Description,
      Data_Home.People1_Name,
      Data_Home.People1_Job,
    );
    await LIB_Home.bc_VerifyWeHaveWorkedWithThem(
      Data_Home.People2_Description,
      Data_Home.People2_Name,
      Data_Home.People2_Job,
    );
    await LIB_Home.bc_VerifyWeHaveWorkedWithThem(
      Data_Home.People3_Description,
      Data_Home.People3_Name,
      Data_Home.People3_Job,
    );

    // Verify the thought Leadership
    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_ThoughtLeadership);
    await LIB_Common.bc_VerifyAnyText(
      Data_Home.ThoughtLeadership_Description,
      1,
    );
    await LIB_Home.bc_VerifyThoughtLeadership(Data_Home.Tile_ThoughtLeadership);

    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_WeWouldLoveToHelpYou);
    await LIB_Common.bc_VerifyTheButton("Connect With Us", 1);

    await LIB_Common.bc_VerifyTheParagraph(
      Data_Home.HomePage_Bottom_Description,
    );
    await LIB_Home.bc_VerifyTheFooter();
    await LIB_Home.bc_VerifyHomeScreenFooterPanel(
      "HOME;SERVICES;HOW WE WORK;INSIGHTS;WHO WE ARE;CAREERS",
    );
    await LIB_Common.bc_VerifyLinks("Privacy Policy");
    await LIB_Common.bc_VerifyLinks("Cookie Policy");
  });

  it("Verify the Home Page Navigation", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Home Page Navigation Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on "Connect With Us" button in top of home page and verify the landing page
    await LIB_Common.bc_ClickOnButton("Connect With Us", 1);
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    await LIB_Common.bc_VerifyH1Header(Data_ContactUs.Header_ContactUs);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.ContactUs_Description,
    );

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Let's Talk  button and verify the landing page
    await LIB_Home.bc_ClickOnLetsTalkButton();
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.Header_SendUsAMessage,
    );

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Tab "Services"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_Services);
    await LIB_Common.bc_TakeScreenShot("Services from Swivel finance site");
    await LIB_Common.bc_VerifyH1Header(Data_Home.Title_OurServices);
    await LIB_Common.bc_VerifyAnyText(
      Data_Home.Description_OurServices,
      1,
    );

    //Click on Tab "How We Work"
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_Services);
    await LIB_Common.bc_TakeScreenShot("Services from Swivel finance site");
    await LIB_Common.bc_VerifyH1Header(Data_Home.Title_OurServices);
    await LIB_Common.bc_VerifyAnyText(
      Data_Home.Description_OurServices,
      1,
    );

    //Click on Tab "Insights"
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_Insights);
    await LIB_Common.bc_TakeScreenShot("Insights from Swivel finance site");
    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_ThoughtLeadership);
    await LIB_Common.bc_VerifyAnyText(
      Data_Home.ThoughtLeadership_Description,
      1,
    );

    //Click on Tab "Who we are"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_WhoWeAre);
    await LIB_Common.bc_TakeScreenShot("Who We Are from Swivel finance site");
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.Header_AboutUs);
    await LIB_Common.bc_VerifyAnyText(Data_AboutUs.AboutUs_Description, 1);
    await LIB_Common.bc_VerifyTheAppURL("who-we-are");

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Tab "Careers"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_Careers);
    await LIB_Common.bc_TakeScreenShot("Careers from Swivel finance site");
    await LIB_Common.bc_VerifyH1Header(Data_Careers.Header_Careers);
    await LIB_Common.bc_VerifyTheParagraph(Data_Careers.Careers_Description);
    await LIB_Common.bc_VerifyTheAppURL("careers");

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on "Connect With Us" button in bottom of home page and verify the landing page
    await LIB_Common.bc_ClickOnButton("Connect With Us", 2);
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    await LIB_Common.bc_VerifyH1Header(Data_ContactUs.Header_ContactUs);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.ContactUs_Description,
    );

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Tab "Services"
    await LIB_Home.bc_ClickOnTabFromFooterPanel("SERVICES");
    await LIB_Common.bc_TakeScreenShot("Services Swivel finance site Footer");
    await LIB_Common.bc_VerifyH1Header(Data_Home.Title_OurServices);
    await LIB_Common.bc_VerifyAnyText(
      Data_Home.Description_OurServices,
      1,
    );
    await LIB_Home.bc_ClickOnTopAppLogo();

    //Click on Tab "How We Work"
    await LIB_Home.bc_ClickOnTabFromFooterPanel("HOW WE WORK");
    await LIB_Common.bc_TakeScreenShot(
      "How We Work Swivel finance site Footer",
    );
    await LIB_Common.bc_VerifyH2Header(Data_Home.Title_HowWeWork);

    //Click on Tab "Insights"
    await LIB_Home.bc_ClickOnTabFromFooterPanel("INSIGHTS");
    await LIB_Common.bc_TakeScreenShot("Insights Swivel finance site Footer");
    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_ThoughtLeadership);
    await LIB_Common.bc_VerifyAnyText(
      Data_Home.ThoughtLeadership_Description,
      1,
    );

    //Click on Tab "Who we are"
    await LIB_Home.bc_ClickOnTabFromFooterPanel("WHO WE ARE");
    await LIB_Common.bc_TakeScreenShot("Who We Are from Swivel finance footer");
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.Header_AboutUs);
    await LIB_Common.bc_VerifyAnyText(Data_AboutUs.AboutUs_Description, 1);
    await LIB_Common.bc_VerifyTheAppURL("who-we-are");

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Tab "Careers"
    await LIB_Home.bc_ClickOnTabFromFooterPanel("CAREERS");
    await LIB_Common.bc_TakeScreenShot("Careers Swivel finance site Footer");
    await LIB_Common.bc_VerifyH1Header(Data_Careers.Header_Careers);
    await LIB_Common.bc_VerifyTheParagraph(Data_Careers.Careers_Description);
    await LIB_Common.bc_VerifyTheAppURL("careers");

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Instagram icon
    await LIB_Home.bc_ClickOnInstagramIcon();
    await LIB_Common.bc_TakeScreenShot("Instagram From Swivel Finance in Home");
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    //Click on Linkedin icon
    await LIB_Home.bc_ClickOnLinkedinIcon();
    await LIB_Common.bc_TakeScreenShot("Linkedin From Swivel Finance in Home");
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    //Click on Privacy Policy
    await LIB_Common.bc_ClickOnLinks("Privacy Policy");
    await LIB_Common.bc_VerifyH1Header(Data_PrivacyPolicy.Header_PrivacyPolicy);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_PrivacyPolicy.PrivacyPolicy_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("privacy-policy");

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Cookie Policy
    await LIB_Common.bc_ClickOnLinks("Cookie Policy");
    await LIB_Common.bc_VerifyH1Header(Data_CookiePolicy.Header_CookiePolicy);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_CookiePolicy.CookiePolicy_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("cookie-policy");

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);
  });

  it("Verify the Home Page -> Successful Client Projects", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Home Page -> Successful Client Projects Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Successful Client Project
    await LIB_Home.bc_ClickOnSuccessfulClientProjectReadMoreLink(
      Data_Home.SubTitle_SuccessfulClient1,
      Data_Home.SuccessfulClient1_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("a-leading-accounting-firm");
    await LIB_Common.bc_VerifyH1Header(
      Data_SuccessfulClientProject.Header_ALeadingAccountingFirm,
    );
    await LIB_Common.bc_VerifyH5Header(
      Data_SuccessfulClientProject.SubTitle_TheNeed,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_SuccessfulClientProject.TheNeed_Description,
    );
    await LIB_Common.bc_VerifyH5Header(
      Data_SuccessfulClientProject.SubTitle_TheSolution,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_SuccessfulClientProject.TheSolution_Description,
    );
    await LIB_Common.bc_VerifyH5Header(
      Data_SuccessfulClientProject.SubTitle_TheResult,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_SuccessfulClientProject.TheResult_Description,
    );

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Successful Client Project
    await LIB_Home.bc_ClickOnSuccessfulClientProjectReadMoreLink(
      Data_Home.SubTitle_SuccessfulClient2,
      Data_Home.SuccessfulClient2_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("a-top-100-accounting-firm");

    await LIB_Common.bc_VerifyH1Header(
      Data_SuccessfulClientProject.Header_ATop100AccountingFirm,
    );
    await LIB_Common.bc_VerifyH5Header(
      Data_SuccessfulClientProject.SubTitle_TheNeed,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_SuccessfulClientProject.TheNeed_DescriptionForProject2,
    );
    await LIB_Common.bc_VerifyH5Header(
      Data_SuccessfulClientProject.SubTitle_TheSolution,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_SuccessfulClientProject.TheSolution_DescriptionForProject2,
    );
    await LIB_Common.bc_VerifyH5Header(
      Data_SuccessfulClientProject.SubTitle_TheResult,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_SuccessfulClientProject.TheResult_DescriptionForProject2,
    );

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Successful Client Project
    await LIB_Home.bc_ClickOnSuccessfulClientProjectReadMoreLink(
      Data_Home.SubTitle_SuccessfulClient3,
      Data_Home.SuccessfulClient3_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("a-leading-australian-health-provider");

    await LIB_Common.bc_VerifyH1Header(
      Data_SuccessfulClientProject.Header_ALeadingAustralianHealthProvider,
    );
    await LIB_Common.bc_VerifyH5Header(
      Data_SuccessfulClientProject.SubTitle_TheNeed,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_SuccessfulClientProject.TheNeed_DescriptionForProject3,
    );
    await LIB_Common.bc_VerifyH5Header(
      Data_SuccessfulClientProject.SubTitle_TheSolution,
    );
    await LIB_Home.bc_VerifyAnyTextForPTag(
      Data_SuccessfulClientProject.TheSolution_DescriptionForProject3,
      1,
    );
    await LIB_Common.bc_VerifyH5Header(
      Data_SuccessfulClientProject.SubTitle_TheResult,
    );
    await LIB_Common.bc_VerifyTheParagraph(
      Data_SuccessfulClientProject.TheResult_DescriptionForProject3,
    );
  });

  it("Verify the Home Page -> Thought Leadership", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Home Page -> Thought Leadership Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Thought Leadership Visit More
    await LIB_Home.bc_ClickOnThoughtLeadershipVisitMore(
      Data_Home.Tile_ThoughtLeadership,
    );
    await LIB_Common.bc_VerifyTheAppURL(
      "finance-the-offshore-blueprint-for-accounting-practices",
    );

    await LIB_Common.bc_VerifyAnyText(
      Data_ThoughtLeadership.Header_TheOffshoreBlueprintForAccountingPractices,
      1,
    );
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.Title1, 1);
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.Point1, 1);
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.Point2, 1);
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.Point3, 1);
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.Description1, 1);

    await LIB_Common.bc_VerifyAnyText(
      Data_ThoughtLeadership.Header_AboutTheAuthor,
      1,
    );

    await LIB_Common.bc_VerifyAnyText(
      Data_ThoughtLeadership.AboutTheAuthor_P1,
      1,
    );
    await LIB_Common.bc_VerifyAnyText(
      Data_ThoughtLeadership.AboutTheAuthor_P2,
      1,
    );
    await LIB_Common.bc_VerifyAnyText(
      Data_ThoughtLeadership.AboutTheAuthor_P3,
      1,
    );

    await LIB_Home.bc_VerifyDownloadBookForm();

    await LIB_Home.bc_VerifyTheAuthor();
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.AddressLine1, 1);
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.AddressLine2, 1);
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.AddressLine3, 1);
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.PhoneNumber, 1);
    await LIB_Common.bc_VerifyAnyText(Data_ThoughtLeadership.Footer, 1);
    await LIB_Home.bc_VerifyTheAuthorSocialMedia();
  });
});
