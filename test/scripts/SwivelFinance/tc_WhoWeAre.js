import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.js" assert { type: "json" };
import Data_AboutUs from "../../data/SwivelFinance/dt_aboutUs.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";
import LIB_AboutUs from "../../components/SwivelFinance/LIB_AboutUs.js";
import Data_ContactUs from "../../data/SwivelFinance/dt_contactUs.json" assert { type: "json" };

describe("Swivel Finance Site -> Who We Are Page", () => {
  it("Verify the About Us Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> About Us Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Tab "Who we are"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_WhoWeAre);
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.Header_AboutUs);
    await LIB_Common.bc_VerifyAnyText(Data_AboutUs.AboutUs_Description, 1);
    await LIB_Common.bc_VerifyTheAppURL("who-we-are");

    await LIB_AboutUs.bc_VerifyLabelWithCount(
      Data_AboutUs.Label_Year,
      Data_AboutUs.Year_Count,
    );
    await LIB_AboutUs.bc_VerifyLabelWithCount(
      Data_AboutUs.Label_ClientsTrustedUs,
      Data_AboutUs.ClientsTrustedUs_Count,
    );
    await LIB_AboutUs.bc_VerifyLabelWithCount(
      Data_AboutUs.Label_Resources,
      Data_AboutUs.Resources_Count,
    );

    //Verify the "OUR LEADERSHIP TEAM"
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.Header_OurLeadershipTeam);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_AboutUs.OurLeadershipTeam_Description,
    );
    await LIB_AboutUs.bc_VerifyOurLeadershipTeam(
      "shanil.png",
      Data_AboutUs.Leader1_Name,
      Data_AboutUs.Leader1_Job,
      Data_AboutUs.Leader1_Description,
    );
    await LIB_AboutUs.bc_VerifyOurLeadershipTeam(
      "dimitry-new-web.png",
      Data_AboutUs.Leader2_Name,
      Data_AboutUs.Leader2_Job,
      Data_AboutUs.Leader2_Description,
    );
    await LIB_AboutUs.bc_VerifyOurLeadershipTeam(
      "Frame 90.png",
      Data_AboutUs.Leader3_Name,
      Data_AboutUs.Leader3_Job,
      Data_AboutUs.Leader3_Description,
    );
    await LIB_AboutUs.bc_VerifyOurLeadershipTeam(
      "anthony.png",
      Data_AboutUs.Leader4_Name,
      Data_AboutUs.Leader4_Job,
      Data_AboutUs.Leader4_Description,
    );
    await LIB_AboutUs.bc_VerifyOurLeadershipTeam(
      "andrew-web.png",
      Data_AboutUs.Leader5_Name,
      Data_AboutUs.Leader5_Job,
      Data_AboutUs.Leader5_Description,
    );

    //Verify the "OUR TEAM CULTURE"
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.Header_OurTeamCulture);
    await LIB_AboutUs.bc_VerifyOurTeamCulture(
      "Glam 3.png",
      Data_AboutUs.Title_OurTeamCulture1,
      Data_AboutUs.Description_OurTeamCulture1,
    );
    await LIB_AboutUs.bc_VerifyOurTeamCulture(
      "5th anniversary (1).png",
      Data_AboutUs.Title_OurTeamCulture2,
      Data_AboutUs.Description_OurTeamCulture2,
    );
    await LIB_AboutUs.bc_VerifyOurTeamCulture(
      "Christmas pic.png",
      Data_AboutUs.Title_OurTeamCulture3,
      Data_AboutUs.Description_OurTeamCulture3,
    );
    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_WeWouldLoveToHelpYou);
    await LIB_Common.bc_VerifyTheButton("Connect With Us", 1);

    //Click on Connect With Us
    await LIB_Common.bc_ClickOnButton("Connect With Us", 1);
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    await LIB_Common.bc_VerifyH1Header(Data_ContactUs.Header_ContactUs);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.ContactUs_Description,
    );
  });
});
