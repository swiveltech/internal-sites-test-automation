import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_AboutUs from "../../data/SwivelTech/dt_aboutUs.json" assert { type: "json" };
import Data_Resources from "../../data/SwivelTech/dt_resources.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_AboutUs from "../../components/SwivelTech/LIB_AboutUs.js";

describe("Swivel Tech Site -> About Us Pages", () => {
  it("Verify the About Us Pages", async () => {
    allureReporter.addFeature("Verify the Swivel Tech -> About Us Pages");
    allureReporter.addStory("Verify About Us Pages");
    allureReporter.startStep("Swivel Tech -> Verify About Us Pages");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
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
