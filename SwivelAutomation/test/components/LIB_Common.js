import assertionHandler from "../../infrastructure/common/assertionHandler.js";
import PG_Common from "../pages/PG_Common.js";
import allureReporter from "@wdio/allure-reporter";

class Common {
  /**
   * method to wait untill spinner dissapear
   */
  async bc_WaitUntilSpinnerDissapear() {
    const spinner = await PG_Common.ele_Spinner;

    let isSpinnerDisplayed = false;

    // Check if the spinner is currently displayed with a shorter timeout
    try {
      await spinner.waitForDisplayed({ timeout: 1000 }); // Short timeout of 1 second
      isSpinnerDisplayed = true;
    } catch (error) {
      // Spinner is not displayed within the timeout
      isSpinnerDisplayed = false;
    }

    // If the spinner is not displayed, return without waiting
    if (!isSpinnerDisplayed) {
      return;
    }

    let startTime = Date.now(); // Get the current time

    try {
      // Wait for a short initial period
      await browser.waitUntil(async () => !(await spinner.isDisplayed()), {
        timeout: 1000, // Short initial timeout (1 second)
        timeoutMsg: "Spinner was still visible after 1 second",
        interval: 100, // Check every 100 milliseconds
      });

      // Calculate the actual time it took for the spinner to disappear
      let elapsedTime = Date.now() - startTime;

      // Adjust the remaining timeout based on the elapsed time
      let remainingTimeout = 10000 - elapsedTime; // 10 seconds timeout - elapsed time

      if (remainingTimeout > 0) {
        // Wait for the remaining time if it's positive
        await browser.waitUntil(async () => !(await spinner.isDisplayed()), {
          timeout: remainingTimeout,
          timeoutMsg: `Spinner was still visible after ${
            elapsedTime / 1000
          } seconds`,
        });
      }
    } catch (error) {
      // Handle the case where WebDriverIO fails to locate the spinner element
      console.log("Spinner element is not displayed anymore.");
    }
  }

  /**
   * method to select values from dropdown with ul/li
   */
  async bc_SelectValuesFromDropdown(dropdownElement, optionValue) {
    let element = await dropdownElement;

    await element.scrollIntoView({ block: "center", inline: "center" });

    await browser.pause(1000);
    await dropdownElement.click();

    // Wait for any option to be displayed to ensure the list is visible
    await $("ul li").waitForDisplayed({
      timeout: 5000, // Adjust timeout as needed
      timeoutMsg: "Dropdown options were not displayed within 5 seconds",
    });

    const options = await $$("ul li");
    for (const option of options) {
      const value = await option.getText();
      if (value === optionValue) {
        await option.click();
        allureReporter.addStep(
          "Select Value From Dropdown as " + optionValue,
          "",
          "passed",
        );
        await browser.pause(1000);
        return;
      }
    }
  }

  //Common component for click on button in popups
  async bc_VerifyPageHeader(pageHeader, index) {
    await PG_Common.ele_lblPageHeader(pageHeader, index).waitForDisplayed(5000);
    const $element = await PG_Common.ele_lblPageHeader(
      pageHeader,
      index,
    ).isDisplayed();
    assertionHandler.assertTrue($element, "element not visible");
    allureReporter.addStep(
      "Verify the page header as " + pageHeader,
      "",
      "passed",
    );
  }

  async bc_ClickOnButtonInPopUp(label) {
    await PG_Common.btn_PopUpActions(label).click();
    allureReporter.addStep(
      "Click on button in the popup and button value is " + label,
      "",
      "passed",
    );
  }

  //Common component for click on button
  async bc_ClickOnButton(label, Index) {
    const element = await PG_Common.btn_ButtonWithLabel(label, Index);

    await element.scrollIntoView({ block: "center", inline: "center" });
    await browser.pause(1000);

    await PG_Common.btn_ButtonWithLabel(label, Index).click();

    await browser.pause(10000);
    allureReporter.addStep(
      "Click on button and button value is " + label,
      "",
      "passed",
    );
  }

  /* A method to verify success message and click on ok button */
  async bc_VerifySuccessPopUpAndClickOk(SuccessMsg) {
    let element;
    await PG_Common.ele_CircleOutlineIcon.waitForDisplayed(2000);
    element = await PG_Common.ele_CircleOutlineIcon.isDisplayed();
    assertionHandler.assertTrue(element, "Element not visible");
    allureReporter.addStep(
      "Success Popup Green Citcle is visible " + element,
      "",
      "passed",
    );
    element =
      await PG_Common.ele_SaveDialogBoxContent("success !").isDisplayed();
    assertionHandler.assertTrue(element, "Element not visible");
    allureReporter.addStep(
      "Success Popup Success! header is Visible " + element,
      "",
      "passed",
    );
    await this.bc_VerifyPageHeader(SuccessMsg, 1);
    allureReporter.addStep(
      "Success Popup success message is visble " + SuccessMsg,
      "",
      "passed",
    );
    await PG_Common.btn_OkInSuccessPopup.click();
    allureReporter.addStep("Clicked on okay button in the popup", "", "passed");
    await browser.pause(5000);
  }

  /* A metod to verify Warning message and click on Ok */
  async bc_VerifyWarningPopUpAndClickOk(WarningMsg) {
    let element;
    await PG_Common.ele_WarningAmberIcon.waitForDisplayed(2000);
    element = await PG_Common.ele_WarningAmberIcon.isDisplayed();
    assertionHandler.assertTrue(element, "Element not visible");
    allureReporter.addStep(
      "Success Popup Green Citcle is visible " + element,
      "",
      "passed",
    );
    element =
      await PG_Common.ele_SaveDialogBoxContent("warning !").isDisplayed();
    assertionHandler.assertTrue(element, "Element not visible");
    allureReporter.addStep(
      "Success Popup Success! header is Visible " + element,
      "",
      "passed",
    );
    await this.bc_VerifyPageHeader(WarningMsg, 1);
    allureReporter.addStep(
      "Success Popup success message is visble " + WarningMsg,
      "",
      "passed",
    );
    await PG_Common.btn_OkInSuccessPopup.click();
    allureReporter.addStep("Clicked on okay button in the popup", "", "passed");
    await browser.pause(5000);
  }

  /**
   * method to get values from dropdown with ul/li
   */
  async bc_GetValuesFromDropdown(dropdownElement) {
    await dropdownElement.click();
    await browser.pause(1000);
    // Wait for any option to be displayed to ensure the list is visible
    await $("ul li").waitForDisplayed({
      timeout: 5000, // Adjust timeout as needed
      timeoutMsg: "Dropdown options were not displayed within 5 seconds",
    });

    const options = await $$("ul li");
    const values = [];

    for (const option of options) {
      const value = await option.getText();
      values.push(value);
    }
    // Click somewhere else to close the dropdown (adjust this to your specific application behavior)
    await $("body").click(); // Click on body or another element to close the dropdown

    return values;
  }

  // Method to get the selected value from a dropdown
  async bc_GetSelectedValueFromDropdown(dropdownElement) {
    const selectedOption = await dropdownElement.getText();
    await browser.pause(2000);
    return selectedOption.trim();
  }

  /*
   * Method to selected the first value from the dropdown
   */
  async bc_SelectFirstOptionFromDropdown(dropdownElement) {
    await dropdownElement.click();

    // Wait for any option to be displayed to ensure the list is visible
    await $("ul li").waitForDisplayed({
      timeout: 5000, // Adjust timeout as needed
      timeoutMsg: "Dropdown options were not displayed within 5 seconds",
    });

    // Select the first option directly
    const firstOption = await $("ul li:first-child");
    await firstOption.click();
    allureReporter.addStep(
      "Selected the first option from dropdown",
      "",
      "passed",
    );
  }
}
export default new Common();
