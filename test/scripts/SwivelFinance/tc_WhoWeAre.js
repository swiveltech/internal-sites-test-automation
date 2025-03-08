import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.json" assert { type: "json" };
import Data_AboutUs from "../../data/SwivelFinance/dt_aboutUs.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";
import LIB_AboutUs from "../../components/SwivelFinance/LIB_AboutUs.js";

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
  });
});
