import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import PG_Home from "../../pages/SwivelFinance/PG_Home.js";
import PG_AboutUs from "../../pages/SwivelFinance/PG_AboutUs.js";
import PG_Common from "../../pages/PG_Common.js";
import LIB_Common from "../LIB_Common.js";

class AboutUs {
  /**
   * a method to Verify the Labels with the counts
   */
  async bc_VerifyLabelWithCount(Label, Count) {
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_lblCountWithLabel(Count, Label),
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
}
export default new AboutUs();
