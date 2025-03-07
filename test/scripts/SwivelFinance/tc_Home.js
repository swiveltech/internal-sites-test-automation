import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.json" assert { type: "json" };
import Data_AboutUs from "../../data/SwivelFinance/dt_aboutUs.json" assert { type: "json" };
import Data_Careers from "../../data/SwivelFinance/dt_careers.json" assert { type: "json" };
import Data_ContactUs from "../../data/SwivelFinance/dt_contactUs.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";

describe("Swivel Finance Site -> Home Page ", () => {
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

    //Click on "Connect With Us" button and verify the landing page
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
    await LIB_Common.bc_VerifyH4Header(Data_Home.Title_ServicesWeDeliver);

    //Click on Tab "How We Work"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_HowWeWork);
    await LIB_Common.bc_TakeScreenShot("How We Work from Swivel finance site");
    await LIB_Common.bc_VerifyH2Header(Data_Home.Title_HowWeWork);

    //Click on Tab "Insights"
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
  });
});
