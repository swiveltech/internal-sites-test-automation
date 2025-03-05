import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_OurServices from "../../data/SwivelTech/dt_ourServices.json" assert { type: "json" };
import Data_Resources from "../../data/SwivelTech/dt_resources.json" assert { type: "json" };

describe("Swivel Tech Site -> Our Services Pages", () => {
  it("Verify the Our Services Pages", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify Our Services Pages",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_ClickOnButton("LEARN MORE", 7);
    await LIB_Common.bc_VerifyTheAppURL("our-services");

    let appURL = await browser.getUrl();
    await LIB_Common.bc_LogAllureReportAndLogs("Application URL : " + appURL);

    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    await LIB_Common.bc_VerifyTheButton("schedule a call", 1);
    await LIB_Common.bc_ClickOnButton("schedule a call", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");

    await LIB_Home.bc_ClickOnAppLogo();
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    await LIB_Common.bc_ClickOnButton("LEARN MORE", 7);
    await LIB_Common.bc_VerifyTheAppURL("our-services");
    //Verify the Page Header and Description
    await LIB_Common.bc_VerifyH1HeaderText(Data_OurServices.Top_Header);
    await LIB_Common.bc_VerifyTheParagraph(Data_OurServices.Top_Description);

    //Verify the "Trusted Partner in Corporate Software Development"
    await LIB_Common.bc_VerifyAnyText(
      Data_OurServices.Header_TrustedPartnerInCorporateSoftwareDevelopment,
      1,
    );
    // Verify the Services with Count
    await LIB_Home.bc_VerifyServicesWithCount(
      Data_Home.Services_YearsInBusiness,
      Data_Home.YearsInBusiness_Count,
    );
    await LIB_Home.bc_VerifyServicesWithCount(
      Data_Home.Services_Resources,
      Data_Home.Resources_Count,
    );
    await LIB_Home.bc_VerifyServicesWithCount(
      Data_Home.Services_ClientsTrustedUs,
      Data_Home.ClientsTrustedUs_Count,
    );
    await LIB_Home.bc_VerifyServicesWithCount(
      Data_Home.Services_ClientsTrustedUs,
      Data_Home.ClientsTrustedUs_Count,
    );

    //Verify the "Our Software Development Services"
    await LIB_Common.bc_VerifyH2Header(
      Data_OurServices.Header_OurSoftwareDevelopmentServices,
    );
  });
});
