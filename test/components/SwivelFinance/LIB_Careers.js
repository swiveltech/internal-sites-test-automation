import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_Careers from "../../pages/SwivelFinance/PG_Careers.js";
import LIB_Common from "../LIB_Common.js";

class Careers {
  /**
   * a method to Verify the Our Benefits
   */
  async bc_VerifyOurBenefits(Title, Description) {
    await LIB_Common.bc_VerifyAnyText(Title, 1);
    await assertionHandler.assertElementDisplayed(
      PG_Careers.lbl_OurBenefitsWithDescription(Title, Description),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Sub Title as : " +
        Title +
        " and Description as : " +
        Description +
        "+ is present.",
    );
  }

  /**
   * a method to Search for job
   */
  async bc_SearchForJob(jobTitle) {
    await PG_Careers.tf_SearchBox.clearValue();
    await PG_Careers.tf_SearchBox.addValue(jobTitle);
    await LIB_Common.bc_LogAllureReportAndLogs("Type job as : " + jobTitle);
  }

  /**
   * a method to Verify there is search record not found
   */
  async bc_VerifyTheSearchRecordIsNotAvailable() {
    let element = await PG_Careers.lbl_GetFirstRecord.isDisplayed();
    await assertionHandler.assertFalse(element);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify There is no search record available",
    );
  }

  /**
   * a method to Verify there is search record found
   */
  async bc_VerifyTheSearchRecordAvailable() {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.lbl_GetFirstRecord,
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify There is search record available",
    );
  }

  /**
   * a method to Click on the first record
   */
  async bc_ClickOnTheFirstRecord() {
    let searchKey = await PG_Careers.lbl_GetFirstRecord.getText();
    let url = await PG_Careers.lbl_GetFirstRecord.getAttribute("href");
    await PG_Careers.lbl_GetFirstRecord.click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on the First Record, Title as : " +
        searchKey +
        " , and URL as : " +
        url,
    );
    await browser.pause(5000);
    await LIB_Common.bc_TakeScreenShot("Rooster Page Swivel Finance");
    await browser.back();
    await browser.pause(5000);
    await LIB_Common.bc_TakeScreenShot(
      "Again Navigate to Swivel Group Finance page",
    );
  }
}
export default new Careers();
