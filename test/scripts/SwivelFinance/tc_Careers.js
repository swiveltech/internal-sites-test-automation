import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.js";
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";
import LIB_Careers from "../../components/SwivelFinance/LIB_Careers.js";
import Data_ContactUs from "../../data/SwivelFinance/dt_contactUs.js";
import Data_Careers from "../../data/SwivelFinance/dt_careers.js";
import PG_Careers from "../../pages/SwivelFinance/PG_Careers.js";

describe("Swivel Finance Site -> Careers Page", () => {
  it("Verify the Careers Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Careers Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Tab "Careers"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_Careers);
    await LIB_Common.bc_VerifyH1Header(Data_Careers.Header_Careers);
    await LIB_Common.bc_VerifyTheParagraph(Data_Careers.Careers_Description);
    await LIB_Common.bc_VerifyTheAppURL("careers");

    await LIB_Common.bc_VerifyTheButton("Check Openings", 1);

    //Verify the "Life At Swivel"
    await LIB_Common.bc_VerifyAnyText(Data_Careers.Header_LifeAtSwivel, 1);
    await LIB_Common.bc_VerifyAnyText(Data_Careers.Description_LifeAtSwivel, 1);

    //Verify the "Life At Swivel"
    await LIB_Common.bc_VerifyAnyText(Data_Careers.Header_OurBenefits, 1);
    await LIB_Common.bc_VerifyAnyText(Data_Careers.Description_OurBenefits, 1);

    await LIB_Careers.bc_VerifyOurBenefits(
      Data_Careers.SubTitle_OurBenefits1,
      Data_Careers.OurBenefits1_Description,
    );
    await LIB_Careers.bc_VerifyOurBenefits(
      Data_Careers.SubTitle_OurBenefits2,
      Data_Careers.OurBenefits2_Description,
    );
    await LIB_Careers.bc_VerifyOurBenefits(
      Data_Careers.SubTitle_OurBenefits3,
      Data_Careers.OurBenefits3_Description,
    );
    await LIB_Careers.bc_VerifyOurBenefits(
      Data_Careers.SubTitle_OurBenefits4,
      Data_Careers.OurBenefits4_Description,
    );
    await LIB_Careers.bc_VerifyOurBenefits(
      Data_Careers.SubTitle_OurBenefits5,
      Data_Careers.OurBenefits5_Description,
    );
    await LIB_Careers.bc_VerifyOurBenefits(
      Data_Careers.SubTitle_OurBenefits6,
      Data_Careers.OurBenefits6_Description,
    );

    //Verify the "Our Job Openings"
    await LIB_Common.bc_VerifyH2Header(Data_Careers.Header_OurJobOpenings);

    //Get the first record before search
    let searchKey = await PG_Careers.lbl_GetFirstRecord.getText();
    if (searchKey.includes("(")) {
      searchKey = searchKey.split("(")[0];
    }
    let url = await PG_Careers.lbl_GetFirstRecord.getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "First record in job title as : " + searchKey + " and URL as : " + url,
    );

    await LIB_Careers.bc_SearchForJob("Invalid Data");
    await LIB_Common.bc_TakeScreenShot("Invalid Data In Swivel Finance");
    await LIB_Careers.bc_SearchForJob(searchKey);
    await LIB_Common.bc_TakeScreenShot("Keyword Search Swivel Finance");
    await LIB_Careers.bc_VerifyTheSearchRecordAvailable();
    await LIB_Careers.bc_ClickOnTheFirstRecord();

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
