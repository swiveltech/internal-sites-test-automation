import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Home from "../../pages/SwivelTech/PG_Home.js";
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
   * a method to Verify the Top panel
   */
  async bc_VerifyHomeScreenTopPanel(tabNames) {
    let tabNamesToVerify;

    if (tabNames.includes(";")) {
      tabNamesToVerify = tabNames.split(";");
    } else {
      tabNamesToVerify = tabNames;
    }

    for (let i = 0; i < tabNamesToVerify.length; i++) {
      await assertionHandler.assertElementDisplayed(
        PG_Home.ele_HeaderTab(tabNamesToVerify[i]),
        "Element not exist",
      );
      allureReporter.step(
        "Verify the Swivel Tech Tab name " +
          tabNamesToVerify[i] +
          " is present. ",
        () => {
          console.log(
            "Verify the Swivel Tech Tab name " +
              tabNamesToVerify[i] +
              " is present. ",
          );
        },
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
}
export default new Home();
