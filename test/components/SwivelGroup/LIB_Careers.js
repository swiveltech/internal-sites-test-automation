import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import PG_Careers from "../../pages/SwivelGroup/PG_Careers.js";
class Careers {
  /**
   * a method to Verify the top Description
   */
  async bc_VerifyTopDescription(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblTopHeaderWithDescription(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Top Description in Careers page as : " + Description,
      () => {
        console.log(
          "Verify the Top Description in Careers page as : " + Description,
        );
      },
    );
  }

  /**
   * a method to Verify the Pegging tile
   */
  async bc_VerifyPeggingTile(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.img_Pegging,
      "Element not exist",
    );
    allureReporter.step("Verify the Pegging Icon is present.", () => {
      console.log("Verify the Pegging Icon is present.");
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsSubtitleTiles(Title),
      "Element not exist",
    );
    allureReporter.step("Verify the Pegging Title as " + Title, () => {
      console.log("Verify the Pegging Title as " + Title);
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsDescriptionTiles(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Pegging Title as " +
        Title +
        " and description as " +
        Description,
      () => {
        console.log(
          "Verify the Pegging Title as " +
            Title +
            " and description as " +
            Description,
        );
      },
    );
  }

  /**
   * a method to Verify the Flexible Work hours tile
   */
  async bc_VerifyFlexibleWorkHoursTile(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.img_FlexHours,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Flexible Work hours Icon is present.",
      () => {
        console.log("Verify the Flexible Work hours Icon is present.");
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsSubtitleTiles(Title),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Flexible Work hours Title as " + Title,
      () => {
        console.log("Verify the Flexible Work hours Title as " + Title);
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsDescriptionTiles(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Flexible Work hours Title as " +
        Title +
        " and description as " +
        Description,
      () => {
        console.log(
          "Verify the Flexible Work hours Title as " +
            Title +
            " and description as " +
            Description,
        );
      },
    );
  }

  /**
   * a method to Verify the Health Insurance tile
   */
  async bc_VerifyHealthInsuranceTile(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.img_HealthInsurance,
      "Element not exist",
    );
    allureReporter.step("Verify the Health Insurance Icon is present.", () => {
      console.log("Verify the Health Insurance Icon is present.");
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsSubtitleTiles(Title),
      "Element not exist",
    );
    allureReporter.step("Verify the Health Insurance Title as " + Title, () => {
      console.log("Verify the Health Insurance Title as " + Title);
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsDescriptionTiles(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Pegging Health Insurance as " +
        Title +
        " and description as " +
        Description,
      () => {
        console.log(
          "Verify the Pegging Health Insurance as " +
            Title +
            " and description as " +
            Description,
        );
      },
    );
  }

  /**
   * a method to Verify the Leave Benefits tile
   */
  async bc_VerifyLeaveBenefitsTile(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.img_LeaveBenefits,
      "Element not exist",
    );
    allureReporter.step("Verify the Leave Benefits Icon is present.", () => {
      console.log("Verify the Leave Benefits Icon is present.");
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsSubtitleTiles(Title),
      "Element not exist",
    );
    allureReporter.step("Verify the Leave Benefits Title as " + Title, () => {
      console.log("Verify the Leave Benefits Title as " + Title);
    });
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsDescriptionTiles(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Leave Benefits Title as " +
        Title +
        " and description as " +
        Description,
      () => {
        console.log(
          "Verify the Leave Benefits Title as " +
            Title +
            " and description as " +
            Description,
        );
      },
    );
  }

  /**
   * a method to Verify the Learning And Development tile
   */
  async bc_VerifyLearningAndDevelopmentTile(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.img_LearningAndDevelopment,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Learning And Development Icon is present.",
      () => {
        console.log("Verify the Learning And Development Icon is present.");
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsSubtitleTiles(Title),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Learning And Development Title as " + Title,
      () => {
        console.log("Verify the Learning And Development Title as " + Title);
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsDescriptionTiles(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Learning And Development Title as " +
        Title +
        " and description as " +
        Description,
      () => {
        console.log(
          "Verify the Learning And Development Title as " +
            Title +
            " and description as " +
            Description,
        );
      },
    );
  }

  /**
   * a method to Verify the Empowering Individuals tile
   */
  async bc_VerifyEmpoweringIndividualsTile(Title, Description) {
    await assertionHandler.assertElementDisplayed(
      PG_Careers.img_EmpoweringIndividuals,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Empowering Individuals Icon is present.",
      () => {
        console.log("Verify the Empowering Individuals Icon is present.");
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsSubtitleTiles(Title),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Empowering Individuals Title as " + Title,
      () => {
        console.log("Verify the Empowering Individuals Title as " + Title);
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Careers.ele_lblOurBenefitsDescriptionTiles(Title, Description),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Empowering Individuals Title as " +
        Title +
        " and description as " +
        Description,
      () => {
        console.log(
          "Verify the Empowering Individuals Title as " +
            Title +
            " and description as " +
            Description,
        );
      },
    );
  }

  /**
   * a method to Verify the top Description
   */
  async bc_VerifyShowMoreLink() {
    const isPresent = await PG_Careers.lnk_ShowMore.isExisting();

    if (isPresent) {
      console.log("Element is present in the DOM.");
      await assertionHandler.assertElementDisplayed(
        PG_Careers.lnk_ShowMore,
        "Element not exist",
      );
      allureReporter.step("Verify the Show more link in Careers page", () => {
        console.log("Verify the Show more link in Careers page");
      });
    } else {
      console.log("Show more link Element is NOT present in the DOM.");
    }
  }

  /**
   * a method to Search for job
   */
  async bc_SearchForJob(jobTitle) {
    await PG_Careers.tf_SearchForJob.clearValue();
    await PG_Careers.tf_SearchForJob.addValue(jobTitle);
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
