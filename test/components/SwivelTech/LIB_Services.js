import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import LIB_Common from "../LIB_Common.js";
import PG_Services from "../../pages/SwivelTech/PG_Services.js";

class Services {
  /**
   * a method to Verify the "Why choose Swivel Tech for AI Consulting Services"
   */
  async bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
    Image,
    SubTitle,
    Description,
  ) {
    await assertionHandler.assertElementDisplayed(
      PG_Services.icn_Image(Image),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Image Icon as : " + Image,
    );
    await LIB_Common.bc_VerifyH2Header(SubTitle);
    await assertionHandler.assertElementDisplayed(
      PG_Services.ele_WhyChooseSwivelTechForAIConsultingServicesDescription(
        SubTitle,
        Description,
      ),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Sub Title as : " +
        SubTitle +
        " , and Description as : " +
        Description,
    );
  }
}
export default new Services();
