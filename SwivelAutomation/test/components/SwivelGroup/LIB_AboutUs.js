import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_AboutUs from "../../pages/SwivelGroup/PG_AboutUs.js";
class AboutUs {
  /**
   * a method to Verify the Sub Headers with description in bottom
   */
  async bc_VerifyH4SubHeaderAndDescriptionInBottom(header, description) {
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_lblH4Header(header),
      "Element not exist",
    );
    allureReporter.step("Verify the Sub Header as : " + header, () => {
      console.log("Verify the Sub Header as : " + header);
    });

    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_lblH4HeaderWithDescriptionInBottom(header, description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the sub header as " +
        header +
        " and  sub description as : " +
        description,
      () => {
        console.log(
          "Verify the sub header as " +
            header +
            " and  sub description as : " +
            description,
        );
      },
    );
  }

  /**
   * a method to Verify the Sub Headers with description
   */
  async bc_VerifyH4SubHeaderAndDescription(header, description) {
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_lblH4Header(header),
      "Element not exist",
    );
    allureReporter.step("Verify the Sub Header as : " + header, () => {
      console.log("Verify the Sub Header as : " + header);
    });

    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_lblH4HeaderWithDescription(header, description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the sub header as " +
        header +
        " and  sub description as : " +
        description,
      () => {
        console.log(
          "Verify the sub header as " +
            header +
            " and  sub description as : " +
            description,
        );
      },
    );
  }

  /**
   * a method to Verify the Sub Headers with description for our client
   */
  async bc_VerifyH4SubHeaderAndDescriptionForOurClient(header, description) {
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_lblH4Header(header),
      "Element not exist",
    );
    allureReporter.step("Verify the Sub Header as : " + header, () => {
      console.log("Verify the Sub Header as : " + header);
    });

    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_lblH4HeaderWithDescriptionForOurClient(
        header,
        description,
      ),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the sub header as " +
        header +
        " and  sub description as : " +
        description,
      () => {
        console.log(
          "Verify the sub header as " +
            header +
            " and  sub description as : " +
            description,
        );
      },
    );
  }

  /**
   * a method to Verify the Leadership
   */
  async bc_VerifyLeadership(name, designation) {
    //Verify the name part
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_lblLeadershipPersonName(name),
      "Element not exist",
    );
    allureReporter.step("Verify the Leadership full name  as : " + name, () => {
      console.log("Verify the Leadership full name  as : " + name);
    });
    //Verify the name with designation
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.ele_lblLeadershipPersonNameWithDesignation(name, designation),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Leadership full name  as : " +
        name +
        "and designation as : " +
        designation,
      () => {
        console.log(
          "Verify the Leadership full name  as : " +
            name +
            "and designation as : " +
            designation,
        );
      },
    );
    //Verify the name with designation and linked icon
    await assertionHandler.assertElementDisplayed(
      PG_AboutUs.lnk_LeadershipPersonNameWithDesignationLinkedIn(
        name,
        designation,
      ),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Leadership full name  as : " +
        name +
        " , Linked icon is present",
      () => {
        console.log(
          "Verify the Leadership full name  as : " +
            name +
            " , Linked icon is present",
        );
      },
    );
    let linkedInURL =
      await PG_AboutUs.lnk_LeadershipPersonNameWithDesignationLinkedIn(
        name,
        designation,
      ).getAttribute("href");
    allureReporter.step(
      "Verify the Leadership full name  as : " +
        name +
        " , LinkedIn URL is : " +
        linkedInURL,
      () => {
        console.log(
          "Verify the Leadership full name  as : " +
            name +
            ", LinkedIn URL is : " +
            linkedInURL,
        );
      },
    );
  }
}
export default new AboutUs();
