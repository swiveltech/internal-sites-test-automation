import PG_Careers from "../../pages/SwivelGroup/PG_Careers.js";
import LIB_Common from "../LIB_Common.js";
class Careers {
  /**
   * a method to Verify the top Description
   */
  async bc_VerifyTopDescription(Title, Description) {
    await expect(
      PG_Careers.lbl_TopHeaderWithDescription(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Top Description in Careers page as : " + Description,
    );
  }

  /**
   * a method to Verify the Pegging tile
   */
  async bc_VerifyPeggingTile(Title, Description) {
    await expect(PG_Careers.img_Pegging).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Pegging Icon is present.",
    );
    await expect(PG_Careers.lbl_OurBenefitsSubtitleTiles(Title)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Pegging Title as " + Title,
    );
    await expect(
      PG_Careers.lbl_OurBenefitsDescriptionTiles(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Pegging Title as " +
        Title +
        " and description as " +
        Description,
    );
  }

  /**
   * a method to Verify the Flexible Work hours tile
   */
  async bc_VerifyFlexibleWorkHoursTile(Title, Description) {
    await expect(PG_Careers.img_FlexHours).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Flexible Work hours Icon is present.",
    );
    await expect(PG_Careers.lbl_OurBenefitsSubtitleTiles(Title)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Flexible Work hours Title as " + Title,
    );
    await expect(
      PG_Careers.lbl_OurBenefitsDescriptionTiles(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Flexible Work hours Title as " +
        Title +
        " and description as " +
        Description,
    );
  }

  /**
   * a method to Verify the Health Insurance tile
   */
  async bc_VerifyHealthInsuranceTile(Title, Description) {
    await expect(PG_Careers.img_HealthInsurance).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Health Insurance Icon is present.",
    );
    await expect(PG_Careers.lbl_OurBenefitsSubtitleTiles(Title)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Health Insurance Title as " + Title,
    );
    await expect(
      PG_Careers.lbl_OurBenefitsDescriptionTiles(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Pegging Health Insurance as " +
        Title +
        " and description as " +
        Description,
    );
  }

  /**
   * a method to Verify the Leave Benefits tile
   */
  async bc_VerifyLeaveBenefitsTile(Title, Description) {
    await expect(PG_Careers.img_LeaveBenefits).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leave Benefits Icon is present.",
    );
    await expect(PG_Careers.lbl_OurBenefitsSubtitleTiles(Title)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leave Benefits Title as " + Title,
    );
    await expect(
      PG_Careers.lbl_OurBenefitsDescriptionTiles(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leave Benefits Title as " +
        Title +
        " and description as " +
        Description,
    );
  }

  /**
   * a method to Verify the Learning And Development tile
   */
  async bc_VerifyLearningAndDevelopmentTile(Title, Description) {
    await expect(PG_Careers.img_LearningAndDevelopment).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Learning And Development Icon is present.",
    );
    await expect(PG_Careers.lbl_OurBenefitsSubtitleTiles(Title)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Learning And Development Title as " + Title,
    );
    await expect(
      PG_Careers.lbl_OurBenefitsDescriptionTiles(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Learning And Development Title as " +
        Title +
        " and description as " +
        Description,
    );
  }

  /**
   * a method to Verify the Empowering Individuals tile
   */
  async bc_VerifyEmpoweringIndividualsTile(Title, Description) {
    await expect(PG_Careers.img_EmpoweringIndividuals).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Empowering Individuals Icon is present.",
    );
    await expect(PG_Careers.lbl_OurBenefitsSubtitleTiles(Title)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Empowering Individuals Title as " + Title,
    );
    await expect(
      PG_Careers.lbl_OurBenefitsDescriptionTiles(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Empowering Individuals Title as " +
        Title +
        " and description as " +
        Description,
    );
  }

  /**
   * a method to Verify the top Description
   */
  async bc_VerifyShowMoreLink() {
    const isPresent = await PG_Careers.lnk_ShowMore.isExisting();

    if (isPresent) {
      console.log("Element is present in the DOM.");
      await expect(PG_Careers.lnk_ShowMore).toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        "Verify the Show more link in Careers page",
      );
    } else {
      let element = await PG_Careers.lnk_ShowMore;
      await expect(element).not.toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        "Show more link Element is NOT present in the DOM.",
      );
    }
  }

  /**
   * a method to Search for job
   */
  async bc_SearchForJob(jobTitle) {
    await PG_Careers.tf_SearchForJob.clearValue();
    await PG_Careers.tf_SearchForJob.addValue(jobTitle);
    await LIB_Common.bc_LogAllureReportAndLogs("Type job as : " + jobTitle);
  }

  /**
   * a method to Verify there is search record found
   */
  async bc_VerifyTheSearchRecordAvailable() {
    await expect(PG_Careers.lbl_SearchRecord).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify There is search record available",
    );
  }

  /**
   * a method to Verify there is search record not found
   */
  async bc_VerifyTheSearchRecordIsNotAvailable() {
    let element = await PG_Careers.lbl_SearchRecord;
    await expect(element).not.toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify There is no search record available",
    );
  }

  /**
   * a method to Click on the first record
   */
  async bc_ClickOnTheFirstRecord() {
    let searchKey = await PG_Careers.lnk_FirstRecordToClick.getText();
    let url = await PG_Careers.lnk_FirstRecordToClick.getAttribute("href");
    await PG_Careers.lnk_FirstRecordToClick.click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on the First Record, Title as : " +
        searchKey +
        " , and URL as : " +
        url,
    );
    await browser.pause(5000);
    await LIB_Common.bc_TakeScreenShot("Rooster Page Swivel Group");
    await browser.back();
    await browser.pause(5000);
    await LIB_Common.bc_TakeScreenShot(
      "Again Navigate to Swivel Group Careers page",
    );
  }
}
export default new Careers();
