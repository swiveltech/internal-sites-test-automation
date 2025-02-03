import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Newsroom from "../../components/SwivelGroup/LIB_Newsroom.js";
import LIB_ContactUs from "../../components/SwivelGroup/LIB_ContactUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/swivelGroup/dt_home.json" assert { type: "json" };
import Data_Careers from "../../data/swivelGroup/dt_careers.json" assert { type: "json" };
import Data_Cookies from "../../data/swivelGroup/dt_cookie.json" assert { type: "json" };
import Data_PrivacyPolicy from "../../data/swivelGroup/dt_privacyPolicy.json" assert { type: "json" };
import Data_ContactUs from "../../data/swivelGroup/dt_contactUs.json" assert { type: "json" };
import Data_Newsroom from "../../data/swivelGroup/dt_newsroom.json" assert { type: "json" };
import LIB_Careers from "../../components/SwivelGroup/LIB_Careers.js";

describe("Swivel Group Site -> Careers Page ", () => {
  // Covered Test Case Number : SG-28, SG-29, SG-30, SG-31
  it("Verify the Careers Page", async () => {
    allureReporter.addStory("Swivel Group Site Careers Page");
    allureReporter.startStep("Swivel Group -> Verify the Careers Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);

    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Careers.Careers_Header);
    await LIB_Careers.bc_VerifyTopDescription(
      Data_Careers.Careers_Header,
      Data_Careers.Top_Description,
    );
    await LIB_Common.bc_VerifyTheButton("Check Openings", 1);

    //Verify the sub title and description as Life at Swivel
    await LIB_Common.bc_VerifyPageHeader(Data_Careers.SubTitle_LifeAtSwivel, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Careers.LifeAtSwivel_Description,
      1,
    );

    // Verify the Our Benefits
    await LIB_Common.bc_VerifyPageHeader(Data_Careers.SubTitle_OurBenefits, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Careers.OurBenefits_Description,
      1,
    );

    // Tile 1 Pegging
    await LIB_Careers.bc_VerifyPeggingTile(
      Data_Careers.OurBenefits_SubTitle_PeggedSalaries,
      Data_Careers.PeggedSalaries_Description,
    );
  });
});
