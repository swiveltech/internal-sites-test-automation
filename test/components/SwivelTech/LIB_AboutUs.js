import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_Common from "../../pages/PG_Common.js";
import PG_AboutUs from "../../pages/SwivelTech/PG_AboutUs.js";
import LIB_Common from "../LIB_Common.js";
class AboutUs {
  /**
   * a method to Verify the How We Grew Over the Years
   */
  async bc_VerifyHowWeGrewOverTheYears(year, message) {
    await assertionHandler.assertElementDisplayed(
      PG_Common.lbl_H5Header(year),
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_HowWeGrewOverTheYears(year, message),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Year as : " +
        year +
        " below that grew sub title as : " +
        message,
    );
  }

  /**
   * a method to Verify the Our People is Our Business
   */
  async bc_VerifyOurPeopleIsOurBusiness(picture, title, description) {
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.icn_OurBusiness(picture),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Title as : " + title + " icon is present.",
    );
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.lbl_OurBusinessSubTitle(picture, title),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Title as : " +
        title +
        " icon is present. And Title is present below that.",
    );
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.lbl_OurBusinessSubTitleAndDescription(
        picture,
        title,
        description,
      ),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Title as : " +
        title +
        " icon is present. And Title is present below that. and Description as : " +
        description,
    );
  }

  /**
   * a method to Verify the Meet the Leaders
   */
  async bc_VerifyMeetTheLeadersTile(picture, name, job, description) {
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.icn_OurBusiness(picture),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Leaders name as : " + name + " , picture is present.",
    );
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_LeaderName(picture, name),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Leaders name as : " +
        name +
        " , picture is present. And Leaders name is present below that.",
    );
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_LeaderNameWithJob(picture, name, job),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Leaders name as : " + name + " , Designation as : " + job,
    );
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_LeaderLinkedIn(picture),
      "Element not exist",
    );
    let url = await PG_AboutUs.ele_LeaderLinkedIn(picture).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Leaders name as : " + name + " , Linkedin profile link as : " + url,
    );
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_LeaderDescription(picture, description),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Leaders name as : " +
        name +
        " , picture is present. And Leaders name is present below that. and Description as : " +
        description,
    );
  }

  /**
   * a method to Verify the Our Team Culture
   */
  async bc_VerifyOurTeamCultureTile(subTitle, description) {
    await LIB_Common.bc_VerifyH2Header(subTitle);
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_OurTeamCultureDescription(subTitle, description),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Sub Title as : " +
        subTitle +
        " , description as : " +
        description +
        " is present.",
    );
  }
}
export default new AboutUs();
