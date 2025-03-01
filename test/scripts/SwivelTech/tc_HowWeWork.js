import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.json" assert { type: "json" };
import Data_HowWeWork from "../../data/SwivelTech/dt_howWeWork.json" assert { type: "json" };
import LIB_HowWeWork from "../../components/SwivelTech/LIB_HowWeWork.js";
import LIB_Resources from "../../components/SwivelTech/LIB_Resources.js";

describe("Swivel Tech Site -> How We Work -> Project Based Page", () => {
  it("Verify the How We Work -> Project Based Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify How We Work -> Project Based Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_HowWeWork,
      Data_Home.HowWeWork_ProjectBased,
    );
    await LIB_Common.bc_VerifyH1Header(Data_HowWeWork.ProjectBased_Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.ProjectBased_Top_Description1,
    );
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.ProjectBased_Top_Description2,
    );
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.ProjectBased_Top_Description3,
    );
    await LIB_Common.bc_VerifyTheAppURL("project-based-software-development");

    // Verify the step tile
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number1,
      Data_HowWeWork.Number1_Title,
      Data_HowWeWork.Number1_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number2,
      Data_HowWeWork.Number2_Title,
      Data_HowWeWork.Number2_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number3,
      Data_HowWeWork.Number3_Title,
      Data_HowWeWork.Number3_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number4,
      Data_HowWeWork.Number4_Title,
      Data_HowWeWork.Number4_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number5,
      Data_HowWeWork.Number5_Title,
      Data_HowWeWork.Number5_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number6,
      Data_HowWeWork.Number6_Title,
      Data_HowWeWork.Number6_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number7,
      Data_HowWeWork.Number7_Title,
      Data_HowWeWork.Number7_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_HowWeWork.Step_Number8,
      Data_HowWeWork.Number8_Title,
      Data_HowWeWork.Number8_Description,
    );

    //Verify the "FAQs"
    await LIB_Common.bc_VerifyH2Header(Data_HowWeWork.Header_FAQs);
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question1,
      Data_HowWeWork.Answer1,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question2,
      Data_HowWeWork.Answer2,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question3,
      Data_HowWeWork.Answer3,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question4,
      Data_HowWeWork.Answer4,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question5,
      Data_HowWeWork.Answer5,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question6,
      Data_HowWeWork.Answer6,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question7,
      Data_HowWeWork.Answer7,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question8,
      Data_HowWeWork.Answer8,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_HowWeWork.Question9,
      Data_HowWeWork.Answer9,
    );

    //Verify the "200+ Successful Client Projects and Counting"
    await LIB_Common.bc_VerifyH2Header(
      Data_HowWeWork.Header_200SuccessfulClientProjectsAndCounting,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_HowWeWork.SuccessfulClientProjectsAndCounting_Description,
      1,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_CustomisableFeaturesAndMagentomigration,
      Data_Resources.CustomisableFeaturesAndMagentomigration_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile2,
      Data_Resources.Tile2_Description,
    );
    await LIB_Resources.bc_VerifyCategoriesTile(
      Data_Resources.CaseStudies_Header_Tile3,
      Data_Resources.Tile3_Description,
    );
    await LIB_Common.bc_VerifyTheButton("Read  more", 1);
    await LIB_Common.bc_ClickOnButton("Read  more", 1);
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.CaseStudies_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("case-studies");
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_HowWeWork,
      Data_Home.HowWeWork_ProjectBased,
    );
    await LIB_Common.bc_VerifyH1Header(Data_HowWeWork.ProjectBased_Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.ProjectBased_Top_Description1,
    );
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.ProjectBased_Top_Description2,
    );
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_HowWeWork.ProjectBased_Top_Description3,
    );
    await LIB_Common.bc_VerifyTheAppURL("project-based-software-development");

    //Click on Book A Discovery Call
    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_HowCanWeHelpYou);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Home.SubTitle_WeHaveHelped200ClientsWithOurTechOffshoringServices,
    );
    await LIB_Common.bc_VerifyTheButton(
      Data_Resources.Header_BookADiscoveryCall,
      1,
    );

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
