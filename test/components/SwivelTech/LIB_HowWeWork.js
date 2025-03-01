import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_HowWeWork from "../../pages/SwivelTech/PG_HowWeWork.js";
import LIB_Common from "../LIB_Common.js";
class HowWeWork {
  /**
   * a method to Verify the Step Tile
   */
  async bc_VerifyStepTile(Count, Header, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_HowWeWork.ele_lblStepHeader(Count, Header),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Step Number as : " + Count + " , and Header as : " + Header,
    );

    await assertionHandler.assertElementDisplayed(
      PG_HowWeWork.ele_lblStepHeaderWithDescription(Count, Header, Description),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Header as : " +
        Header +
        " , and Description as : " +
        Description,
    );
  }

  /**
   * a method to Verify the FAQs
   */
  async bc_VerifyFAQs(Question, Answer) {
    await assertionHandler.assertElementDisplayed(
      PG_HowWeWork.ele_lblFAQsQuestionsTitle(Question),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the FAQs question as : " + Question,
    );

    await assertionHandler.assertElementDisplayed(
      PG_HowWeWork.ele_lblFAQsQuestionsTitleWithArrow(Question),
      "Element not exist",
    );
    await PG_HowWeWork.ele_lblFAQsQuestionsTitleWithArrow(Question).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Arrow Down icon is present against FAQs question as : " +
        Question +
        " , It is clicked and now it is expanded.",
    );
    await assertionHandler.assertElementDisplayed(
      PG_HowWeWork.ele_lblFAQsQuestionsTitleWithAnswers(Question, Answer),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the FAQs question as : " +
        Question +
        " , and Answer as : " +
        Answer,
    );
    await PG_HowWeWork.ele_lblFAQsQuestionsTitleWithArrow(Question).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Arrow Up icon and now it is collapsed.",
    );
  }
}
export default new HowWeWork();
