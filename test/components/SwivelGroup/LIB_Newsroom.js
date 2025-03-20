import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_Newsroom from "../../pages/SwivelGroup/PG_Newsroom.js";
import LIB_Common from "../LIB_Common.js";
class Newsroom {
  /**
   * a method to Verify the top Description
   */
  async bc_VerifyTopDescription(Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.lbl_TopDescription(Description),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Top Description in Newsroom page as : " + Description,
    );
  }

  /**
   * a method to Verify the Social Club Events
   */
  async bc_VerifySocialClubEvents() {
    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.lbl_SocialClubEvents,
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Social Club Events in Newsroom page",
    );
  }

  /**
   * a method to Verify the Articles
   */
  async bc_VerifyArticles(articleTitle, articleDescription) {
    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.lbl_H3Header(articleTitle),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Article Title in Newsroom page as : " + articleTitle,
    );

    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.lbl_ArticleDescription(articleTitle, articleDescription),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Article Description in Newsroom page as : " +
        articleDescription,
    );
  }

  /**
   * a method to Verify the Want To Work With Us
   */
  async bc_VerifyWantToWorkWithUs(header, description) {
    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.lbl_H4Header(header),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Want To Work With Us in Newsroom page",
    );

    await assertionHandler.assertElementDisplayed(
      PG_Newsroom.lbl_H4HeaderWithDescription(header, description),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Want To Work With Us in Newsroom page with description as : " +
        description,
    );
  }
}
export default new Newsroom();
