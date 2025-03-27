import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.js";
import Data_AboutUs from "../../data/SwivelTech/dt_aboutUs.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_AboutUs from "../../components/SwivelTech/LIB_AboutUs.js";

describe("Swivel Tech Site -> About Us Pages", () => {
  it("Verify the About Us Pages", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify About Us Pages",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    //    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_AboutUs);
    await LIB_Common.bc_VerifyH1Header(Data_AboutUs.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_AboutUs.Top_Description1);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(Data_AboutUs.Top_Description2);
    await LIB_Common.bc_VerifyTheAppURL("about-us");

    //Verify the How We Grew Over the Years
    await LIB_Common.bc_VerifyH2Header(
      Data_AboutUs.Header_HowWeGrewOverTheYears,
    );
    await LIB_AboutUs.bc_VerifyHowWeGrewOverTheYears(
      Data_AboutUs.Year_2018,
      Data_AboutUs.SubTile_2018,
    );
    await LIB_AboutUs.bc_VerifyHowWeGrewOverTheYears(
      Data_AboutUs.Year_2019,
      Data_AboutUs.SubTile_2019,
    );
    await LIB_AboutUs.bc_VerifyHowWeGrewOverTheYears(
      Data_AboutUs.Year_2020,
      Data_AboutUs.SubTile_2020,
    );
    await LIB_AboutUs.bc_VerifyHowWeGrewOverTheYears(
      Data_AboutUs.Year_2021,
      Data_AboutUs.SubTile_2021,
    );
    await LIB_AboutUs.bc_VerifyHowWeGrewOverTheYears(
      Data_AboutUs.Year_2022,
      Data_AboutUs.SubTile_2022,
    );
    await LIB_AboutUs.bc_VerifyHowWeGrewOverTheYears(
      Data_AboutUs.Year_2023,
      Data_AboutUs.SubTile_2023,
    );
    await LIB_AboutUs.bc_VerifyHowWeGrewOverTheYears(
      Data_AboutUs.Year_2024,
      Data_AboutUs.SubTile_2024,
    );

    //Verify the Our People is Our Business
    await LIB_Common.bc_VerifyH2Header(
      Data_AboutUs.Header_OurPeopleIsOurBusiness,
    );
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_AboutUs.OurPeopleIsOurBusiness_Description,
    );

    await LIB_AboutUs.bc_VerifyOurPeopleIsOurBusiness(
      "trust-icon.svg",
      Data_AboutUs.SubTitle_Trust,
      Data_AboutUs.Trust_Description,
    );

    await LIB_AboutUs.bc_VerifyOurPeopleIsOurBusiness(
      "innovation.svg",
      Data_AboutUs.SubTitle_Innovation,
      Data_AboutUs.Innovation_Description,
    );

    await LIB_AboutUs.bc_VerifyOurPeopleIsOurBusiness(
      "Premium.svg",
      Data_AboutUs.SubTitle_Premium,
      Data_AboutUs.Premium_Description,
    );

    await LIB_AboutUs.bc_VerifyOurPeopleIsOurBusiness(
      "Respect.svg",
      Data_AboutUs.SubTitle_Respect,
      Data_AboutUs.Respect_Description,
    );

    await LIB_AboutUs.bc_VerifyOurPeopleIsOurBusiness(
      "Team.svg",
      Data_AboutUs.SubTitle_Team,
      Data_AboutUs.Team_Description,
    );

    //Verify the Meet the Leaders
    await LIB_Common.bc_VerifyH2Header(Data_AboutUs.Header_MeetTheLeaders);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_AboutUs.MeetTheLeaders_Description,
    );

    //Verify the contains of Leader "Shanil Dissanayake"
    await LIB_AboutUs.bc_VerifyMeetTheLeadersTile(
      "Leader_Shanil-Dissanayake.png",
      Data_AboutUs.Leader_Name1,
      Data_AboutUs.Name1_Designation,
      Data_AboutUs.Name1_Description,
    );

    //Verify the contains of Leader "Dmitry Loukine"
    await LIB_AboutUs.bc_VerifyMeetTheLeadersTile(
      "Dmitry Loukine (2).png",
      Data_AboutUs.Leader_Name2,
      Data_AboutUs.Name2_Designation,
      Data_AboutUs.Name2_Description,
    );

    //Verify the contains of Leader "Romani Rupasinghe"
    await LIB_AboutUs.bc_VerifyMeetTheLeadersTile(
      "Romani_Rupasinghe.png",
      Data_AboutUs.Leader_Name3,
      Data_AboutUs.Name3_Designation,
      Data_AboutUs.Name3_Description,
    );

    //Verify the contains of Leader "Usha Rajapakse"
    await LIB_AboutUs.bc_VerifyMeetTheLeadersTile(
      "Usha_Rajapakse.png",
      Data_AboutUs.Leader_Name4,
      Data_AboutUs.Name4_Designation,
      Data_AboutUs.Name4_Description,
    );

    //Verify the contains of Leader "Leader Sujatha Nadesan"
    await LIB_AboutUs.bc_VerifyMeetTheLeadersTile(
      "Leader_Sujatha_Nadesan.png",
      Data_AboutUs.Leader_Name5,
      Data_AboutUs.Name5_Designation,
      Data_AboutUs.Name5_Description,
    );

    //Verify the contains of Leader "Andrew Rooke"
    await LIB_AboutUs.bc_VerifyMeetTheLeadersTile(
      "Leader_Andrew-Rooke.png",
      Data_AboutUs.Leader_Name6,
      Data_AboutUs.Name6_Designation,
      Data_AboutUs.Name6_Description,
    );

    //Verify the Our Team Culture
    await LIB_Common.bc_VerifyH2Header(Data_AboutUs.Header_OurTeamCulture);
    await LIB_AboutUs.bc_VerifyOurTeamCultureTile(
      Data_AboutUs.SubHeader_Tile1,
      Data_AboutUs.Tile1_Description,
    );
    await LIB_AboutUs.bc_VerifyOurTeamCultureTile(
      Data_AboutUs.SubHeader_Tile2,
      Data_AboutUs.Tile2_Description,
    );
    await LIB_AboutUs.bc_VerifyOurTeamCultureTile(
      Data_AboutUs.SubHeader_Tile3,
      Data_AboutUs.Tile3_Description,
    );

    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_HowCanWeHelpYou);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Home.SubTitle_WeHaveHelped200ClientsWithOurTechOffshoringServices,
    );
    await LIB_Common.bc_VerifyTheButton("Book a Discovery Call", 1);

    //Click on Book A Discovery Call
    await LIB_Common.bc_ClickOnButton(
      Data_Resources.Header_BookADiscoveryCall,
      1,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ContactUs_Description,
    );
  });
});
