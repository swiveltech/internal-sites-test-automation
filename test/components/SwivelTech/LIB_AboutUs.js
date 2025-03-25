import PG_AboutUs from "../../pages/SwivelTech/PG_AboutUs.js";
import LIB_Common from "../LIB_Common.js";
class AboutUs {
  /**
   * a method to Verify the How We Grew Over the Years
   */
  async bc_VerifyHowWeGrewOverTheYears(year, message) {
    await LIB_Common.bc_VerifyH5Header(year);
    await expect(
      PG_AboutUs.ele_HowWeGrewOverTheYears(year, message),
    ).toBePresent();
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
    await expect(PG_AboutUs.icn_OurBusiness(picture)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Title as : " + title + " icon is present.",
    );
    await expect(
      PG_AboutUs.lbl_OurBusinessSubTitle(picture, title),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Title as : " +
        title +
        " icon is present. And Title is present below that.",
    );
    await expect(
      PG_AboutUs.lbl_OurBusinessSubTitleAndDescription(
        picture,
        title,
        description,
      ),
    ).toBePresent();
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
    await expect(PG_AboutUs.icn_OurBusiness(picture)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Leaders name as : " + name + " , picture is present.",
    );
    await expect(PG_AboutUs.ele_LeaderName(picture, name)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Leaders name as : " +
        name +
        " , picture is present. And Leaders name is present below that.",
    );
    await expect(
      PG_AboutUs.ele_LeaderNameWithJob(picture, name, job),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Leaders name as : " + name + " , Designation as : " + job,
    );
    await expect(PG_AboutUs.ele_LeaderLinkedIn(picture)).toBePresent();
    let url = await PG_AboutUs.ele_LeaderLinkedIn(picture).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Leaders name as : " + name + " , Linkedin profile link as : " + url,
    );
    await expect(
      PG_AboutUs.ele_LeaderDescription(picture, description),
    ).toBePresent();
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
    await expect(
      PG_AboutUs.ele_OurTeamCultureDescription(subTitle, description),
    ).toBePresent();
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
