import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Home from "../../pages/SwivelTech/PG_Home.js";
import PG_Common from "../../pages/PG_Common.js";
import LIB_Common from "../LIB_Common.js";
import PG_SocialMedia from "../../pages/SwivelTech/PG_SocialMedia.js";
class Home {
  /**
   * a method to Verify the Swivel Tech logo
   */
  async bc_VerifyHomePageLogo() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_SwivelTechLogo,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Tech logo on top of the Home page",
      () => {
        console.log("Verify the Swivel Tech logo on top of the Home page");
      },
    );
  }

  /**
   * a method to Click on the spp logo
   */
  async bc_ClickOnAppLogo() {
    await PG_Home.img_SwivelTechLogo.click();
    allureReporter.step("Click on the Swivel Tech logo", () => {
      console.log("Click on the Swivel Tech logo");
    });
  }

  /**
   * a method to Verify the Footer Swivel Tech logo
   */
  async bc_VerifyHomeFooterPageLogo() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_SwivelTechLogoInFooter,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Footer Swivel Tech logo on top of the Home page",
      () => {
        console.log(
          "Verify the Footer Swivel Tech logo on top of the Home page",
        );
      },
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
      await assertionHandler.assertElementDisplayed(
        PG_Home.lnk_FooterOption(Header, tabName),
        "Element not exist",
      );

      allureReporter.step(
        `Verify the Swivel Tech Footer main option is : ${Header} and option as : ${tabName} is present.`,
        () =>
          console.log(
            `Verify the Swivel Tech Footer main option is : ${Header} and option as : ${tabName} is present.`,
          ),
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

      allureReporter.step(
        `Verify the Swivel Tech Tab name ${tabName} is present.`,
        () =>
          console.log(`Verify the Swivel Tech Tab name ${tabName} is present.`),
      );
    }
  }

  /**
   * a method to Verify the Contact Top panel
   */
  async bc_VerifyContactTopPanel(phoneNumber) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_ContactNumber(phoneNumber),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Tech Contact number as : " +
        phoneNumber +
        " is present. ",
      () => {
        console.log(
          "Verify the Swivel Tech Contact number as : " +
            phoneNumber +
            " is present. ",
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.btn_LetsTalk,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Tech Let's talk button is present. ",
      () => {
        console.log("Verify the Swivel Tech Let's talk button is present. ");
      },
    );
  }

  /**
   * a method to Verify the Services With Count
   */
  async bc_VerifyServicesWithCount(Label, Count) {
    let element = await PG_Home.ele_lblServicesWithCount(Label, Count);
    await element.scrollIntoView({ block: "center", inline: "center" });
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblServicesWithCount(Label, Count),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Tech Services as : " +
        Label +
        " and Count as : " +
        Count +
        " is present. ",
      () => {
        console.log(
          "Verify the Swivel Tech Services as : " +
            Label +
            " and Count as : " +
            Count +
            " is present. ",
        );
      },
    );
  }

  /**
   * a method to Verify the Software Solutions We Deliver tile
   */
  async bc_VerifySoftwareSolutionsWeDeliverTile(Label) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_SoftwareSolutionsWeDeliver(Label),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Tech Company deliver as : " + Label + " is present. ",
      () => {
        console.log(
          "Verify the Swivel Tech Company deliver as : " +
            Label +
            " is present. ",
        );
      },
    );
  }

  /**
   * a method to Verify the How We Work tile
   */
  async bc_VerifyHowWeWork(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblHowWeWorks(Title),
      "Element not exist",
    );
    let applicationText = await PG_Home.ele_lblHowWeWorks(Title).getText();
    allureReporter.step("System Description as : " + applicationText, () => {
      console.log("System Description as : " + applicationText);
    });
    expect(applicationText).toHaveTextContaining(Description);
    allureReporter.step(
      "Verify the Swivel Tech Project model as : " +
        Title +
        " and Description as : " +
        Description +
        " is present. ",
      () => {
        console.log(
          "Verify the Swivel Tech Project model as : " +
            Title +
            " and Description as : " +
            Description +
            " is present. ",
        );
      },
    );
  }

  /**
   * a method to Verify Why Choose us 1 Tile
   */
  async bc_VerifyWhyChooseUsTile1(Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_AccessTheBestTalentInTheIndustry,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Icon of Access The Best Talent In The Industry in Home page",
      () => {
        console.log(
          "Verify the Icon of Access The Best Talent In The Industry in Home page",
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_AccessTheBestTalentInTheIndustryTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Title as Access The Best Talent In The Industry",
      () => {
        console.log(
          "Verify the Title as Access The Best Talent In The Industry",
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_AccessTheBestTalentInTheIndustryDescription(Description),
      "Element not exist",
    );
    allureReporter.step("Verify the Description as : " + Description, () => {
      console.log("Verify the Description as : " + Description);
    });
  }

  /**
   * a method to Verify Why Choose us 2 Tile
   */
  async bc_VerifyWhyChooseUsTile2(Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_RobustEmployeePerformanceManagement,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Icon of Robust Employee Performance Management in Home page",
      () => {
        console.log(
          "Verify the Icon of Robust Employee Performance Management in Home page",
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_RobustEmployeePerformanceManagementTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Title as Robust Employee Performance Management",
      () => {
        console.log(
          "Verify the Title as Robust Employee Performance Management",
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_RobustEmployeePerformanceManagementDescription(Description),
      "Element not exist",
    );
    allureReporter.step("Verify the Description as : " + Description, () => {
      console.log("Verify the Description as : " + Description);
    });
  }

  /**
   * a method to Verify Why Choose us 3 Tile
   */
  async bc_VerifyWhyChooseUsTile3(Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_AgileApproachToSoftwareDevelopment,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Icon of Agile Approach To Software Development in Home page",
      () => {
        console.log(
          "Verify the Icon of Agile Approach To Software Development in Home page",
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_AgileApproachToSoftwareDevelopmentTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Title as Agile Approach To Software Development",
      () => {
        console.log(
          "Verify the Title as Agile Approach To Software Development",
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_AgileApproachToSoftwareDevelopmentDescription(Description),
      "Element not exist",
    );
    allureReporter.step("Verify the Description as : " + Description, () => {
      console.log("Verify the Description as : " + Description);
    });
  }

  /**
   * a method to Verify Why Choose us 4 Tile
   */
  async bc_VerifyWhyChooseUsTile4(Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_EliminateOverheadCosts,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Icon of Eliminate Overhead Costs in Home page",
      () => {
        console.log("Verify the Icon of Eliminate Overhead Costs in Home page");
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_EliminateOverheadCostsTitle,
      "Element not exist",
    );
    allureReporter.step("Verify the Title as Eliminate Overhead Costs", () => {
      console.log("Verify the Title as Eliminate Overhead Costs");
    });
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_EliminateOverheadCostsDescription(Description),
      "Element not exist",
    );
    allureReporter.step("Verify the Description as : " + Description, () => {
      console.log("Verify the Description as : " + Description);
    });
  }

  /**
   * a method to Verify Hear What Our Clients Have to Say
   *
   */
  async bc_VerifyHearWhatOurClientsHaveToSay(
    ClientName,
    ClientJob,
    Description,
  ) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_WhatOurClientSay(ClientName),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Icon of Client Name as : " + ClientName,
      () => {
        console.log("Verify the Icon of Client Name as : " + ClientName);
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblWhatOurClientSayWithName(ClientName),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Icon and name of Client Name as : " + ClientName,
      () => {
        console.log(
          "Verify the Icon and name of Client Name as : " + ClientName,
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblWhatOurClientSayWithNameDesignation(ClientName, ClientJob),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Client Name as : " +
        ClientName +
        " and the Designation as : " +
        ClientJob,
      () => {
        console.log(
          "Verify the Icon of Client Name as : " +
            ClientName +
            " and the Designation as : " +
            ClientJob,
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblWhatOurClientSayWithNameDesignationAndDescription(
        ClientName,
        ClientJob,
        Description,
      ),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Client Name as : " +
        ClientName +
        " and the Designation as : " +
        ClientJob +
        " and Description as : " +
        Description,
      () => {
        console.log(
          "Verify the Icon of Client Name as : " +
            ClientName +
            " and the Designation as : " +
            ClientJob +
            " and Description as : " +
            Description,
        );
      },
    );
  }

  /**
   * a method to Verify Successful Client project tile
   *
   */
  async bc_VerifySuccessfulClientProjectTile(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_SuccessfulProjectTile(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Successful Client Project Title as : " +
        Title +
        " and Description as : " +
        Description,
      () => {
        console.log(
          "Verify the Successful Client Project Title as : " +
            Title +
            " and Description as : " +
            Description,
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_SuccessfulProjectTileReadMore(Title),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Successful Client Project Title as : " +
        Title +
        " and Read More link",
      () => {
        console.log(
          "Verify the Successful Client Project Title as : " +
            Title +
            " and Read More link",
        );
      },
    );
  }

  /**
   * a method to Verify Our Latest Insights tile
   *
   */
  async bc_VerifyOurLatestInsightsTile(
    Title,
    Category,
    DateInSystem,
    Description,
  ) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblOurLatestInsights(Title, Category, DateInSystem),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Our Latest Insights tile Title as : " +
        Title +
        " and Category as : " +
        Category +
        " , and Date as : " +
        DateInSystem,
      () => {
        console.log(
          "Verify the Our Latest Insights tile Title as : " +
            Title +
            " and Category as : " +
            Category +
            " , and Date as : " +
            DateInSystem,
        );
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblLatestDescription(Description),
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblLatestDescriptionReadMore(Description),
      "Element not exist",
    );
    let href =
      await PG_Home.ele_lblLatestDescriptionReadMore(Description).getAttribute(
        "href",
      );
    allureReporter.step(
      "Verify the Our Latest Insights Description as : " + Description,
      () => {
        console.log(
          "Verify the Our Latest Insights Description as : " + Description,
        );
      },
    );
    allureReporter.step(
      "Verify the Our Latest Insights Have Read More link and URL : " + href,
      () => {
        console.log(
          "Verify the Our Latest Insights Have Read More link and URL : " +
            href,
        );
      },
    );
  }

  /**
   * a method to Verify the Swivel Tech Top Page Header
   */
  async bc_VerifyTopSubPageHeader(pageHeader) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblTopSubPageHeaderInSpan(pageHeader),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Tech Top Page Header as " + pageHeader,
      () => {
        console.log("Verify the Swivel Tech Top Page Header as " + pageHeader);
      },
    );
  }

  /**
   * a method to Click on Top Tab
   */
  async bc_ClickOnTopTab(tabName, Option) {
    let OptionToSelect = Option;
    await PG_Home.ele_HeaderTab(tabName).moveTo({
      block: "center",
      inline: "center",
    });
    await browser.pause(2000);
    if (!OptionToSelect) {
      await PG_Home.ele_HeaderTab(tabName).click();
      allureReporter.step("Click on Tab : " + tabName, () => {
        console.log("Click on Tab : " + tabName);
      });
    } else {
      await PG_Common.lnk_Navigation(OptionToSelect).moveTo({
        block: "center",
        inline: "center",
      });
      await browser.pause(1000);
      await PG_Common.lnk_Navigation(OptionToSelect).click();
      allureReporter.step(
        "Click on Tab : " +
          tabName +
          " and Sub Tab as : " +
          Option +
          " from the Home page",
        () => {
          console.log(
            "Click on Tab : " +
              tabName +
              " and Sub Tab as : " +
              Option +
              " from the Home page",
          );
        },
      );
    }
    await PG_Home.img_SwivelTechLogo.moveTo({
      block: "center",
      inline: "center",
    });
  }

  /**
   * a method to Verify the Sub PageHeader In P Tag all match
   */
  async bc_VerifySubPageHeaderToMatchAllInPTag(Title) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblDescriptionToMatchAllInPTag(Title),
      "Element not exist",
    );
    allureReporter.step("Verify the header as : " + Title, () => {
      console.log("Verify the header as : " + Title);
    });
  }

  /**
   * a method to Verify the Sub PageHeader In P Tag
   */
  async bc_VerifySubPageHeaderInPTag(Title) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblLatestDescription(Title),
      "Element not exist",
    );
    allureReporter.step("Verify the header as : " + Title, () => {
      console.log("Verify the header as : " + Title);
    });
  }

  /**
   * a method to Verify the Sub PageHeader In H1 Tag
   */
  async bc_VerifySubPageHeaderInH1(Title) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblH1WithNormalizeSpace(Title),
      "Element not exist",
    );
    allureReporter.step("Verify the H1 header as : " + Title, () => {
      console.log("Verify the H1 header as : " + Title);
    });
  }
  /**
   * a method to Click on the Footer Option
   */
  async bc_ClickOnFooterOption(header, tabName) {
    await PG_Home.lnk_FooterOption(header, tabName).click();
    allureReporter.step(
      "Click on the options as : " +
        tabName +
        " , and sub header as : " +
        header,
      () => {
        console.log(
          "Click on the options as : " +
            tabName +
            " , and sub header as : " +
            header,
        );
      },
    );
  }

  /**
   * a method to Verify the footer email Sign Up for Our Newsletter
   */
  async bc_VerifySignUpForOurNewsletter() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.tf_EmailForOurNewsletter,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Footer email for our news letter is present.",
      () => {
        console.log("Verify the Footer email for our news letter is present.");
      },
    );
    LIB_Common.bc_VerifyTheButton("SUBSCRIBE", 1);
  }

  /**
   * a method to Type email into Sign Up for Our Newsletter Field
   */
  async bc_TypeEmailIntoSignUpForOurNewsletter(email) {
    await PG_Home.tf_EmailForOurNewsletter.clearValue();
    await PG_Home.tf_EmailForOurNewsletter.addValue(email);
    allureReporter.step("Type Email as " + email, () => {
      console.log("Type Email as " + email);
    });
  }

  /**
   * a method to Verify the Error message under email Field
   */
  async bc_VerifyErrorMessageUnderEmail(message) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblErrorMessageUnderEmail(message),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the error message under the email as : " + message,
      () => {
        console.log("Verify the error message under the email as : " + message);
      },
    );
  }

  /**
   * a method to Verify the Thank you message under email Field
   */
  async bc_VerifyThankYouMessageUnderEmail(message) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_lblThankYouSigningUp(message),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Thank you message under the email as : " + message,
      () => {
        console.log(
          "Verify the Thank you message under the email as : " + message,
        );
      },
    );
  }

  /**
   * a method to Verify the Social Media icons
   */
  async bc_VerifySocialMediaIconsAndURL() {
    // Facebook Icon and URL
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_SocialMedia(1),
      "Element not exist",
    );
    let appURL = await PG_Home.lnk_SocialMedia(1).getAttribute("href");
    allureReporter.step(
      "Verify the Facebook icon and app url as : " + appURL,
      () => {
        console.log("Verify the Facebook icon and app url as : " + appURL);
      },
    );
    // Instagram Icon and URL
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_SocialMedia(2),
      "Element not exist",
    );
    appURL = await PG_Home.lnk_SocialMedia(2).getAttribute("href");
    allureReporter.step(
      "Verify the Instagram icon and app url as : " + appURL,
      () => {
        console.log("Verify the Instagram icon and app url as : " + appURL);
      },
    );
    // Twitter Icon and URL
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_SocialMedia(3),
      "Element not exist",
    );
    appURL = await PG_Home.lnk_SocialMedia(3).getAttribute("href");
    allureReporter.step(
      "Verify the Twitter icon and app url as : " + appURL,
      () => {
        console.log("Verify the Twitter icon and app url as : " + appURL);
      },
    );
    // LinkedIn Icon and URL
    await assertionHandler.assertElementDisplayed(
      PG_Home.lnk_SocialMedia(4),
      "Element not exist",
    );
    appURL = await PG_Home.lnk_SocialMedia(4).getAttribute("href");
    allureReporter.step(
      "Verify the LinkedIn icon and app url as : " + appURL,
      () => {
        console.log("Verify the LinkedIn icon and app url as : " + appURL);
      },
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

    allureReporter.step(
      "Click on Facebook in home page. Clicked URL : " + appUrl,
      () => {
        console.log("Click on Facebook in home page. Clicked URL : " + appUrl);
      },
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
    await element.scrollIntoView({ block: "center", inline: "center" });
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
    allureReporter.step(
      "Click on Linkedin in home page. Clicked URL : " + appUrl,
      () => {
        console.log("Click on Linkedin in home page. Clicked URL : " + appUrl);
      },
    );
  }

  /**
   * a method to Verify on Linkedin popup and close it
   *
   */
  async bc_VerifyTheLinkedinPopAndCloseIt() {
    await assertionHandler.assertElementDisplayed(
      PG_SocialMedia.ele_LinkedinTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Linkedin title in Linkedin page popup.",
      () => {
        console.log("Verify the Linkedin title in Linkedin page popup.");
      },
    );
    await PG_SocialMedia.ico_LinkedinClosePoopUp.click();
    allureReporter.step("Click on Linkedin close icon on popup.", () => {
      console.log("Click on Linkedin close icon on popup.");
    });
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
    await element.scrollIntoView({ block: "center", inline: "center" });
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
    allureReporter.step(
      "Click on Instagram in home page. Click URL : " + appUrl,
      () => {
        console.log("Click on Instagram in home page. Click URL : " + appUrl);
      },
    );
  }

  /**
   * a method to verify on Instagram popup and close it
   *
   */
  async bc_VerifyTheInstagramPopAndCloseIt() {
    await assertionHandler.assertElementDisplayed(
      PG_SocialMedia.ele_InstagramTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Instagram title in Instagram page popup.",
      () => {
        console.log("Verify the Instagram title in Instagram page popup.");
      },
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
    await element.scrollIntoView({ block: "center", inline: "center" });
    let appUrl = await element.getAttribute("href");
    await element.click();

    allureReporter.step(
      "Click on Twitter in home page. Clicked URL : " + appUrl,
      () => {
        console.log("Click on Twitter in home page. Clicked URL : " + appUrl);
      },
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
   * a method to verify on Twitter popup and close it
   *
   */
  async bc_VerifyTheTwitterPopAndCloseIt() {
    await assertionHandler.assertElementDisplayed(
      PG_SocialMedia.ele_TwitterTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Twitter title in Twitter page popup.",
      () => {
        console.log("Verify the Twitter title in Twitter page popup.");
      },
    );
    await PG_SocialMedia.ico_TwitterClosePoopUp.click();
    allureReporter.step("Click on Twitter close icon on popup.", () => {
      console.log("Click on Twitter close icon on popup.");
    });
  }

  /**
   * a method to Verify on facebook popup and close it
   *
   */
  async bc_VerifyTheFacebookPopAndCloseIt() {
    await assertionHandler.assertElementDisplayed(
      PG_SocialMedia.ele_FacebookTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Facebook title in facebook page popup.",
      () => {
        console.log("Verify the Facebook title in facebook page popup.");
      },
    );
    await PG_SocialMedia.ico_FacebookClosePoopUp.click();
    allureReporter.step("Click on Facebook close icon on popup.", () => {
      console.log("Click on Facebook close icon on popup.");
    });
  }
}
export default new Home();
