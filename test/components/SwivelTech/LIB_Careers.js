import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Careers from "../../pages/SwivelTech/PG_Careers.js";
import PG_Common from "../../pages/PG_Common.js";

class Careers {
  /**
   * a method to Verify the Our Benefits Tile
   */
  async bc_VerifyOurBenefitsTile(SubTitle, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblH3Header(SubTitle),
      "Element not exist",
    );
    allureReporter.step("Verify the H3 Sub Header as : " + SubTitle, () => {
      console.log("Verify the H3 Sub Header as : " + SubTitle);
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_OurBenefitsDescription(SubTitle, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Description as : " +
        Description +
        " , under the sub header as : " +
        SubTitle,
      () => {
        console.log(
          "Verify the Description as : " +
            Description +
            " , under the sub header as : " +
            SubTitle,
        );
      },
    );
  }

  /**
   * a method to Search for job
   */
  async bc_SearchForJob(jobTitle) {
    await PG_Careers.tf_SearchForJobs.clearValue();
    await PG_Careers.tf_SearchForJobs.addValue(jobTitle);
    allureReporter.step("Type job as " + jobTitle, () => {
      console.log("Type job as " + jobTitle);
    });
  }

  /**
   * a method to Verify there is search record found
   */
  async bc_VerifyTheSearchRecordAvailable() {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblSearchRecord,
      "Element not exist",
    );
    allureReporter.step("Verify There is search record available", () => {
      console.log("Verify There is search record available");
    });
  }
  /**
   * a method to Verify there is search record not found
   */
  async bc_VerifyTheSearchRecordIsNotAvailable() {
    let element = await PG_Careers.ele_lblSearchRecord.isDisplayed();
    await assertionHandler.assertFalse(element);
    allureReporter.step("Verify There is no search record available", () => {
      console.log("Verify There is no search record available");
    });
  }
}
export default new Careers();
