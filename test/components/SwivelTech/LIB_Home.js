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
    if (await element.isDisplayed()) {
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
      block: "center",
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
   * a method to Click On Top Tab
   */
  async bc_ClickOnTopTab(tabName, Option) {
    const hamburgerIcon = await PG_Home.ele_HamburgerIcon;
  
    if (await hamburgerIcon.isDisplayed()) {
      await hamburgerIcon.waitForClickable({ timeout: 5000 });
      await hamburgerIcon.click();
      await LIB_Common.bc_LogAllureReportAndLogs("Clicked on Hamburger icon.");
  
      if (!Option) {
        const tabLink = await PG_Common.lnk_Navigation(tabName);
        await tabLink.waitForDisplayed({ timeout: 5000 });
        await tabLink.scrollIntoView({ block: "center", inline: "nearest" });
        await tabLink.click();
        await LIB_Common.bc_LogAllureReportAndLogs("Clicked on Tab: " + tabName);
      } else {
        const arrowDown = await PG_Home.ele_MainItemArrowDown(tabName);
        if (await arrowDown.isExisting()) {
          await arrowDown.scrollIntoView({ block: "center", inline: "nearest" });
          await arrowDown.waitForClickable({ timeout: 5000 });
          await arrowDown.click();
          await LIB_Common.bc_LogAllureReportAndLogs(
            "Clicked on Main Tab: " + tabName + " arrow down icon."
          );
        } else {
          await LIB_Common.bc_LogAllureReportAndLogs(
            "Main Tab: " + tabName + " arrow down icon already expanded."
          );
        }
  
        const subTab = await PG_Common.lnk_NavigationForSecondElement(Option);
        await subTab.waitForClickable({ timeout: 5000 });
        await subTab.click();
        await LIB_Common.bc_LogAllureReportAndLogs("Clicked on Sub Tab: " + Option);
      }
    } else {
      const headerTab = await PG_Home.ele_HeaderTab(tabName);
      await headerTab.moveTo();
  
      if (!Option) {
        await headerTab.waitForClickable({ timeout: 5000 });
        await headerTab.click();
        await LIB_Common.bc_LogAllureReportAndLogs("Clicked on Tab: " + tabName);
      } else {
        const subTab = await PG_Common.lnk_Navigation(Option);
        await subTab.scrollIntoView({ block: "center", inline: "nearest" });
        await subTab.waitForClickable({ timeout: 5000 });
        await subTab.click();
        await LIB_Common.bc_LogAllureReportAndLogs(
          `Clicked on Tab: ${tabName} and Sub Tab: ${Option} from the Home page`
        );
      }
    }
  
    // Scroll to SwivelTech logo to ensure UI reset
    const logo = await PG_Home.img_SwivelTechLogo;
    await logo.scrollIntoView({ block: "center", inline: "nearest" });
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
 * A method to Click on the Footer Option safely
 */
async bc_ClickOnFooterOption(header, tabName) {
  const footerOption = await PG_Home.lnk_FooterOption(header, tabName);

  // Ensure the element is displayed
  await footerOption.waitForDisplayed({ timeout: 10000 });

  // Scroll into view
  await footerOption.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });

  // Optional: allow scroll animation to complete
  await browser.pause(500);

  // Click the footer option
  await footerOption.click();

  await LIB_Common.bc_LogAllureReportAndLogs(
    `Clicked on the footer option: '${tabName}' under header: '${header}'`
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
    await element.waitForDisplayed({ timeout: 10000 });
  await element.scrollIntoView({ block: "center", inline: "nearest" });
  await browser.pause(500);
    let appUrl = await element.getAttribute("href");
    try {
      await element.click();
    } catch (error) {
      console.warn("Standard click failed, using JS click");
      await browser.execute("arguments[0].click();", element);
    }

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
    await element.waitForDisplayed({ timeout: 10000 });
    await element.scrollIntoView({ block: "center", inline: "nearest" });
    await browser.pause(500); // Give the UI time to settle
    
    let appUrl = await element.getAttribute("href");
    try {
      await element.click();
    } catch (error) {
      console.warn("Standard click failed, using JS click");
      await browser.execute("arguments[0].click();", element);
    }

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
    await element.waitForDisplayed({ timeout: 10000 });
  await element.scrollIntoView({ block: "center", inline: "nearest" });
  await browser.pause(500);
    let appUrl = await element.getAttribute("href");
    try {
      await element.click();
    } catch (error) {
      console.warn("Standard click failed, using JS click");
      await browser.execute("arguments[0].click();", element);
    }

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
    await element.waitForDisplayed({ timeout: 10000 });
  await element.scrollIntoView({ block: "center", inline: "nearest" });
  await browser.pause(500);
    let appUrl = await element.getAttribute("href");
    try {
      await element.click();
    } catch (error) {
      console.warn("Standard click failed, using JS click");
      await browser.execute("arguments[0].click();", element);
    }

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
    if (await element.isDisplayed()) {
      await PG_Home.ele_HamburgerIcon.click();
      await PG_Common.lnk_Navigation("Let's Talk").click();
      await LIB_Common.bc_LogAllureReportAndLogs(
        "Clicked on Hamburger Icon and button with label: " + buttonName,
      );
    } else {
      await LIB_Common.bc_ClickOnButton(buttonName, 1);
    }
    await browser.pause(2000);
  }

  /**
   * a method to Verify the Swivel Tech Page Header
   */
  async bc_VerifyPageHeaderInHomePage() {
    const isHamburgerVisible = await (
      await PG_Home.ele_HamburgerIcon
    ).isDisplayed();

    // Choose the right element based on the condition
    const pageHeaderElement = isHamburgerVisible
      ? await PG_Home.ele_lblPageHeaderInHero
      : await PG_Home.ele_lblPageHeaderInHeroInWeb;

    const systemText = await pageHeaderElement.getText();

    // Wait for the element to be displayed
    await pageHeaderElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view
    await pageHeaderElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Verify visibility
    await expect(pageHeaderElement).toBeDisplayed();

    // Log result
    await LIB_Common.bc_LogAllureReportAndLogs(
      `Verify the Swivel Tech Page Header in Home page as : ${systemText}`,
    );
  }
}
export default new Home();
