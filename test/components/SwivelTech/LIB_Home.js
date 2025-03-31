import PG_Home from "../../pages/SwivelTech/PG_Home.js";
import PG_Common from "../../pages/PG_Common.js";
import LIB_Common from "../LIB_Common.js";
class Home {
  /**
   * a method to Verify the Swivel Tech logo
   */
  async bc_VerifyHomePageLogo() {
    await expect(PG_Home.img_SwivelTechLogo).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Tech logo on top of the Home page",
    );
  }

  /**
   * a method to Click on the spp logo
   */
  async bc_ClickOnAppLogo() {
    await PG_Home.img_SwivelTechLogo.click();
    await LIB_Common.bc_LogAllureReportAndLogs("Click on the Swivel Tech logo");
  }

  /**
   * a method to Verify the Footer Swivel Tech logo
   */
  async bc_VerifyHomeFooterPageLogo() {
    await expect(PG_Home.img_SwivelTechLogoInFooter).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Footer Swivel Tech logo on top of the Home page",
    );
  }

  /**
   * a method to Verify the Footer Option
   */
  async bc_VerifyFooterOptions(Header, Options) {
    let tabNamesToVerify =
      typeof Options === "string" && Options.includes(";")
        ? Options.split(";")
        : [Options];

    for (const tabName of tabNamesToVerify) {
      await expect(PG_Home.lnk_FooterOption(Header, tabName)).toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        `Verify the Swivel Tech Footer main option is : ${Header} and option as : ${tabName} is present.`,
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
    let element = await PG_Home.ele_HamburgerIcon;
    if (await element.isExisting()) {
      await PG_Home.ele_HamburgerIcon.click();
      for (const tabName of tabNamesToVerify) {
        await expect(PG_Common.lnk_Navigation(tabName)).toBePresent();
        await LIB_Common.bc_LogAllureReportAndLogs(
          `Verify the Swivel Tech Tab name ${tabName} is present.`,
        );
      }
      await expect(PG_Home.ele_CloseIcon).toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        `Verify the Swivel Tech Close icon is present.`,
      );
      await PG_Home.ele_CloseIcon.click();
      await LIB_Common.bc_LogAllureReportAndLogs(
        `Click on the Swivel Tech Close icon is present.`,
      );
    } else {
      for (const tabName of tabNamesToVerify) {
        await expect(PG_Home.ele_HeaderTab(tabName)).toBePresent();
        await LIB_Common.bc_LogAllureReportAndLogs(
          `Verify the Swivel Tech Tab name ${tabName} is present.`,
        );
      }
    }
  }

  /**
   * a method to Verify the Contact Top panel
   */
  async bc_VerifyContactTopPanel(phoneNumber) {
    await expect(PG_Home.ele_ContactNumber(phoneNumber)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Tech Contact number as : " +
        phoneNumber +
        " is present. ",
    );
    await expect(PG_Home.btn_LetsTalk).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Tech Let's talk button is present. ",
    );
  }

  /**
   * a method to Verify the Services With Count
   */
  async bc_VerifyServicesWithCount(Label, Count) {
    let element = await PG_Home.lbl_ServicesWithCount(Label, Count);
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    await expect(PG_Home.lbl_ServicesWithCount(Label, Count)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Tech Services as : " +
        Label +
        " and Count as : " +
        Count +
        " is present. ",
    );
  }

  /**
   * a method to Verify the Software Solutions We Deliver tile
   */
  async bc_VerifySoftwareSolutionsWeDeliverTile(Label) {
    await expect(PG_Home.lnk_SoftwareSolutionsWeDeliver(Label)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Tech Company deliver as : " + Label + " is present.",
    );
  }

  /**
   * a method to Click the Software Solutions We Deliver tile
   */
  async bc_ClickSoftwareSolutionsWeDeliverTile(Label) {
    let elementToScroll = await PG_Home.lnk_SoftwareSolutionsWeDeliver(Label);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    await PG_Home.lnk_SoftwareSolutionsWeDeliver(Label).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Swivel Tech Company deliver as : " + Label,
    );
  }

  /**
   * a method to Verify the How We Work tile
   */
  async bc_VerifyHowWeWork(Title, Description) {
    await expect(PG_Home.lbl_HowWeWorks(Title)).toBePresent();
    let applicationText = await PG_Home.lbl_HowWeWorks(Title).getText();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "System Description as : " + applicationText,
    );
    await expect(PG_Home.lbl_HowWeWorks(Title)).toHaveText(
      expect.stringContaining(Description),
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Tech Project model as : " +
        Title +
        " and Description as : " +
        Description +
        " is present. ",
    );
  }

  /**
   * a method to Verify Why Choose us 1 Tile
   */
  async bc_VerifyWhyChooseUsTile1(Description) {
    await expect(PG_Home.icn_AccessTheBestTalentInTheIndustry).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Icon of Access The Best Talent In The Industry in Home page",
    );
    await expect(
      PG_Home.ele_AccessTheBestTalentInTheIndustryTitle,
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Title as Access The Best Talent In The Industry",
    );
    await expect(
      PG_Home.ele_AccessTheBestTalentInTheIndustryDescription(Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Description as : " + Description,
    );
  }

  /**
   * a method to Verify Why Choose us 2 Tile
   */
  async bc_VerifyWhyChooseUsTile2(Description) {
    await expect(PG_Home.icn_RobustEmployeePerformanceManagement).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Icon of Robust Employee Performance Management in Home page",
    );
    await expect(
      PG_Home.ele_RobustEmployeePerformanceManagementTitle,
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Title as Robust Employee Performance Management",
    );

    await expect(
      PG_Home.ele_RobustEmployeePerformanceManagementDescription(Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Description as : " + Description,
    );
  }

  /**
   * a method to Verify Why Choose us 3 Tile
   */
  async bc_VerifyWhyChooseUsTile3(Description) {
    await expect(PG_Home.icn_AgileApproachToSoftwareDevelopment).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Icon of Agile Approach To Software Development in Home page",
    );

    await expect(
      PG_Home.ele_AgileApproachToSoftwareDevelopmentTitle,
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Title as Agile Approach To Software Development",
    );

    await expect(
      PG_Home.ele_AgileApproachToSoftwareDevelopmentDescription(Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Description as : " + Description,
    );
  }

  /**
   * a method to Verify Why Choose us 4 Tile
   */
  async bc_VerifyWhyChooseUsTile4(Description) {
    await expect(PG_Home.icn_EliminateOverheadCosts).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Icon of Eliminate Overhead Costs in Home page",
    );

    await expect(PG_Home.ele_EliminateOverheadCostsTitle).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Title as Eliminate Overhead Costs",
    );

    await expect(
      PG_Home.ele_EliminateOverheadCostsDescription(Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Description as : " + Description,
    );
  }

  /**
   * a method to Verify Hear What Our Clients Have to Say
   */
  async bc_VerifyHearWhatOurClientsHaveToSay(
    ClientName,
    ClientJob,
    Description,
  ) {
    await expect(PG_Home.icn_WhatOurClientSay(ClientName)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Icon of Client Name as : " + ClientName,
    );
    await expect(
      PG_Home.lbl_WhatOurClientSayWithName(ClientName),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Icon and name of Client Name as : " + ClientName,
    );
    await expect(
      PG_Home.lbl_WhatOurClientSayWithNameDesignation(ClientName, ClientJob),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Icon of Client Name as : " +
        ClientName +
        " and the Designation as : " +
        ClientJob,
    );
    await expect(
      PG_Home.lbl_WhatOurClientSayWithNameDesignationAndDescription(
        ClientName,
        ClientJob,
        Description,
      ),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Icon of Client Name as : " +
        ClientName +
        " and the Designation as : " +
        ClientJob +
        " and Description as : " +
        Description,
    );
  }

  /**
   * a method to Verify Successful Client project tile
   */
  async bc_VerifySuccessfulClientProjectTile(Title, Description) {
    await expect(
      PG_Home.ele_SuccessfulProjectTile(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Successful Client Project Title as : " +
        Title +
        " and Description as : " +
        Description,
    );
    let linkedInURL = await PG_Home.lnk_SuccessfulProjectTileReadMore(
      Title,
    ).getAttribute("href");
    await expect(
      PG_Home.lnk_SuccessfulProjectTileReadMore(Title),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Successful Client Project Title as : " +
        Title +
        " and Read More link. and URL as : " +
        linkedInURL,
    );
  }

  /**
   * a method to Verify Our Latest Insights tile
   */
  async bc_VerifyOurLatestInsightsTile(
    Title,
    Category,
    DateInSystem,
    Description,
  ) {
    await expect(
      PG_Home.lbl_OurLatestInsights(Title, Category, DateInSystem),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Our Latest Insights tile Title as : " +
        Title +
        " and Category as : " +
        Category +
        " , and Date as : " +
        DateInSystem,
    );
    await expect(PG_Home.lbl_LatestDescription(Description)).toBePresent();
    await expect(
      PG_Home.lbl_LatestDescriptionReadMore(Description),
    ).toBePresent();
    let href = await PG_Home.lbl_LatestDescriptionReadMore(
      Description,
    ).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Our Latest Insights Description as : " + Description,
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Our Latest Insights Have Read More link and URL : " + href,
    );
  }

  /**
   * a method to Verify the Swivel Tech Top Page Header
   */
  async bc_VerifyTopSubPageHeader(pageHeader) {
    await expect(PG_Home.lbl_TopSubPageHeaderInSpan(pageHeader)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Swivel Tech Top Page Header as " + pageHeader,
    );
  }

  /**
   * a method to Click on Top Tab
   */
  async bc_ClickOnTopTab(tabName, Option) {
    let OptionToSelect = Option;
    await browser.pause(6000);
    let element = await PG_Home.ele_HamburgerIcon;
    if (await element.isExisting()) {
      await PG_Home.ele_HamburgerIcon.click();
      await LIB_Common.bc_LogAllureReportAndLogs("Click on Hamburger icon.");
      if (!OptionToSelect) {
        await PG_Common.lnk_Navigation(tabName).click();
        await LIB_Common.bc_LogAllureReportAndLogs("Click on Tab : " + tabName);
      } else {
        await PG_Home.ele_MainItemArrowDown(tabName).click();
        await LIB_Common.bc_LogAllureReportAndLogs(
          "Click on Main Tab : " + tabName + " arrow down icon.",
        );
        await PG_Common.lnk_NavigationForSecondElement(OptionToSelect).click();
        await LIB_Common.bc_LogAllureReportAndLogs(
          "Click on Sub Tab : " + OptionToSelect,
        );
      }
      await browser.pause(6000);
    } else {
      await PG_Home.ele_HeaderTab(tabName).moveTo();
      await browser.pause(6000);
      if (!OptionToSelect) {
        await PG_Home.ele_HeaderTab(tabName).click();
        await LIB_Common.bc_LogAllureReportAndLogs("Click on Tab : " + tabName);
      } else {
        await PG_Common.lnk_Navigation(OptionToSelect).moveTo({
          block: "center",
          inline: "center",
        });
        await browser.pause(5000);
        await PG_Common.lnk_Navigation(OptionToSelect).click();
        await LIB_Common.bc_LogAllureReportAndLogs(
          "Click on Tab : " +
            tabName +
            " and Sub Tab as : " +
            Option +
            " from the Home page",
        );
      }
    }
    await browser.pause(5000);
    await PG_Home.img_SwivelTechLogo.moveTo({
      block: "center",
      inline: "center",
    });
    await browser.pause(4000);
  }

  /**
   * a method to Verify the Sub PageHeader In P Tag all match
   */
  async bc_VerifySubPageHeaderToMatchAllInPTag(Title) {
    await expect(PG_Home.lbl_DescriptionToMatchAllInPTag(Title)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the header as : " + Title,
    );
  }

  /**
   * a method to Verify the Sub PageHeader In P Tag
   */
  async bc_VerifySubPageHeaderInPTag(Title) {
    await expect(PG_Home.lbl_LatestDescription(Title)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the header as : " + Title,
    );
  }

  /**
   * a method to Verify the Sub PageHeader In H1 Tag
   */
  async bc_VerifySubPageHeaderInH1(Title) {
    await expect(PG_Home.lbl_H1WithNormalizeSpace(Title)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the H1 header as : " + Title,
    );
  }
  /**
   * a method to Click on the Footer Option
   */
  async bc_ClickOnFooterOption(header, tabName) {
    await PG_Home.lnk_FooterOption(header, tabName).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on the options as : " +
        tabName +
        " , and sub header as : " +
        header,
    );
  }

  /**
   * a method to Verify the footer email Sign Up for Our Newsletter
   */
  async bc_VerifySignUpForOurNewsletter() {
    await expect(PG_Home.tf_EmailForOurNewsletter).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Footer email for our news letter is present.",
    );
    LIB_Common.bc_VerifyTheButton("SUBSCRIBE", 1);
  }

  /**
   * a method to Type email into Sign Up for Our Newsletter Field
   */
  async bc_TypeEmailIntoSignUpForOurNewsletter(email) {
    await PG_Home.tf_EmailForOurNewsletter.clearValue();
    await PG_Home.tf_EmailForOurNewsletter.addValue(email);
    await LIB_Common.bc_LogAllureReportAndLogs("Type Email as " + email);
  }

  /**
   * a method to Verify the Error message under email Field
   */
  async bc_VerifyErrorMessageUnderEmail(message) {
    await expect(PG_Home.lbl_ErrorMessageUnderEmail(message)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the error message under the email as : " + message,
    );
  }

  /**
   * a method to Verify the Thank you message under email Field
   */
  async bc_VerifyThankYouMessageUnderEmail(message) {
    await expect(PG_Home.lbl_ThankYouSigningUp(message)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Thank you message under the email as : " + message,
    );
  }

  /**
   * a method to Verify the Social Media icons
   */
  async bc_VerifySocialMediaIconsAndURL() {
    // Facebook Icon and URL
    await expect(PG_Home.lnk_SocialMedia(1)).toBePresent();
    let appURL = await PG_Home.lnk_SocialMedia(1).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Facebook icon and app url as : " + appURL,
    );
    // Instagram Icon and URL
    await expect(PG_Home.lnk_SocialMedia(2)).toBePresent();
    appURL = await PG_Home.lnk_SocialMedia(2).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Instagram icon and app url as : " + appURL,
    );
    // Twitter Icon and URL
    await expect(PG_Home.lnk_SocialMedia(3)).toBePresent();
    appURL = await PG_Home.lnk_SocialMedia(3).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Twitter icon and app url as : " + appURL,
    );
    // LinkedIn Icon and URL
    await expect(PG_Home.lnk_SocialMedia(4)).toBePresent();
    appURL = await PG_Home.lnk_SocialMedia(4).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the LinkedIn icon and app url as : " + appURL,
    );
  }

  /**
   * a method to Click on Facebook Icon and verify it.
   */
  async bc_ClickOnFaceBookIconAndVerifyIt() {
    // Get parent window GUID
    let parentGUID = await browser.getWindowHandle();

    // Locate and interact with the brand element
    let element = PG_Home.lnk_SocialMedia(1);
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
   * a method to click on Linkedin icon
   *
   */
  async bc_ClickOnLinkedinIcon() {
    // Get parent window GUID
    let parentGUID = await browser.getWindowHandle();

    // Locate and interact with the brand element
    let element = await PG_Home.lnk_SocialMedia(4);
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
   * a method to click on Instagram icon
   *
   */
  async bc_ClickOnInstagramIcon() {
    // Get parent window GUID
    let parentGUID = await browser.getWindowHandle();

    // Locate and interact with the brand element
    let element = await PG_Home.lnk_SocialMedia(2);
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
    let element = await PG_Home.lnk_SocialMedia(3);
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
   * a method to Verify Our Latest Insights tile in P Tag
   *
   */
  async bc_VerifyOurLatestInsightsTileInPTag(
    Title,
    Category,
    DateInSystem,
    Description,
  ) {
    await expect(
      PG_Home.lbl_OurLatestInsights(Title, Category, DateInSystem),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Our Latest Insights tile Title as : " +
        Title +
        " and Category as : " +
        Category +
        " , and Date as : " +
        DateInSystem,
    );
    await expect(
      PG_Home.lbl_DescriptionToMatchAllInPTag(Description),
    ).toBePresent();
    await expect(
      PG_Home.lbl_LatestDescriptionReadMoreInP(Description),
    ).toBePresent();
    let href = await PG_Home.lbl_LatestDescriptionReadMoreInP(
      Description,
    ).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Our Latest Insights Description as : " + Description,
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Our Latest Insights Have Read More link and URL : " + href,
    );
  }

  /**
   * a method to click on Let's Talk button
   *
   */
  async bc_ClickOnLetsTalkButton(buttonName) {
    let element = await PG_Home.ele_HamburgerIcon;
    if (await element.isExisting()) {
      await PG_Home.ele_HamburgerIcon.click();
      await PG_Common.lnk_Navigation(buttonName).click();
      await this.bc_LogAllureReportAndLogs(
        "Clicked on Hamburger Icon and button with label: " + buttonName,
      );
    } else {
      await LIB_Common.bc_ClickOnButton(buttonName, 1);
    }
    await browser.pause(2000);
  }
}
export default new Home();
