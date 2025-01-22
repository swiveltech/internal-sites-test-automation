import assertionHandler from "../../infrastructure/common/assertionHandler.js";
import PG_Common from "../pages/PG_Common.js";
import allureReporter from "@wdio/allure-reporter";
import browserManager from "../../infrastructure/web/browserManager.js";

class Common {
  /**
   * method to Open the Application
   */
  async bc_OpenApplication(url) {
    await browserManager.openUrl(`${url}`);
    allureReporter.step("Load the URL " + url, () => {
      console.log("Load the URL " + url);
    });
  }

  /**
   * method to Take Screenshot
   */
  async bc_TakeScreenShot(name) {
    await browser.saveScreenshot("./Screenshots/" + name + ".png");
    allureReporter.step("Screenshot name " + name, () => {
      console.log("Screenshot name " + name);
    });
  }

  /**
   * method to select values from dropdown with ul/li
   */
  async bc_SelectValuesFromDropdown(dropdownElement, optionValue) {
    let element = await dropdownElement;

    await element.scrollIntoView({ block: "center", inline: "center" });

    // await browser.pause(1000);
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
        allureReporter.step(
          "Select Value From Dropdown as " + optionValue,
          () => {
            console.log("Select Value From Dropdown as " + optionValue);
          },
        );
        await browser.pause(1000);
        return;
      }
    }
  }

  //Common component for click on button in popups
  async bc_VerifyPageHeader(pageHeader, index) {
    await PG_Common.ele_lblPageHeader(pageHeader, index).waitForDisplayed(5000);
    const element = await PG_Common.ele_lblPageHeader(
      pageHeader,
      index,
    ).isDisplayed();
    const elementToScroll = await PG_Common.ele_lblPageHeader(
      pageHeader,
      index,
    );
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    assertionHandler.assertTrue(element, "element not visible");
    allureReporter.step("Verify the page header as " + pageHeader, () => {
      console.log("Verify the page header as " + pageHeader);
    });
  }

  //Common component for click on button
  async bc_ClickOnButton(label, Index) {
    const element = await PG_Common.btn_ButtonWithLabel(label, Index);

    await element.scrollIntoView({ block: "center", inline: "center" });
    // await browser.pause(1000);
    await PG_Common.btn_ButtonWithLabel(label, Index).click();
    await browser.pause(1000);
    allureReporter.step("Click on button and button value is " + label, () => {
      console.log("Click on button and button value is " + label);
    });
  }

  async bc_VerifyTheButton(label, Index) {
    const elementToScroll = await PG_Common.btn_ButtonWithLabel(label, Index);
    const element = await PG_Common.btn_ButtonWithLabel(
      label,
      Index,
    ).isDisplayed();
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    assertionHandler.assertTrue(element, "element not visible");
    allureReporter.step("Verify button and button value is " + label, () => {
      console.log("Verify button and button value is " + label);
    });
  }
}
export default new Common();
