import LIB_Common from "../LIB_Common.js";
import PG_OurServices from "../../pages/SwivelTech/PG_OurServices.js";
import PG_Services from "../../pages/SwivelTech/PG_Services.js";

class OurServices {
  /**
   * a method to Verify the "Our Software Development Services"
   */
  async bc_VerifyOurSoftwareDevelopmentServicesTile(SubTitle, Description) {
    await LIB_Common.bc_VerifyH5Header(SubTitle);
    await expect(
      PG_OurServices.ele_OurSoftwareDevelopmentServicesDescription(
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
    let linkedInURL =
      await PG_OurServices.lnk_OurSoftwareDevelopmentServicesLearnMore(
        SubTitle,
      ).getAttribute("href");
    await expect(
      PG_OurServices.lnk_OurSoftwareDevelopmentServicesLearnMore(SubTitle),
    ).toBePresent();
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
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
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
    await expect(PG_Services.icn_Image(Image)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Image Icon as : " + Image,
    );
    await expect(PG_OurServices.lbl_H5Title(SubTitle)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the H5 Header as : " + SubTitle,
    );
    await expect(
      PG_OurServices.lbl_DescriptionOfEntrustYourCorporateSoftwareDevelopmentNeedsToUs(
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
   * a method to Verify the "Exceeding Client Expectations, Every Time."
   */
  async bc_VerifyExceedingClientExpectationsEveryTime(
    Image,
    Name,
    Job,
    Description,
  ) {
    await expect(PG_Services.icn_Image(Image)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Image Icon as : " + Image,
    );
    await LIB_Common.bc_VerifyH6Header(Name);
    await expect(PG_OurServices.lbl_PersonNameWithJob(Name, Job)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Client name as : " +
        Name +
        " and Job as : " +
        Job +
        " , it is present.",
    );

    await expect(
      PG_OurServices.lbl_PersonNameWithJobAndDescription(
        Name,
        Job,
        Description,
      ),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Client name as : " +
        Name +
        " and Job as : " +
        Job +
        " , and Description as : " +
        Description +
        " , it is present.",
    );
  }

  /**
   * a method to Verify Successful Client project tile
   */
  async bc_VerifySuccessfulClientProjectTile(Title, Description) {
    await expect(
      PG_OurServices.ele_SuccessfulProjectTile(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Successful Client Project Title as : " +
        Title +
        " and Description as : " +
        Description,
    );
    let linkedInURL = await PG_OurServices.lnk_SuccessfulProjectTileReadMore(
      Title,
    ).getAttribute("href");
    await expect(
      PG_OurServices.lnk_SuccessfulProjectTileReadMore(Title),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Successful Client Project Title as : " +
        Title +
        " and Read More link. and URL as : " +
        linkedInURL,
    );
  }
}
export default new OurServices();
