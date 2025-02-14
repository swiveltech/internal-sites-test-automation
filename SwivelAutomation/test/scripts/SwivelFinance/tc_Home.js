import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";

describe("Swivel Finance Site -> Home Page ", () => {
  // Covered Test Case Number : SF-1, SF-2, SF-3
  it("Verify the Home Page", async () => {
    allureReporter.addFeature("Verify the Swivel Finance Home Page");
    allureReporter.addStory("Home Page");
    allureReporter.startStep("Swivel Finance -> Home Page Verification");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);

    // Verify the top panel
    await LIB_Home.bc_VerifyHomePageLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.HomePage_Top_Description, 1);
    await LIB_Common.bc_VerifyTheButton("Connect With Us", 1);

    // Verify the Experts In
    await LIB_Common.bc_VerifyH4Header(Data_Home.Title_ExpertsIn);
    await LIB_Common.bc_TakeScreenShot("Experts In Swivel Finance");

    //Verify the Our Story
    await LIB_Common.bc_VerifyH2Header(Data_Home.Title_OurStory);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.OurStory_Description, 1);

    // Verify the Services We Deliver
    await LIB_Common.bc_VerifyH4Header(Data_Home.Title_ServicesWeDeliver);
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_GeneralLedgerAccounting,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_BusinessActivityStatements,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_IncomeTaxReturns,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_CompanyTaxReturns,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_ManagementReporting,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_Payroll,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_SelfManagedSuperFunds,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_Bookkeeping,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_Division7a,
    );
    await LIB_Home.bc_VerifyServicesWeDeliver(
      Data_Home.Title_ServicesWeDeliver,
      Data_Home.SubTile_TaxPlanning,
    );
  });
});
