import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Sitemap from "../../components/SwivelGroup/LIB_Sitemap.js";
import LIB_Newsroom from "../../components/SwivelGroup/LIB_Newsroom.js";
import LIB_ContactUs from "../../components/SwivelGroup/LIB_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Sitemap from "../../data/swivelGroup/dt_sitemap.json" assert { type: "json" };
import Data_Careers from "../../data/swivelGroup/dt_careers.json" assert { type: "json" };
import Data_Cookies from "../../data/swivelGroup/dt_cookie.json" assert { type: "json" };
import Data_PrivacyPolicy from "../../data/swivelGroup/dt_privacyPolicy.json" assert { type: "json" };
import Data_ContactUs from "../../data/swivelGroup/dt_contactUs.json" assert { type: "json" };
import Data_Newsroom from "../../data/swivelGroup/dt_newsroom.json" assert { type: "json" };
import LIB_Careers from "../../components/SwivelGroup/LIB_Careers.js";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";

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
  });
});
