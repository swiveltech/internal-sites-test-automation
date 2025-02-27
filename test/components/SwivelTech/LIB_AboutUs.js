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
      PG_Common.ele_lblH5Header(year),
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
}
export default new AboutUs();
