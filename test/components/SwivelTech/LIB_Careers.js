import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_Careers from "../../pages/SwivelTech/PG_Careers.js";
import PG_Common from "../../pages/PG_Common.js";
import LIB_Common from "../LIB_Common.js";

class Careers {
  /**
   * a method to Verify the Our Benefits Tile
   */
  async bc_VerifyOurBenefitsTile(SubTitle, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblH3Header(SubTitle),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the H3 Sub Header as : " + SubTitle,
    );
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_OurBenefitsDescription(SubTitle, Description),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Description as : " +
        Description +
        " , under the sub header as : " +
        SubTitle,
    );
  }

  /**
   * a method to Search for job
   */
  async bc_SearchForJob(jobTitle) {
    await PG_Careers.tf_SearchForJobs.clearValue();
    await PG_Careers.tf_SearchForJobs.addValue(jobTitle);
    await LIB_Common.bc_LogAllureReportAndLogs("Type job as " + jobTitle);
  }

  /**
   * a method to Verify there is search record found
   */
  async bc_VerifyTheSearchRecordAvailable() {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblSearchRecord,
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify There is search record available",
    );
  }
  /**
   * a method to Verify there is search record not found
   */
  async bc_VerifyTheSearchRecordIsNotAvailable() {
    let element = await PG_Careers.ele_lblSearchRecord.isDisplayed();
    await assertionHandler.assertFalse(element);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify There is no search record available",
    );
  }
}
export default new Careers();
