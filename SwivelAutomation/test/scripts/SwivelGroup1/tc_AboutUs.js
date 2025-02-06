import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_AboutUs from "../../components/SwivelGroup/LIB_AboutUs.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_AboutUs from "../../data/SwivelGroup/dt_aboutUs.json" assert { type: "json" };
import Data_Careers from "../../data/SwivelGroup/dt_careers.json" assert { type: "json" };

describe("Swivel Group Site -> About Us", () => {
  // Covered Test Case Number : SG-19, SG-20, SG-21, SG-22, SG-23, SG24
  it("Verify the About Us", async () => {
    allureReporter.addStory("Swivel Group Site About Us");
    allureReporter.startStep("Swivel Group -> Verify the About Us Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    // Navigate to About Us tab
    await LIB_Home.bc_NavigateToTabFromTopNavigation("About Us");

    // Verify the Top Title
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.AboutUs_Header, 1);
    // Verify the Top Description
    await LIB_Common.bc_VerifyPageHeader(Data_AboutUs.Top_Description, 1);

    // Verify the sub title "Our Clients" and description
    await LIB_AboutUs.bc_VerifyH4SubHeaderAndDescriptionForOurClient(
      Data_AboutUs.SubTitle_OurClients,
      Data_AboutUs.OurClients_Description,
    );

    // Take screenshot in our client
    await LIB_Common.bc_TakeScreenShot("About Us Our Client Section");

    // Verify the sub title "Our Leadership Team" and description
    await LIB_AboutUs.bc_VerifyH4SubHeaderAndDescription(
      Data_AboutUs.SubTitle_OurLeadershipTeam,
      Data_AboutUs.OurLeadershipTeam_Description,
    );

    // Take screenshot in Our Leadership Team
    await LIB_Common.bc_TakeScreenShot("About Us Our Leadership Team");

    //Verify the Leadership
    await LIB_AboutUs.bc_VerifyLeadership(
      Data_AboutUs.LeaderShip_CEO_CO_Founder_Name,
      Data_AboutUs.LeaderShip_CEO_CO_Founder_Designation,
    );
    await LIB_AboutUs.bc_VerifyLeadership(
      Data_AboutUs.LeaderShip_CGO_CO_Founder_Name,
      Data_AboutUs.LeaderShip_CGO_CO_Founder_Designation,
    );
    await LIB_AboutUs.bc_VerifyLeadership(
      Data_AboutUs.LeaderShip_Vice_President_Name,
      Data_AboutUs.LeaderShip_Vice_President_Designation,
    );
    await LIB_AboutUs.bc_VerifyLeadership(
      Data_AboutUs.LeaderShip_HR_Name,
      Data_AboutUs.LeaderShip_HR_Designation,
    );
    await LIB_AboutUs.bc_VerifyLeadership(
      Data_AboutUs.LeaderShip_Director_Name,
      Data_AboutUs.LeaderShip_Director_Designation,
    );
    await LIB_AboutUs.bc_VerifyLeadership(
      Data_AboutUs.LeaderShip_Advisor_Name,
      Data_AboutUs.LeaderShip_Advisor_Designation,
    );

    // Verify the sub title "Want to work with us?" and description
    await LIB_AboutUs.bc_VerifyH4SubHeaderAndDescriptionInBottom(
      Data_AboutUs.SubTitle_WantToWorkWithUs,
      Data_AboutUs.WantToWorkWithUs_Description,
    );

    // Verify the button as "Explore Opportunities"
    await LIB_Common.bc_VerifyTheButton("Explore Opportunities", 1);

    // Click the button "Explore Opportunities"
    await LIB_Common.bc_ClickOnButton("Explore Opportunities", 1);
    // Verify the Top Title
    await LIB_Common.bc_VerifyH1Header(Data_Careers.Careers_Header, 1);
    // Verify the Top Description
    await LIB_Common.bc_VerifyPageHeader(Data_Careers.Top_Description, 1);
  });
});
