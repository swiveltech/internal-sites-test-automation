import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Careers from "../../pages/SwivelGroup/PG_Careers.js";
class Careers {
  /**
   * a method to Verify the top Description
   */
  async bc_VerifyTopDescription(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblTopHeaderWithDescription(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Top Description in Careers page as : " + Description,
      () => {
        console.log(
          "Verify the Top Description in Careers page as : " + Description,
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
export default new Careers();
