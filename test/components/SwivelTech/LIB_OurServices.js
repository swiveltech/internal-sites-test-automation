import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import LIB_Common from "../LIB_Common.js";
import PG_OurServices from "../../pages/SwivelTech/PG_OurServices.js";
import PG_Services from "../../pages/SwivelTech/PG_Services.js";

class OurServices {
  /**
   * a method to Verify the "Our Software Development Services"
   */
  async bc_VerifyOurSoftwareDevelopmentServicesTile(SubTitle, Description) {
    await LIB_Common.bc_VerifyH5Header(SubTitle);
    await assertionHandler.assertElementDisplayed(
      PG_OurServices.ele_OurSoftwareDevelopmentServicesDescription(
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
    let linkedInURL =
      await PG_OurServices.lnk_OurSoftwareDevelopmentServicesLearnMore(
        SubTitle,
      ).getAttribute("href");
    await assertionHandler.assertElementDisplayed(
      PG_OurServices.lnk_OurSoftwareDevelopmentServicesLearnMore(SubTitle),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Sub Title as : " +
        SubTitle +
        " , and Learn More link is present. and URL : " +
        linkedInURL,
    );
  }

  /**
   * a method to Click On Our Software Development Services Tile Learn More Link
   */
  async bc_ClickOnOurSoftwareDevelopmentServicesTileLearnMoreLink(SubTitle) {
    let elementToScroll =
      await PG_OurServices.lnk_OurSoftwareDevelopmentServicesLearnMore(
        SubTitle,
      );
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    await PG_OurServices.lnk_OurSoftwareDevelopmentServicesLearnMore(
      SubTitle,
    ).click();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Learn More link under the Sub Title as : " + SubTitle,
    );
  }

  /**
   * a method to Verify the "Entrust Your Corporate Software Development Needs to Us"
   */
  async bc_VerifyEntrustYourCorporateSoftwareDevelopmentNeedsToUs(
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
    await assertionHandler.assertElementDisplayed(
      PG_OurServices.ele_lblH5Title(SubTitle),
      "Element not exist",
    );
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the H5 Header as : " + SubTitle,
    );

    await assertionHandler.assertElementDisplayed(
      PG_OurServices.ele_lblDescriptionOfEntrustYourCorporateSoftwareDevelopmentNeedsToUs(
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
export default new OurServices();
