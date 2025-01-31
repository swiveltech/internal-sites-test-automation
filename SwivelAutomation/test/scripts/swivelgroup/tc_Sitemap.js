import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Sitemap from "../../components/SwivelGroup/LIB_Sitemap.js";
import LIB_Newsroom from "../../components/SwivelGroup/LIB_Newsroom.js";
import LIB_ContactUs from "../../components/SwivelGroup/LIB_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Sitemap from "../../data/swivelGroup/dt_sitemap.json" assert { type: "json" };
import Data_AboutUs from "../../data/swivelGroup/dt_aboutUs.json" assert { type: "json" };
import Data_SwivelFinance from "../../data/swivelGroup/dt_swivelFinance.json" assert { type: "json" };
import Data_SwivelTalent from "../../data/swivelGroup/dt_swivelTalent.json" assert { type: "json" };
import Data_Careers from "../../data/swivelGroup/dt_careers.json" assert { type: "json" };
import Data_Cookies from "../../data/swivelGroup/dt_cookie.json" assert { type: "json" };
import Data_PrivacyPolicy from "../../data/swivelGroup/dt_privacyPolicy.json" assert { type: "json" };
import Data_ContactUs from "../../data/swivelGroup/dt_contactUs.json" assert { type: "json" };
import Data_Newsroom from "../../data/swivelGroup/dt_newsroom.json" assert { type: "json" };
import LIB_Careers from "../../components/SwivelGroup/LIB_Careers.js";
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
    await browser.pause(2000);
    await browser.switchWindow(
      "Software and Technology Consultancy Services - Swivel Tech",
    );
    await LIB_Common.bc_TakeScreenShot("Swivel Tech Site From Sitemap");
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();

    // Verify the page navigation Our Brands -> Swivel Finance
    await LIB_Sitemap.bc_ClickOnSubOption(
      Data_Sitemap.Title_OurBrands,
      Data_Sitemap.OurBrands_SubTitleAsOption_Finance,
    );
    await browser.pause(2000);
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
    await browser.pause(2000);
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
    await browser.pause(2000);
    await LIB_Common.bc_TakeScreenShot("Swivel Talent Page From Sitemap");
    await browser.switchWindow("Home - Swivel Foundation");
    await LIB_Common.bc_TakeScreenShot("Swivel Foundation Site");
    await LIB_Common.bc_VerifyH1Header("“Create Opportunity");
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
  });
});
