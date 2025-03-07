import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_Home from "../../pages/SwivelFinance/PG_Home.js";
import PG_Common from "../../pages/PG_Common.js";
import LIB_Common from "../LIB_Common.js";

class Home {
  /**
   * a method to Verify the Swivel Group logo
   */
  async bc_VerifyHomePageLogo() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_SwivelFinanceLogo,
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Finance logo on top of the Home page",
    );
  }

  /**
   * a method to Click on Swivel Finance logo on top of the screen
   */
  async bc_ClickOnTopAppLogo() {
    await PG_Home.img_SwivelFinanceLogo.click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Swivel Finance logo on top of the screen",
    );
  }

  /**
   * a method to Verify the Services We Deliver tiles
   */
  async bc_VerifyServicesWeDeliver(Title, SubTitle) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_ServicesWeDeliverTile(Title, SubTitle),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Finance Services as : " +
        SubTitle +
        " ,Under the title : " +
        Title,
    );
  }

  /**
   * a method to Verify the We value your privacy popup
   */
  async bc_VerifyWeValueYourPrivacyPopUp(Title, Description) {
    await LIB_Common.bc_VerifyH6Header(Title);
    await assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblPageHeaderSingle(Description, 1),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy popup description as : " + Description,
    );
    await LIB_Common.bc_VerifyTheButton("Decline", 1);
    await LIB_Common.bc_VerifyTheButton("Accept", 1);
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_CookiePolicyInPopUp,
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Cookie Policy link is present in popup below.",
    );
  }

  /**
   * a method to Verify the Services We Deliver tiles
   */
  async bc_VerifySuccessfulClientProject(Title, Description) {
    await LIB_Common.bc_VerifyTheParagraph(Title);
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblSuccessfulClientProjectDescription(Title, Description),
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_SuccessfulClientProjectReadMore(Title, Description),
      "Element not exist",
    );
    let linkedInURL = await PG_Home.lnk_SuccessfulClientProjectReadMore(
      Title,
      Description,
    ).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Sub Title as : " +
        Title +
        " ,And the Description as : " +
        Description +
        " , and read More link also available. URL : " +
        linkedInURL,
    );
  }

  /**
   * a method to Verify the We Have Worked With Them
   */
  async bc_VerifyWeHaveWorkedWithThem(Description, PeopleName, Job) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblDescriptionWithoutPeopleName(Description),
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblPeopleNameWithDescription(Description, PeopleName),
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblPeopleNameWithDescriptionAndJob(
        Description,
        PeopleName,
        Job,
      ),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Person name as : " +
        PeopleName +
        " ,And the Job as " +
        Job +
        " , And the Description as : " +
        Description,
    );
  }

  /**
   * a method to Verify the Thought Leadership
   */
  async bc_VerifyThoughtLeadership(Title) {
    await assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblParagraph(Title),
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_ThoughtLeadershipVisitMore(Title),
      "Element not exist",
    );
    let linkedInURL =
      await PG_Home.lnk_ThoughtLeadershipVisitMore(Title).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Sub Title as : " +
        Title +
        " , Under Thought Leadership and verify the Visit more link too. And URL : " +
        linkedInURL,
    );
  }

  /**
   * a method to Verify the Thought Leadership
   */
  async bc_VerifyTheFooter() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_SwivelLogoFooter,
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Application logo in footer.",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_Instagram,
      "Element not exist",
    );
    let url = await PG_Home.icn_Instagram.getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Application Instagram logo in footer. and App URL is : " +
        url,
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_Linkedin,
      "Element not exist",
    );
    url = await PG_Home.icn_Linkedin.getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Application Linkedin logo in footer. and App URL is : " + url,
    );
  }

  /**
   * a method to Verify the Footer panel
   */
  async bc_VerifyHomeScreenFooterPanel(tabNames) {
    let tabNamesToVerify = tabNames.includes(";")
      ? tabNames.split(";")
      : [tabNames];

    for (const tabName of tabNamesToVerify) {
      await assertionHandler.assertElementDisplayed(
        PG_Home.ele_FooterTab(tabName),
        "Element not exist",
      );

      await LIB_Common.bc_LogAllureReportAndLogs(
        `Verify the Swivel Finance Tab name ${tabName} is present in Footer panel.`,
      );
    }
  }

  /**
   * a method to Verify the Top panel
   */
  async bc_VerifyHomeScreenTopPanel(tabNames) {
    let tabNamesToVerify = tabNames.includes(";")
      ? tabNames.split(";")
      : [tabNames];

    for (const tabName of tabNamesToVerify) {
      await assertionHandler.assertElementDisplayed(
        PG_Home.ele_HeaderTab(tabName),
        "Element not exist",
      );

      await LIB_Common.bc_LogAllureReportAndLogs(
        `Verify the Swivel Finance Tab name ${tabName} is present in Top panel.`,
      );
    }
  }

  /**
   * a method to Verify Phone Number And Talk Button On Top
   */
  async bc_VerifyPhoneNumberAndTalkButtonOnTop(contactNumber) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_ContactNumber(contactNumber),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Contact number as : " + contactNumber,
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.btn_LetsTalk,
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Let's Talk button is present in top panel.",
    );
  }

  /**
   * a method to Click on Let's Talk button on top of the screen
   */
  async bc_ClickOnLetsTalkButton() {
    // await PG_Home.btn_LetsTalk.click();
    const button = await PG_Home.btn_LetsTalk;
    await button.waitForDisplayed({ timeout: 5000 });
    await button.waitForClickable({ timeout: 5000 });
    await button.click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Let's Talk button on top of the screen",
    );
  }

  /**
   * a method to Click on Tab from the top panel
   */
  async bc_ClickOnTabFromTopPanel(tabName) {
    await PG_Home.ele_HeaderTab(tabName).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Tab as : " + tabName + " on top of the screen",
    );
  }
}
export default new Home();
