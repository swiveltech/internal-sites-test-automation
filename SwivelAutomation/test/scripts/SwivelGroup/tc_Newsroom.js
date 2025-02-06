import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Newsroom from "../../components/SwivelGroup/LIB_Newsroom.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Careers from "../../data/SwivelGroup/dt_careers.json" assert { type: "json" };
import Data_Newsroom from "../../data/SwivelGroup/dt_newsroom.json" assert { type: "json" };
import LIB_Careers from "../../components/SwivelGroup/LIB_Careers.js";

describe("Swivel Group Site -> Newsroom", () => {
  // Covered Test Case Number : SG-25, SG-26, SG-27
  it("Verify the Newsroom page and Careers section", async () => {
    allureReporter.addStory(
      "Swivel Group Site Verify the Newsroom page and Careers section",
    );
    allureReporter.startStep(
      "Swivel Group -> Home Page ->  Newsroom -> Verify all articles and navigate to careers page  ",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    await LIB_Home.bc_ClickOnForMoreNewsInHomePage();
    await LIB_Common.bc_VerifyH1Header(Data_Newsroom.Newsroom_Header);
    await LIB_Newsroom.bc_VerifyTopDescription(Data_Newsroom.Top_Description);
    await LIB_Newsroom.bc_VerifySocialClubEvents();

    // Verify the Article Bowling Tournament
    await LIB_Newsroom.bc_VerifyArticles(
      Data_Newsroom.SubTitle_BowlingTournament,
      Data_Newsroom.BowlingTournament_Description,
    );

    // Verify the Article Sinhala And Tamil New Year 2023
    await LIB_Newsroom.bc_VerifyArticles(
      Data_Newsroom.SubTitle_SinhalaAndTamilNewYear2023,
      Data_Newsroom.SinhalaAndTamilNewYear2023_Description,
    );

    // Verify the Article 4th Anniversary
    await LIB_Newsroom.bc_VerifyArticles(
      Data_Newsroom.SubTitle_4thAnniversary,
      Data_Newsroom.FourthAnniversary_Description,
    );

    // Verify the Article Run For Their Lives 2023
    await LIB_Newsroom.bc_VerifyArticles(
      Data_Newsroom.SubTitle_RunForTheirLives2023,
      Data_Newsroom.RunForTheirLives2023_Description,
    );

    // Verify the Article Beach CleanUp
    await LIB_Newsroom.bc_VerifyArticles(
      Data_Newsroom.SubTitle_BeachCleanUp,
      Data_Newsroom.BeachCleanUp_Description,
    );

    // Verify the Article New Year Celebrations
    await LIB_Newsroom.bc_VerifyArticles(
      Data_Newsroom.SubTitle_NewYearCelebrations,
      Data_Newsroom.NewYearCelebrations_Description,
    );

    // Verify the Article Christmas Party 2022
    await LIB_Newsroom.bc_VerifyArticles(
      Data_Newsroom.SubTitle_ChristmasParty2022,
      Data_Newsroom.ChristmasParty2022_Description,
    );

    // Verify the Article Badminton Tournament 2022
    await LIB_Newsroom.bc_VerifyArticles(
      Data_Newsroom.SubTitle_BadmintonTournament2022,
      Data_Newsroom.BadmintonTournament2022_Description,
    );

    // Verify the Article Swivel Retreat In Bentota 2022
    await LIB_Newsroom.bc_VerifyArticles(
      Data_Newsroom.SubTitle_SwivelRetreatInBentota2022,
      Data_Newsroom.SwivelRetreatInBentota2022_Description,
    );

    await LIB_Newsroom.bc_VerifyWantToWorkWithUs(
      Data_Newsroom.Title_WantToWorkWithUs,
      Data_Newsroom.WantToWorkWithUs_Description,
    );

    await LIB_Common.bc_VerifyTheButton("Explore Opportunities", 1);
    await LIB_Common.bc_ClickOnButton("Explore Opportunities", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Careers.Careers_Header);
    await LIB_Careers.bc_VerifyTopDescription(
      Data_Careers.Careers_Header,
      Data_Careers.Top_Description,
    );
  });
});
