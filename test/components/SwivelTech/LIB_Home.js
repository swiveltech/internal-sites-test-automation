import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Home from "../../pages/SwivelTech/PG_Home.js";
import PG_Common from "../../pages/PG_Common.js";
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
   * a method to Verify the Footer Swivel Tech logo
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
      OptionToSelect = "Nothing to Select";
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
}
export default new Home();
