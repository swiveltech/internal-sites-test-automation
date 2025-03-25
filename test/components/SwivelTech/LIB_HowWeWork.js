import PG_HowWeWork from "../../pages/SwivelTech/PG_HowWeWork.js";
import LIB_Common from "../LIB_Common.js";
class HowWeWork {
  /**
   * a method to Verify the Step Tile
   */
  async bc_VerifyStepTile(Count, Header, Description) {
    await expect(PG_HowWeWork.lbl_StepHeader(Count, Header)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Step Number as : " + Count + " , and Header as : " + Header,
    );

    await expect(
      PG_HowWeWork.lbl_StepHeaderWithDescription(Count, Header, Description),
    ).toBePresent();
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
    let elementToScroll = await PG_HowWeWork.lbl_FAQsQuestionsTitle(Question);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    await browser.pause(3000);
    await expect(PG_HowWeWork.lbl_FAQsQuestionsTitle(Question)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the FAQs question as : " + Question,
    );

    await expect(
      PG_HowWeWork.lbl_FAQsQuestionsTitleWithArrow(Question),
    ).toBePresent();
    await PG_HowWeWork.lbl_FAQsQuestionsTitleWithArrow(Question).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Arrow Down icon is present against FAQs question as : " +
        Question +
        " , It is clicked and now it is expanded.",
    );
    await expect(
      PG_HowWeWork.lbl_FAQsQuestionsTitleWithAnswers(Question, Answer),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the FAQs question as : " +
        Question +
        " , and Answer as : " +
        Answer,
    );
    await PG_HowWeWork.lbl_FAQsQuestionsTitleWithArrow(Question).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Arrow Up icon and now it is collapsed.",
    );
  }

  /**
   * a method to Verify the FAQs questions and icons
   */
  async bc_VerifyFAQsQuestionsAndIcon(Question) {
    await expect(PG_HowWeWork.lbl_FAQsQuestionsTitle(Question)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the FAQs question as : " + Question,
    );

    await expect(
      PG_HowWeWork.lbl_FAQsQuestionsTitleWithArrow(Question),
    ).toBePresent();
    await PG_HowWeWork.lbl_FAQsQuestionsTitleWithArrow(Question).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Arrow Down icon is present against FAQs question as : " +
        Question +
        " , It is clicked and now it is expanded.",
    );
  }

  /**
   * a method to Verify the FAQs answers
   */
  async bc_VerifyFAQsAnswers(Question, Answer) {
    await expect(
      PG_HowWeWork.lbl_FAQsQuestionsTitleGetTheAnswers(Question),
    ).toBePresent();
    await expect(
      PG_HowWeWork.lbl_FAQsQuestionsTitleGetTheAnswers(Question),
    ).toHaveTextContaining(Answer, { timeout: 5000 });
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the FAQs question as : " +
        Question +
        " , and Answer as : " +
        Answer,
    );
  }

  /**
   * a method to Verify the FAQs answers
   */
  async bc_ExpandedFAQs(Question) {
    await PG_HowWeWork.lbl_FAQsQuestionsTitleGetTheAnswersInSameLevel(
      Question,
    ).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Arrow Down icon is present against FAQs question as : " +
        Question +
        " , It is clicked and now it is expanded.",
    );
  }

  /**
   * a method to Collapse The FAQs Answers row
   */
  async bc_CollapseTheFAQsAnswers(Question) {
    await PG_HowWeWork.lbl_FAQsQuestionsTitleWithArrow(Question).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Arrow Up icon and now it is collapsed.",
    );
  }

  /**
   * a method to Verify the Benefits Of Choosing This Option
   */
  async bc_VerifyBenefitsOfChoosingThisOption(Header, Description) {
    await LIB_Common.bc_VerifyH5Header(Header);
    await expect(
      PG_HowWeWork.lbl_BenefitsDescription(Header, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Benefits Of Choosing This Option Header as : " +
        Header +
        " , and Description as : " +
        Description,
    );
  }
}
export default new HowWeWork();
