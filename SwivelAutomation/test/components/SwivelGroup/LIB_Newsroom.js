import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Newsroom from "../../pages/SwivelGroup/PG_Newsroom.js";
class Newsroom {
  /**
   * a method to Verify the top Description
   */
  async bc_VerifyTopDescription(Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.ele_lblTopDescription(Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Top Description in Newsroom page as : " + Description,
      () => {
        console.log(
          "Verify the Top Description in Newsroom page as : " + Description,
        );
      },
    );
  }

  /**
   * a method to Verify the Social Club Events
   */
  async bc_VerifySocialClubEvents() {
    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.ele_lblSocialClubEvents,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Social Club Events in Newsroom page",
      () => {
        console.log("Verify the Social Club Events in Newsroom page");
      },
    );
  }

  /**
   * a method to Verify the Articles
   */
  async bc_VerifyArticles(articleTitle, articleDescription) {
    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.ele_lblH3Header(articleTitle),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Article Title in Newsroom page as : " + articleTitle,
      () => {
        console.log(
          "Verify the Article Title in Newsroom page as : " + articleTitle,
        );
      },
    );

    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.ele_lblArticleDescription(articleTitle, articleDescription),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Article Description in Newsroom page as : " +
        articleDescription,
      () => {
        console.log(
          "Verify the Article Description in Newsroom page as : " +
            articleDescription,
        );
      },
    );
  }

  /**
   * a method to Verify the Want To Work With Us
   */
  async bc_VerifyWantToWorkWithUs(header, description) {
    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.ele_lblH4Header(header),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Want To Work With Us in Newsroom page",
      () => {
        console.log("Verify the Want To Work With Us in Newsroom page");
      },
    );

    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.ele_lblH4HeaderWithDescription(header, description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Want To Work With Us in Newsroom page with description as : " +
        description,
      () => {
        console.log(
          "VVerify the Want To Work With Us in Newsroom page with description as : " +
            description,
        );
      },
    );
  }
}
export default new Newsroom();
