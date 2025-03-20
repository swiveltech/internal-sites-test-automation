import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_Careers from "../../pages/SwivelTech/PG_Careers.js";
import LIB_Common from "../LIB_Common.js";

class Careers {
  /**
   * a method to Verify the Our Benefits Tile
   */
  async bc_VerifyOurBenefitsTile(SubTitle, Description) {
    await LIB_Common.bc_VerifyH3Header(SubTitle);
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
      PG_Careers.lbl_FirstRecordInTable,
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
    let element = await PG_Careers.lbl_FirstRecordInTable.isDisplayed();
    await assertionHandler.assertFalse(element);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify There is no search record available",
    );
  }

  /**
   * a method to Click on the first record
   */
  async bc_ClickOnTheFirstRecord() {
    let searchKey = await PG_Careers.lnk_FirstRecordInTable.getText();
    let url = await PG_Careers.lnk_FirstRecordInTable.getAttribute("href");
    await PG_Careers.lnk_FirstRecordInTable.click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on the First Record, Title as : " +
        searchKey +
        " , and URL as : " +
        url,
    );
    await browser.pause(5000);
    await LIB_Common.bc_TakeScreenShot("Rooster Page In Swivel Tech");
    await browser.back();
    await browser.pause(5000);
    await LIB_Common.bc_TakeScreenShot(
      "Again Navigate to Swivel Tech Careers page",
    );
  }
}
export default new Careers();
