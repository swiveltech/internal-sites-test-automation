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
    await expect(PG_Services.icn_Image(Image)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Image Icon as : " + Image,
    );
    await LIB_Common.bc_VerifyH2Header(SubTitle);

    await expect(
      PG_Services.ele_WhyChooseSwivelTechForAIConsultingServicesDescription(
        SubTitle,
        Description,
      ),
    ).toBePresent();

    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Sub Title as : " +
        SubTitle +
        " , and Description as : " +
        Description,
    );
  }

  /**
   * a method to Verify the "Benefits of Choosing This Option"
   */
  async bc_VerifyBenefitsOfChoosingThisOption(SubTitle, Description) {
    await LIB_Common.bc_VerifyH5Header(SubTitle);
    await expect(
      PG_Services.ele_BenefitsOfChoosingThisOptionDescription(
        SubTitle,
        Description,
      ),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Sub Title as : " +
        SubTitle +
        " , and Description as : " +
        Description,
    );
  }
}
export default new Services();
