import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Home from "../../components/SwivelGroup/LIB_Home.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/swivelGroup/dt_home.json" assert { type: "json" };
import Data_Cookies from "../../data/swivelGroup/dt_cookie.json" assert { type: "json" };

describe("Swivel Group Site -> Cookie Page ", () => {
  // Covered Test Case Number : SG-38 , SG-39 , SG-40 , SG-42
  it("Verify the Cookie Policy", async () => {
    allureReporter.addStory("Swivel Site Cookie Policy");
    allureReporter.startStep("Swivel Group -> Cookie Policy");
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_GROUP);
    await LIB_Home.bc_VerifyWeValueYourPrivacy(
      Data_Home.Privacy_Header,
      Data_Home.Privacy_Description,
    );

    await LIB_Common.bc_ClickOnLinks("Cookie Policy");
    await browser.switchWindow(config.URLS.SWIVEL_GROUP + "cookie-policy");
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Cookie_Header, 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Top_Description, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.WhatAreCookies_Description,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Title_WhatAreCookies, 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Title_HowWeUseCookies, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.HowWeUseCookies_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.HowWeUseCookies_Description2,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.HowWeUseCookies_Description3,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.Title_DisablingCookies,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.DisablingCookies_Description,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Title_TheCookiesWeSet, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description1,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description2,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description3,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description4,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description5,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description6,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.TheCookiesWeSet_Description7,
      1,
    );
    await LIB_Common.bc_VerifyPageHeader(Data_Cookies.Title_MoreInformation, 1);
    await LIB_Common.bc_VerifyPageHeader(
      Data_Cookies.MoreInformation_Description,
      1,
    );
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
    // Click on Decline All Button
    await LIB_Common.bc_ClickOnButton("Decline All", 1);
    await LIB_Home.bc_VerifyWeValueYourPrivacyNotPresent(
      Data_Home.Privacy_Header,
      Data_Home.Privacy_Description,
    );

    await LIB_Home.bc_ClearCacheAndCookiesAndReload();
    await LIB_Home.bc_VerifyWeValueYourPrivacy(
      Data_Home.Privacy_Header,
      Data_Home.Privacy_Description,
    );

    // Click on Accept All Button
    await LIB_Common.bc_ClickOnButton("Accept All", 1);
    await LIB_Home.bc_VerifyWeValueYourPrivacyNotPresent(
      Data_Home.Privacy_Header,
      Data_Home.Privacy_Description,
    );
  });
});
