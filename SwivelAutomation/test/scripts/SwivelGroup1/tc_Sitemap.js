import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Sitemap from "../../components/SwivelGroup/LIB_Sitemap.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Sitemap from "../../data/SwivelGroup/dt_sitemap.json" assert { type: "json" };
import Data_AboutUs from "../../data/SwivelGroup/dt_aboutUs.json" assert { type: "json" };
import Data_SwivelFinance from "../../data/SwivelGroup/dt_swivelFinance.json" assert { type: "json" };
import Data_SwivelTalent from "../../data/SwivelGroup/dt_swivelTalent.json" assert { type: "json" };
import Data_Careers from "../../data/SwivelGroup/dt_careers.json" assert { type: "json" };
import Data_PrivacyPolicy from "../../data/SwivelGroup/dt_privacyPolicy.json" assert { type: "json" };
import Data_ContactUs from "../../data/SwivelGroup/dt_contactUs.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_AboutUs from "../../components/SwivelGroup/LIB_AboutUs.js";

describe("Swivel Group Site -> Sitemap Page ", () => {
  // Covered Test Case Number : SG-43, SG-44, SG-45, SG-46, SG-47, SG-48
  it("Verify the Sitemap Page", async () => {
    allureReporter.addStory("Swivel Group Site Sitemap Page");
    allureReporter.startStep("Swivel Group -> Verify the Sitemap Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");
    await LIB_Common.bc_VerifyH1Header(Data_Sitemap.Sitemap_Header);
    let parentGUID;
    let childGUID;

    // get parent GUID
    parentGUID = await browser.getWindowHandle();
    // Verify the page navigation Home -> Intro
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Home,
      Data_Sitemap.Home_SubTitleAsOption_Intro,
    );
    await LIB_Common.bc_VerifyTheButton("Find Out More", 1);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");
    // Verify the page navigation Home -> Our Brands
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Home,
      Data_Sitemap.Home_SubTitleAsOption_OurBrands,
    );
    await LIB_Common.bc_VerifyPageHeader("Our Brands", 1);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation Home -> Our Clients
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Home,
      Data_Sitemap.Home_SubTitleAsOption_OurClients,
    );
    await LIB_Common.bc_VerifyPageHeader("Our Clients", 1);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");
    // Verify the page navigation Home -> Newsroom
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Home,
      Data_Sitemap.Home_SubTitleAsOption_Newsroom,
    );
    await LIB_Common.bc_VerifyPageHeader("Newsroom", 1);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation About Us -> Intro
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_AboutUs,
      Data_Sitemap.AboutUs_SubTitleAsOption_Intro,
    );
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.AboutUs_Header);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation About Us -> Intro
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_AboutUs,
      Data_Sitemap.AboutUs_SubTitleAsOption_Intro,
    );
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.AboutUs_Header);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation About Us -> Our Clients
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_AboutUs,
      Data_Sitemap.AboutUs_SubTitleAsOption_OurClients,
    );
    await LIB_AboutUs.bc_VerifyH4SubHeaderAndDescriptionForOurClient(
      Data_AboutUs.SubTitle_OurClients,
      Data_AboutUs.OurClients_Description,
    );
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation About Us -> Our Leadership Team
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_AboutUs,
      Data_Sitemap.AboutUs_SubTitleAsOption_OurLeadershipTeam,
    );
    await LIB_AboutUs.bc_VerifyH4SubHeaderAndDescription(
      Data_AboutUs.SubTitle_OurLeadershipTeam,
      Data_AboutUs.OurLeadershipTeam_Description,
    );
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation Our Brands -> Swivel Tech
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_OurBrands,
      Data_Sitemap.OurBrands_SubTitleAsOption_Tech,
    );
    // get all GUID's
    let allGUIDs = await browser.getWindowHandles();

    childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // switch to child tab
    await browser.switchToWindow(childGUID);
    await LIB_Common.bc_TakeScreenShot("Swivel Tech Site From Sitemap");
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Verify the page navigation Our Brands -> Swivel Finance
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_OurBrands,
      Data_Sitemap.OurBrands_SubTitleAsOption_Finance,
    );
    await LIB_Common.bc_TakeScreenShot("Swivel Finance Page From Sitemap");
    await LIB_Common.bc_VerifyH1Header(Data_SwivelFinance.SwivelFinance_Header);
    await LIB_Common.bc_VerifyPageHeader(Data_SwivelFinance.Top_Description, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_SwivelFinance.WhoWeAre_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_SwivelFinance.WhoWeAre_Description2,
      1,
    );
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation Our Brands -> Swivel Talent
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_OurBrands,
      Data_Sitemap.OurBrands_SubTitleAsOption_Talent,
    );
    await LIB_Common.bc_TakeScreenShot("Swivel Talent Page From Sitemap");
    await LIB_Common.bc_VerifyPageHeader(
      Data_SwivelTalent.SwivelTalent_Header1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_SwivelTalent.SwivelTalent_Header2,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_SwivelTalent.Top_Description, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_SwivelTalent.WhoWeAre_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_SwivelTalent.WhoWeAre_Description2,
      1,
    );
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation Our Brands -> Swivel Foundation
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_OurBrands,
      Data_Sitemap.OurBrands_SubTitleAsOption_Foundation,
    );
    // Get all window handles and find the child GUID
    allGUIDs = await browser.getWindowHandles();
    childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // switch to child tab
    await browser.switchToWindow(childGUID);
    await LIB_Common.bc_TakeScreenShot("Swivel Foundation Page From Sitemap");
    await LIB_Common.bc_VerifyH1Header("“Create Opportunity");
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Verify the page navigation Careers -> Intro
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Careers,
      Data_Sitemap.Careers_SubTitleAsOption_Intro,
    );
    await LIB_Common.bc_VerifyH1Header(Data_Careers.Careers_Header);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation Careers -> Life At Swivel
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Careers,
      Data_Sitemap.Careers_SubTitleAsOption_LifeAtSwivel,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_Careers.SubTitle_LifeAtSwivel, 1);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation Careers -> Our Benefits
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Careers,
      Data_Sitemap.Careers_SubTitleAsOption_OurBenefits,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_Careers.SubTitle_OurBenefits, 1);
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation Careers -> Our Job Openings
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Careers,
      Data_Sitemap.Careers_SubTitleAsOption_OurJobOpenings,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Careers.SubTitle_OurJobOpenings,
      1,
    );
    await LIB_Home.bc_ClickOptionFromFooterPanel("Sitemap");

    // Verify the page navigation Others -> Newsroom
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Others,
      Data_Sitemap.Others_SubTitleAsOption_Newsroom,
    );
    allGUIDs = await browser.getWindowHandles();
    childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // switch to child tab
    await browser.switchToWindow(childGUID);
    await LIB_Common.bc_TakeScreenShot("Newsroom - Swivel Group From Sitemap");
    await LIB_Common.bc_VerifyPageHeader("Newsroom", 1);
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Verify the page navigation Others -> Contact Us
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Others,
      Data_Sitemap.Others_SubTitleAsOption_ContactUs,
    );
    allGUIDs = await browser.getWindowHandles();
    childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // switch to child tab
    await browser.switchToWindow(childGUID);
    await LIB_Common.bc_TakeScreenShot(
      "Contact Us - Swivel Group From Sitemap",
    );
    await LIB_Common.bc_VerifyH1Header(Data_ContactUs.ContactUs_Header);
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Verify the page navigation Others -> Privacy Policy
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_Others,
      Data_Sitemap.Others_SubTitleAsOption_PrivacyPolicy,
    );
    allGUIDs = await browser.getWindowHandles();
    childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // switch to child tab
    await browser.switchToWindow(childGUID);
    await LIB_Common.bc_TakeScreenShot(
      "Privacy Policy - Swivel Group From Sitemap",
    );
    await LIB_Common.bc_VerifyH1Header(Data_PrivacyPolicy.PrivacyPolicy_Header);
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Verify the page navigation Social Media -> Facebook
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_SocialMedia,
      Data_Sitemap.SocialMedia_SubTitleAsOption_Facebook,
    );
    allGUIDs = await browser.getWindowHandles();
    childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // switch to child tab
    await browser.switchToWindow(childGUID);
    await LIB_Home.bc_VerifyTheFacebookPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Verify the page navigation Social Media -> Twitter
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_SocialMedia,
      Data_Sitemap.SocialMedia_SubTitleAsOption_Twitter,
    );
    allGUIDs = await browser.getWindowHandles();
    childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // switch to child tab
    await browser.switchToWindow(childGUID);
    await LIB_Home.bc_VerifyTheTwitterPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Verify the page navigation Social Media -> Linkedin
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_SocialMedia,
      Data_Sitemap.SocialMedia_SubTitleAsOption_Linkedin,
    );
    allGUIDs = await browser.getWindowHandles();
    childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // switch to child tab
    await browser.switchToWindow(childGUID);
    await LIB_Home.bc_VerifyTheLinkedinPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Verify the page navigation Social Media -> Instagram
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_SocialMedia,
      Data_Sitemap.SocialMedia_SubTitleAsOption_Instagram,
    );
    allGUIDs = await browser.getWindowHandles();
    childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // switch to child tab
    await browser.switchToWindow(childGUID);
    await LIB_Home.bc_VerifyTheInstagramPopAndCloseIt();
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
  });
});
