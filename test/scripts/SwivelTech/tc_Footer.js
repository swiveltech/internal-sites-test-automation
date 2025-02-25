import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_Footer from "../../data/SwivelTech/dt_footer.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";

describe("Swivel Tech Site -> Footer Section in Home Page", () => {
  it("Verify the Footer Section in Home Page", async () => {
    allureReporter.addFeature(
      "Verify the Swivel Tech Footer Section in Home Page",
    );
    allureReporter.addStory("Verify Footer Section in Home Page");
    allureReporter.startStep("Swivel Tech -> Verify Footer Section");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    //Click on Home
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu1,
      Data_Footer.SubMenu_Home,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    //Click on About Us
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu1,
      Data_Footer.SubMenu_AboutUs,
    );
    await LIB_Common.bc_VerifyH1Header(Data_Footer.Header_AboutUs);
    await LIB_Common.bc_VerifyTheAppURL("about-us");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    let appURL = config.URLS.SWIVEL_TECH;
    appURL = appURL.split("//")[1];
    if (appURL.includes("/")) {
      appURL = appURL.split("/")[0];
    }
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Click on How We Work
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu1,
      Data_Footer.SubMenu_HowWeWork,
    );
    await LIB_Common.bc_VerifyH1Header(
      Data_Footer.Header_ProjectBasedSoftwareDevelopment,
    );
    await LIB_Common.bc_VerifyTheAppURL("project-based-software-development");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Click on Case Studies
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu1,
      Data_Footer.SubMenu_CaseStudies,
    );
    await LIB_Common.bc_VerifyH1Header(Data_Footer.Header_CaseStudies);
    await LIB_Common.bc_VerifyTheAppURL("case-studies");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Click on Blogs
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu1,
      Data_Footer.Header_Blogs,
    );
    await LIB_Common.bc_VerifyH1Header(Data_Footer.Header_Blogs);
    await LIB_Common.bc_VerifyTheAppURL("blogs");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Click on Artificial Intelligence
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu2,
      Data_Footer.SubMenu_ArtificialIntelligence,
    );
    await LIB_Common.bc_VerifyH1Header(
      Data_Footer.Header_ArtificialIntelligenceConsultingServices,
    );
    await LIB_Common.bc_VerifyTheAppURL("artificial-intelligence");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Click on DevOps As A Service
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu2,
      Data_Footer.SubMenu_DevOpsAsAService,
    );
    await LIB_Common.bc_VerifyH1Header(
      Data_Footer.Header_DevOpsConsultingServicesAndSolutions,
    );
    await LIB_Common.bc_VerifyTheAppURL("devops-as-a-service");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Click on Enterprise Software Development
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu2,
      Data_Footer.SubMenu_EnterpriseSoftwareDevelopment,
    );
    await LIB_Common.bc_VerifyH1Header(
      Data_Footer.Header_EnterpriseApplicationSoftwareDevelopmentSolutions,
    );
    await LIB_Common.bc_VerifyTheAppURL("enterprise-software-development");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Click on Managed Service Augmentation
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu2,
      Data_Footer.SubMenu_ManagedServiceAugmentation,
    );
    await LIB_Common.bc_VerifyH1Header(
      Data_Footer.Header_SeamlesslyExpandYourTeamWith,
    );
    await LIB_Common.bc_VerifyTheAppURL("managed-service-augmentation");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Click on QA as a Service
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu2,
      Data_Footer.SubMenu_QAAsAService,
    );
    await LIB_Common.bc_VerifyH1Header(
      Data_Footer.Header_OutsourcedQualityAssuranceServices,
    );
    await LIB_Common.bc_VerifyTheAppURL("qa-as-a-service");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Click on Search Engine Optimisation
    await LIB_Home.bc_ClickOnFooterOption(
      Data_Home.Footer_MainMenu2,
      Data_Footer.SubMenu_SearchEngineOptimisation,
    );
    await LIB_Common.bc_VerifyH1Header(
      Data_Footer.Header_SEOConsultancyAndAuditingServices,
    );
    await LIB_Common.bc_VerifyTheAppURL("search-engine-optimization");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Common.bc_VerifyTheAppURL(appURL);

    //Verify the Email
    await LIB_Common.bc_VerifyH4Header(
      Data_Footer.Footer_Header_SignUpForOurNewsLetter,
    );

    await LIB_Home.bc_VerifySignUpForOurNewsletter();
    await LIB_Common.bc_ClickOnButton("SUBSCRIBE", 1);
    await LIB_Home.bc_VerifyErrorMessageUnderEmail(
      Data_Footer.RequiredMessage_UnderEmail,
    );
    await LIB_Home.bc_TypeEmailIntoSignUpForOurNewsletter("Invalid");
    await LIB_Common.bc_ClickOnButton("SUBSCRIBE", 1);
    await LIB_Home.bc_VerifyErrorMessageUnderEmail(
      Data_Footer.ErrorMessage_UnderEmail,
    );
    await LIB_Home.bc_TypeEmailIntoSignUpForOurNewsletter(
      Data_Footer.Valid_Email,
    );
    await LIB_Common.bc_ClickOnButton("SUBSCRIBE", 1);
    await LIB_Home.bc_VerifyThankYouMessageUnderEmail(
      Data_Footer.ThankYouMessage_UnderEmail,
    );
    await LIB_Common.bc_VerifyH4Header(Data_Footer.Header_FollowUsOn);
    await LIB_Home.bc_VerifySocialMediaIconsAndURL();
  });

  it("Verify the Footer Social Media Section", async () => {
    allureReporter.addFeature(
      "Verify the Swivel Tech Footer Social Media Section",
    );
    allureReporter.addStory("Verify Footer Social Media Section");
    allureReporter.startStep("Swivel Tech -> Verify Social Media Section");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_VerifySocialMediaIconsAndURL();

    //Click on Facebook Icon
    await LIB_Home.bc_ClickOnFaceBookIconAndVerifyIt();
    await LIB_Home.bc_VerifyTheFacebookPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Click on Twitter and verify it
    await LIB_Home.bc_ClickOnTwitterIcon();
    await LIB_Home.bc_VerifyTheTwitterPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Click on Linkedin and verify it
    await LIB_Home.bc_ClickOnLinkedinIcon();
    await LIB_Home.bc_VerifyTheLinkedinPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Click on Instagram and verify it
    await LIB_Home.bc_ClickOnInstagramIcon();
    await LIB_Home.bc_VerifyTheInstagramPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
  });
});
