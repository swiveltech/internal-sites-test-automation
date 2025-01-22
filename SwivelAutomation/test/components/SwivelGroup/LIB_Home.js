import PG_Home from "../../pages/SwivelGroup/PG_Home.js";
import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";

class Home {
  /**
   * a method to Verify the Swivel Group logo
   */
  async bc_VerifyHomePageLogo() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_SwivelGroupLogo,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Group logo on top of the Home page",
      () => {
        console.log("Verify the Swivel Group logo on top of the Home page");
      },
    );
  }

  /**
   * a method to navigate to tab from navigation
   */
  async bc_NavigateToTabFromTopNavigation(tabName) {
    await PG_Home.ele_HeaderTab(tabName).click();
    allureReporter.step(
      "Navigate to the " + tabName + " tab from the top navigation ",
      () => {
        console.log(
          "Navigate to the " + tabName + " tab from the top navigation ",
        );
      },
    );
  }

  /**
   * a method to Verify The Experts In Title
   */
  async bc_VerifyTheExpertsInTitle(textValue, index) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_TitleInExpertsIn(textValue, index),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Experts In title is " +
        textValue +
        " and title index is " +
        index +
        " it is present in Home page of the Swivel Group Site.",
      () => {
        console.log(
          "Verify the Experts In title is " +
            textValue +
            " and title index is " +
            index +
            " it is present in Home page of the Swivel Group Site.",
        );
      },
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
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_TitleInCenter(
        textValueForTitle,
        textValueForDescription,
        index,
      ),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Experts In title is " +
        textValueForTitle +
        " and Description is : " +
        textValueForDescription +
        " title index is " +
        index +
        " it is present in Home page of the Swivel Group Site.",
      () => {
        console.log(
          "Verify the Experts In title is " +
            textValueForTitle +
            " and Description is : " +
            textValueForDescription +
            " title index is " +
            index +
            " it is present in Home page of the Swivel Group Site.",
        );
      },
    );
  }

  /**
   * a method to Verify Our Brands in home page
   */
  async bc_VerifyOurBrandsInHomePage(brandTitle, brandDescription) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_OurBrands(brandTitle, brandDescription),
      "Element not exist",
    );
    allureReporter.step(
      "Verify Our Brand title is " +
        brandTitle +
        " and brand description is " +
        brandDescription +
        " it is present in Home page of the Swivel Group Site.",
      () => {
        console.log(
          "Verify Our Brand title is " +
            brandTitle +
            " and brand description is " +
            brandDescription +
            " it is present in Home page of the Swivel Group Site.",
        );
      },
    );
  }

  /**
   * a method to Verify Our Brands with links in home page
   */
  async bc_VerifyOurBrandsWithLinksInHomePage(brandTitle, brandLink) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_OurBrandsWithLink(brandTitle, brandLink),
      "Element not exist",
    );
    allureReporter.step(
      "Verify Our Brand title is " +
        brandTitle +
        " and brand link is " +
        brandLink +
        " it is present in Home page of the Swivel Group Site.",
      () => {
        console.log(
          "Verify Our Brand title is " +
            brandTitle +
            " and brand link is " +
            brandLink +
            " it is present in Home page of the Swivel Group Site.",
        );
      },
    );
  }
}
export default new Home();
