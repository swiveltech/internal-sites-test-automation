import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_Home from "../../pages/SwivelFinance/PG_Home.js";
import PG_AboutUs from "../../pages/SwivelFinance/PG_AboutUs.js";
import LIB_Common from "../LIB_Common.js";

class AboutUs {
  /**
   * a method to Verify the Labels with the counts
   */
  async bc_VerifyLabelWithCount(Label, Count) {
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.lbl_CountWithLabel(Count, Label),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Label as : " +
        Label +
        " and Count as : " +
        Count +
        "+ is present.",
    );
  }

  /**
   * a method to Verify the "Our Leadership Team" tile
   */
  async bc_VerifyOurLeadershipTeam(Image, Name, Job, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_Leadership(Image),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Image as : " + Image + " is present.",
    );

    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.lbl_LeaderName(Name),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leader's Name as : " + Name + " is present.",
    );

    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.lbl_LeaderNameWithJob(Name, Job),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leader's Name as : " +
        Name +
        " and Position as : " +
        Job +
        " is present.",
    );
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.lnk_LeaderLinkedInProfile(Name),
      "Element not exist",
    );
    let linkedInURL =
      await PG_AboutUs.lnk_LeaderLinkedInProfile(Name).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leader's Name as : " +
        Name +
        " LinkedIn Link is available and URL : " +
        linkedInURL,
    );

    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.lbl_LeaderNameWithDescription(Name, Description),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leader's Name as : " +
        Name +
        " and Description as : " +
        Description +
        " , is present.",
    );
  }

  /**
   * a method to Verify the "Our Team Culture" tile
   */
  async bc_VerifyOurTeamCulture(Image, Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_Leadership(Image),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Image as : " + Image + " is present.",
    );
    await LIB_Common.bc_VerifyH3Header(Title);
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.lbl_OurTeamCultureDescription(Title, Description),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Title as : " +
        Title +
        " ,and Description as : " +
        Description +
        " , is present.",
    );
  }
}
export default new AboutUs();
