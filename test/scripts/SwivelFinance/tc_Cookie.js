import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.js";
import Data_CookiePolicy from "../../data/SwivelFinance/dt_cookiePolicy.js";
import LIB_Policy from "../../components/SwivelFinance/LIB_Policy.js";

describe("Swivel Finance Site -> Cookie Page", () => {
  it("Verify the Cookie Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Cookie Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Cookie Policy
    await LIB_Common.bc_ClickOnLinks("Cookie Policy");
    await LIB_Common.bc_VerifyH1Header(Data_CookiePolicy.Header_CookiePolicy);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_CookiePolicy.CookiePolicy_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("cookie-policy");

    //Verify the "What Are Cookies"
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.Header_WhatAreCookies,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.WhatAreCookies_Description,
      1,
    );

    //Verify the "How We Use Cookies"
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.Header_HowWeUseCookies,
      1,
    );
    await LIB_Policy.bc_VerifyPolicyMessageForThreeText(
      Data_CookiePolicy.HowWeUseCookies_Description1,
      Data_CookiePolicy.HowWeUseCookies_Description2,
      Data_CookiePolicy.HowWeUseCookies_Description3,
    );

    //Verify the "Disabling Cookies"
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.Header_DisablingCookies,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.DisablingCookies_Description,
      1,
    );

    //Verify the "The Cookies We Set"
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.Header_TheCookiesWeSet,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.TheCookiesWeSet_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.TheCookiesWeSet_Description2,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.TheCookiesWeSet_Description3,
      1,
    );
    await LIB_Policy.bc_VerifyPolicyMessageForThreeText(
      Data_CookiePolicy.TheCookiesWeSet_Description4,
      Data_CookiePolicy.TheCookiesWeSet_Description5,
      Data_CookiePolicy.TheCookiesWeSet_Description6,
    );

    await LIB_Policy.bc_VerifyPolicyMessageForTwoText(
      Data_CookiePolicy.TheCookiesWeSet_Description7,
      Data_CookiePolicy.TheCookiesWeSet_Description8,
    );

    //Verify the "More Information"
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.Header_MoreInformation,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_CookiePolicy.MoreInformation_Description,
      1,
    );
    await LIB_Common.bc_VerifyLinks(Data_CookiePolicy.Email, 1);
  });
});
