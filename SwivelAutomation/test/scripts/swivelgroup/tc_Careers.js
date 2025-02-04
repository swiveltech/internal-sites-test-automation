import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Careers from "../../data/swivelGroup/dt_careers.json" assert { type: "json" };
import LIB_Careers from "../../components/SwivelGroup/LIB_Careers.js";

describe("Swivel Group Site -> Careers Page ", () => {
  // Covered Test Case Number : SG-28, SG-30, SG-31
  it("Verify the Careers Page", async () => {
    allureReporter.addStory("Swivel Group Site Careers Page");
    allureReporter.startStep("Swivel Group -> Verify the Careers Page");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    await browser.pause(2000);
    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
    // Navigate to home tab
    await LIB_Home.bc_NavigateToTabFromTopNavigation("Careers");
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

    // Tile 2 Flexible Work Hours
    await LIB_Careers.bc_VerifyFlexibleWorkHoursTile(
      Data_Careers.OurBenefits_SubTitle_FlexibleWorkHours,
      Data_Careers.FlexibleWorkHours_Description,
    );

    // Tile 3 Health Insurance
    await LIB_Careers.bc_VerifyHealthInsuranceTile(
      Data_Careers.OurBenefits_SubTitle_HealthInsurance,
      Data_Careers.HealthInsurance_Description,
    );

    // Tile 4 Leave Benefits
    await LIB_Careers.bc_VerifyLeaveBenefitsTile(
      Data_Careers.OurBenefits_SubTitle_LeaveBenefits,
      Data_Careers.LeaveBenefits_Description,
    );

    // Tile 5 Learning And Development
    await LIB_Careers.bc_VerifyLearningAndDevelopmentTile(
      Data_Careers.OurBenefits_SubTitle_LearningAndDevelopment,
      Data_Careers.LearningAndDevelopment_Description,
    );

    // Tile 6 Empowering Individuals
    await LIB_Careers.bc_VerifyEmpoweringIndividualsTile(
      Data_Careers.OurBenefits_SubTitle_EmpoweringIndividuals,
      Data_Careers.EmpoweringIndividuals_Description,
    );

    await LIB_Common.bc_VerifyPageHeader(
      Data_Careers.SubTitle_OurJobOpenings,
      1,
    );

    await LIB_Careers.bc_VerifyShowMoreLink();

    await LIB_Careers.bc_SearchForJob("Invalid Data");
    await LIB_Careers.bc_VerifyTheSearchRecordIsNotAvailable();
    await LIB_Careers.bc_SearchForJob("Senior");
    await LIB_Careers.bc_VerifyTheSearchRecordAvailable();
  });
});
