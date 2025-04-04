import PG_Home from "../../pages/SwivelGroup/PG_Home.js";
import PG_Common from "../../pages/PG_Common.js";
import LIB_Common from "../../components/LIB_Common.js";
import config from "../../../config.js";
class Home {
  /**
   * a method to Verify the Swivel Group logo
   */
  async bc_VerifyHomePageLogo() {
    await expect(PG_Home.img_SwivelGroupLogo).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Group logo on top of the Home page",
    );
  }

  /**
   * a method to Click on the Swivel Group logo
   */
  async bc_ClickOnApplicationLogoAndVerifyTheAppURL() {
    await PG_Home.img_SwivelGroupLogo.click();
    await browser.pause(2000);
    // Get the current URL
    let currentUrl = await browser.getUrl();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Full URL After Navigating : " + currentUrl,
    );
    // Extract the last segment of the URL
    await expect(browser).toHaveUrl(
      expect.stringContaining(config.URLS.SWIVEL_GROUP),
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Application logo and Verify the App URL to the Home Screen",
    );
  }

  /**
   * a method to Verify the Top panel
   */
  async bc_VerifyHomeScreenTopPanel(tabNames) {
    let tabNamesToVerify = tabNames.includes(";")
      ? tabNames.split(";")
      : [tabNames];

    for (const tabName of tabNamesToVerify) {
      await expect(PG_Home.ele_HeaderTab(tabName)).toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        `Verify the Swivel Group Tab name ${tabName} is present.`,
      );
    }
  }

  /**
   * a method to Verify Contact panel on the top of the site
   */
  async bc_VerifyContactDetailsInTopPanel(contactNumber) {
    await expect(PG_Home.ele_ContactNumber(contactNumber)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Group Contact number on top of the site. Contact number : " +
        contactNumber,
    );

    await expect(PG_Home.btn_LetsTalk).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Group Let's Talk button is present.",
    );
  }

  /**
   * a method to navigate to tab from navigation
   */
  async bc_NavigateToTabFromTopNavigation(tabName) {
    let element = await PG_Home.ele_HamburgerIcon;
    if (await element.isDisplayed()) {
      await PG_Home.ele_HamburgerIcon.click();
      await LIB_Common.bc_LogAllureReportAndLogs("Click on Hamburger icon.");
      await browser.pause(5000);
      await PG_Home.ele_HeaderTabForTab(tabName).click();
    } else {
      await PG_Home.ele_HeaderTab(tabName).click();
    }
    await browser.pause(2000);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Navigate to the " + tabName + " tab from the top navigation",
    );
  }

  /**
   * a method to Verify The Experts In Title
   */
  async bc_VerifyTheExpertsInTitle(textValue, index) {
    await expect(PG_Home.ele_TitleInExpertsIn(textValue, index)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Experts In title is " +
        textValue +
        " and title index is " +
        index +
        " it is present in Home page of the Swivel Group Site.",
    );
  }

  /**
   * a method to Verify The Center Items
   */
  async bc_VerifyTheCenterItems(
    textValueForTitle,
    textValueForDescription,
    index,
  ) {
    await expect(
      PG_Home.ele_TitleInCenter(
        textValueForTitle,
        textValueForDescription,
        index,
      ),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Experts In title is " +
        textValueForTitle +
        " and Description is : " +
        textValueForDescription +
        " title index is " +
        index +
        " it is present in Home page of the Swivel Group Site.",
    );
  }

  /**
   * a method to Verify Our Brands in home page
   */
  async bc_VerifyOurBrandsInHomePage(brandTitle, brandDescription) {
    await expect(
      PG_Home.ele_OurBrands(brandTitle, brandDescription),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify Our Brand title is " +
        brandTitle +
        " and brand description is " +
        brandDescription +
        " it is present in Home page of the Swivel Group Site.",
    );
  }

  /**
   * a method to Verify Our Brands with links in home page
   */
  async bc_VerifyOurBrandsWithLinksInHomePage(brandTitle, brandLink) {
    await expect(
      PG_Home.ele_OurBrandsWithLink(brandTitle, brandLink),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify Our Brand title is " +
        brandTitle +
        " and brand link is " +
        brandLink +
        " it is present in Home page of the Swivel Group Site.",
    );
  }

  /**
   * a method to Verify the footer panel
   */
  async bc_VerifyHomeScreenFooterPanel(tabNames) {
    let tabNamesToVerify;

    if (tabNames.includes(";")) {
      tabNamesToVerify = tabNames.split(";");
    } else {
      tabNamesToVerify = tabNames;
    }

    for (let i = 0; i < tabNamesToVerify.length; i++) {
      await expect(
        PG_Home.ele_FooterTab(tabNamesToVerify[i], i + 1),
      ).toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        "Verify the Footer Tab name " + tabNamesToVerify[i] + " is present. ",
      );
    }
  }

  /**
   * a method to verify the social media icon
   */
  async bc_VerifyTheSocialMediaIcon() {
    await expect(PG_Home.icn_Facebook).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Facebook icon on Footer",
    );

    await expect(PG_Home.icn_Instagram).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Instagram icon on Footer",
    );

    await expect(PG_Home.icn_Twitter).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Twitter icon on Footer",
    );

    await expect(PG_Home.icn_Linkedin).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Linkedin icon on Footer",
    );
  }

  /**
   * a method to Click option from the footer panel
   */
  async bc_ClickOptionFromFooterPanel(tabName) {
    let element = await PG_Home.ele_FooterTab(tabName);
    await browser.pause(2000);
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    await browser.pause(2000);
    await PG_Home.ele_FooterTab(tabName).click();
    await browser.pause(2000);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on the Footer Tab name " + tabName + " is present.",
    );
  }

  /**
   * a method to Verify We Value your Privacy
   */
  async bc_VerifyWeValueYourPrivacy(header, description) {
    await expect(PG_Common.lbl_PageHeader(header, 1)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy popup header as : " + header,
    );

    await expect(PG_Common.lbl_PageHeaderSingle(description, 1)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy popup description as : " + description,
    );

    // Button Decline All
    await expect(PG_Common.btn_ButtonWithLabel("Decline All", 1)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy popup Decline All button is present.",
    );

    // Button Accept All
    await expect(PG_Common.btn_ButtonWithLabel("Accept All", 1)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy popup Accept All button is present.",
    );
  }

  /**
   * a method to Verify We Value your Privacy not present
   */
  async bc_VerifyWeValueYourPrivacyNotPresent(header, description) {
    let element = await PG_Common.lbl_PageHeader(header, 1);
    await expect(element).not.toBePresent();

    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy popup header as : " + header + " is not present.",
    );
    element = await PG_Common.lbl_PageHeaderSingle(description, 1);
    await expect(element).not.toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy popup description as : " +
        description +
        " is not present.",
    );

    // Button Decline All
    element = await PG_Common.btn_ButtonWithLabel("Decline All", 1);
    await expect(element).not.toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy popup Decline All button is not present.",
    );

    // Button Accept All
    element = await PG_Common.btn_ButtonWithLabel("Accept All", 1);
    await expect(element).not.toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Privacy popup Accept All button is not present.",
    );
  }

  /**
   * a method to Clear Cache and cookies and reload the url
   *
   */
  async bc_ClearCacheAndCookiesAndReload() {
    await browser.deleteAllCookies();
    await browser.refresh();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Clear Cache and cookies and reload the url",
    );
  }

  /**
   * a method to click on facebook icon
   *
   */
  async bc_ClickOnFacebookIcon() {
    // Get parent window GUID
    let parentGUID = await browser.getWindowHandle();

    // Locate and interact with the brand element
    let element = await PG_Home.icn_Facebook;
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    let appUrl = await element.getAttribute("href");
    await element.click();

    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Facebook in home page. Clicked URL : " + appUrl,
    );

    // Wait until a new window appears
    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length > 1,
    );

    // Get all window GUIDs and find the child window
    let allGUIDs = await browser.getWindowHandles();
    let childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // Switch to child window
    await browser.switchToWindow(childGUID);
  }

  /**
   * a method to click on Instagram icon
   *
   */
  async bc_ClickOnInstagramIcon() {
    // Get parent window GUID
    let parentGUID = await browser.getWindowHandle();

    // Locate and interact with the brand element
    let element = await PG_Home.icn_Instagram;
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    let appUrl = await element.getAttribute("href");
    await element.click();

    // Wait until a new window appears
    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length > 1,
    );

    // Get all window GUIDs and find the child window
    let allGUIDs = await browser.getWindowHandles();
    let childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // Switch to child window
    await browser.switchToWindow(childGUID);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Instagram in home page. Click URL : " + appUrl,
    );
  }

  /**
   * a method to click on Twitter icon
   *
   */
  async bc_ClickOnTwitterIcon() {
    // Get parent window GUID
    let parentGUID = await browser.getWindowHandle();

    // Locate and interact with the brand element
    let element = await PG_Home.icn_Twitter;
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    let appUrl = await element.getAttribute("href");
    await element.click();

    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Twitter in home page. Clicked URL : " + appUrl,
    );

    // Wait until a new window appears
    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length > 1,
    );

    // Get all window GUIDs and find the child window
    let allGUIDs = await browser.getWindowHandles();
    let childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // Switch to child window
    await browser.switchToWindow(childGUID);
    await browser.pause(2000);
  }

  /**
   * a method to click on Linkedin icon
   *
   */
  async bc_ClickOnLinkedinIcon() {
    // Get parent window GUID
    let parentGUID = await browser.getWindowHandle();

    // Locate and interact with the brand element
    let element = await PG_Home.icn_Linkedin;
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    let appUrl = await element.getAttribute("href");
    await element.click();

    // Wait until a new window appears
    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length > 1,
    );

    // Get all window GUIDs and find the child window
    let allGUIDs = await browser.getWindowHandles();
    let childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // Switch to child window
    await browser.switchToWindow(childGUID);
    await browser.pause(1000);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Linkedin in home page. Clicked URL : " + appUrl,
    );
  }

  /**
   * a method to Click on Lets talk button and Verify Contact Us Page
   */
  async bc_ClickOnLetsTalkButtonAndVerifyContactUsPage() {
    await PG_Home.btn_LetsTalk.click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Lets Talk button in Home page",
    );
    await LIB_Common.bc_VerifyH1Header("Contact Us");
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
  }

  /**
   * a method to Verify the Phone number in home page
   */
  async bc_VerifyThePhoneNumberInHomePage(phoneNumber) {
    await expect(PG_Home.ele_ContactNumber(phoneNumber)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Phone number as : " + phoneNumber + " in Home page",
    );
  }

  /**
   * a method to Click on Phone number in home page
   */
  async bc_ClickOnPhoneNumberInHomePage(phoneNumber) {
    await PG_Home.ele_ContactNumber(phoneNumber).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Phone number as : " + phoneNumber + " in Home page",
    );
  }

  /**
   * a method to Click on Our Brands links in home page
   */
  async bc_ClickOnOurBrandsLinksInHomePage(brandTitle, brandLink) {
    // Get parent window GUID
    let parentGUID = await browser.getWindowHandle();

    // Locate and interact with the brand element
    let element = await PG_Home.ele_OurBrandsWithLink(brandTitle, brandLink);
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    await element.click();

    await LIB_Common.bc_LogAllureReportAndLogs(
      `Clicked on Our Brand title: ${brandTitle}, Brand link: ${brandLink}`,
    );

    // Wait until a new window appears
    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length > 1,
    );

    // Get all window GUIDs and find the child window
    let allGUIDs = await browser.getWindowHandles();
    let childGUID = allGUIDs.find((guid) => guid !== parentGUID);

    // Switch to child window
    await browser.switchToWindow(childGUID);
    await browser.pause(2000);
  }

  /**
   * a method to Click on For more news in home page
   */
  async bc_ClickOnForMoreNewsInHomePage() {
    await browser.pause(2000);
    let element = await PG_Home.lnk_ForMoreNews;
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    await browser.pause(2000);
    await PG_Home.lnk_ForMoreNews.click();
    await browser.pause(2000);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on For more news link in home page",
    );
  }

  /**
   * a method to Verify For more news in home page
   */
  async bc_VerifyForMoreNewsInHomePage() {
    await expect(PG_Home.lnk_ForMoreNews).toBePresent();
    let appURL = await PG_Home.lnk_ForMoreNews.getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify For more news link in home page. URL : " + appURL,
    );
  }
}
export default new Home();
