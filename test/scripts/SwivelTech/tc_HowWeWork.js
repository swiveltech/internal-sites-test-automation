import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.json" assert { type: "json" };
import Data_HowWeWork from "../../data/SwivelTech/dt_howWeWork.json" assert { type: "json" };

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
