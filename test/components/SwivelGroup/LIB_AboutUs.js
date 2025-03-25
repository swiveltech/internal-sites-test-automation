import PG_AboutUs from "../../pages/SwivelGroup/PG_AboutUs.js";
import LIB_Common from "../LIB_Common.js";
class AboutUs {
  /**
   * a method to Verify the Sub Headers with description in bottom
   */
  async bc_VerifyH4SubHeaderAndDescriptionInBottom(header, description) {
    await expect(PG_AboutUs.lbl_H4Header(header)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the H4 Sub Header as : " + header,
    );

    await expect(
      PG_AboutUs.lbl_H4HeaderWithDescriptionInBottom(header, description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the sub header as " +
        header +
        " and  sub description as : " +
        description,
    );
  }

  /**
   * a method to Verify the Sub Headers with description
   */
  async bc_VerifyH4SubHeaderAndDescription(header, description) {
    await expect(PG_AboutUs.lbl_H4Header(header)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the H4 Sub Header as : " + header,
    );

    await expect(
      PG_AboutUs.lbl_H4HeaderWithDescription(header, description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the sub header as " +
        header +
        " and  sub description as : " +
        description,
    );
  }

  /**
   * a method to Verify the Sub Headers with description for our client
   */
  async bc_VerifyH4SubHeaderAndDescriptionForOurClient(header, description) {
    await expect(PG_AboutUs.lbl_H4Header(header)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the H4 Sub Header as : " + header,
    );
    await expect(
      PG_AboutUs.lbl_H4HeaderWithDescriptionForOurClient(header, description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the sub header as " +
        header +
        " and  sub description as : " +
        description,
    );
  }

  /**
   * a method to Verify the Leadership
   */
  async bc_VerifyLeadership(name, designation) {
    //Verify the name part
    await expect(PG_AboutUs.lbl_LeadershipPersonName(name)).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leadership full name  as : " + name,
    );

    //Verify the name with designation
    await expect(
      PG_AboutUs.lbl_LeadershipPersonNameWithDesignation(name, designation),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leadership full name  as : " +
        name +
        "and designation as : " +
        designation,
    );
    //Verify the name with designation and linked icon
    await expect(
      PG_AboutUs.lnk_LeadershipPersonNameWithDesignationLinkedIn(
        name,
        designation,
      ),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leadership full name  as : " +
        name +
        " , Linked icon is present",
    );

    let linkedInURL =
      await PG_AboutUs.lnk_LeadershipPersonNameWithDesignationLinkedIn(
        name,
        designation,
      ).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Leadership full name  as : " +
        name +
        " , LinkedIn URL is : " +
        linkedInURL,
    );
  }
}
export default new AboutUs();
