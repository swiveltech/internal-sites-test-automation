import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_Careers from "../../data/SwivelTech/dt_careers.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_Careers from "../../components/SwivelTech/LIB_Careers.js";

describe("Swivel Tech Site -> Careers Page", () => {
  it("Verify the Careers Page", async () => {
    allureReporter.addFeature("Verify the Swivel Tech Careers Page");
    allureReporter.addStory("Verify Careers Page");
    allureReporter.startStep("Swivel Tech -> Verify Careers Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickOnTopTab(Data_Home.TabName_Careers);
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Careers.Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(Data_Careers.Top_Description);
    await LIB_Common.bc_VerifyTheButton("Check Openings", 1);

    //Verify the Life at Swivel
    await LIB_Common.bc_VerifyH2Header(Data_Careers.Header_LifeAtSwivel);
    await LIB_Common.bc_TakeScreenShot("Life at Swivel In Swivel Tech");
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Careers.LifeAtSwivel_Description,
    );

    //Verify the Our Benefits
    await LIB_Common.bc_VerifyH2Header(Data_Careers.Header_OurBenefits);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Careers.OurBenefits_Description,
    );
    await LIB_Careers.bc_VerifyOurBenefitsTile(
      Data_Careers.SubHeader_OurBenefits1,
      Data_Careers.Description_OurBenefits1,
    );
    await LIB_Careers.bc_VerifyOurBenefitsTile(
      Data_Careers.SubHeader_OurBenefits2,
      Data_Careers.Description_OurBenefits2,
    );
    await LIB_Careers.bc_VerifyOurBenefitsTile(
      Data_Careers.SubHeader_OurBenefits3,
      Data_Careers.Description_OurBenefits3,
    );
    await LIB_Careers.bc_VerifyOurBenefitsTile(
      Data_Careers.SubHeader_OurBenefits4,
      Data_Careers.Description_OurBenefits4,
    );
    await LIB_Careers.bc_VerifyOurBenefitsTile(
      Data_Careers.SubHeader_OurBenefits5,
      Data_Careers.Description_OurBenefits5,
    );
    await LIB_Careers.bc_VerifyOurBenefitsTile(
      Data_Careers.SubHeader_OurBenefits6,
      Data_Careers.Description_OurBenefits6,
    );

    //Verify the Our Job Openings
    await LIB_Common.bc_VerifyH2Header(Data_Careers.Header_OurJobOpenings);

    await LIB_Careers.bc_SearchForJob("Invalid Data");
    await LIB_Careers.bc_VerifyTheSearchRecordIsNotAvailable();
    await LIB_Careers.bc_SearchForJob("Senior");
    await LIB_Careers.bc_VerifyTheSearchRecordAvailable();
  });
});
