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
    await browser.pause(2000);
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
    // await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    await elementToScroll.scrollIntoView();
    assertionHandler.assertTrue(element, "element not visible");
    allureReporter.step("Verify the page header as " + pageHeader, () => {
      console.log("Verify the page header as " + pageHeader);
    });
  }

  //Common component for click on button
  async bc_ClickOnButton(label, Index) {
    const element = await PG_Common.btn_ButtonWithLabel(label, Index);
    await element.scrollIntoView({ block: "center", inline: "center" });
    await browser.pause(1000);
    await PG_Common.btn_ButtonWithLabel(label, Index).click();
    await browser.pause(2000);
    allureReporter.step("Click on button and button value is " + label, () => {
      console.log("Click on button and button value is " + label);
    });
  }

  async bc_VerifyTheButton(label, Index) {
    let elementToScroll = await PG_Common.btn_ButtonWithLabel(label, Index);
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    let element = await PG_Common.btn_ButtonWithLabel(
      label,
      Index,
    ).isDisplayed();
    assertionHandler.assertTrue(element, "element not visible");
    allureReporter.step("Verify button and button value is " + label, () => {
      console.log("Verify button and button value is " + label);
    });
  }

  //Common component to verify the application url
  async bc_VerifyTheAppURL(expectedSegment) {
    await browser.pause(2000);
    // Get the current URL
    const currentUrl = await browser.getUrl();
    console.log("Full URL After Navigating : " + currentUrl);
    // Extract the last segment of the URL
    const lastPathSegment = currentUrl.split("/").filter(Boolean).pop();

    // Verify the last path segment
    assertionHandler.assertEqual(
      lastPathSegment,
      expectedSegment,
      `Expected "${expectedSegment}" but got "${lastPathSegment}"`,
    );
    allureReporter.step(
      "You have navigate correct page and application URL is " +
        currentUrl +
        " You have passed data is : " +
        expectedSegment,
      () => {
        console.log(
          "You have navigate correct page and application URL is " +
            currentUrl +
            " You have passed data is : " +
            expectedSegment,
        );
      },
    );
  }
  //Common component to verify H1 Header
  async bc_VerifyH1Header(pageHeader) {
    assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblH1Header(pageHeader),
      "element not visible",
    );
    allureReporter.step("Verify the H1 page header as " + pageHeader, () => {
      console.log("Verify the H1 page header as " + pageHeader);
    });
  }

  /**
   * method to Click on links
   */
  async bc_ClickOnLinks(name) {
    let elementToScroll = await PG_Common.lnk_Navigation(name);
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    await browser.pause(1000);
    await PG_Common.lnk_Navigation(name).click();
    allureReporter.step("Click on the link name : " + name, () => {
      console.log("Click on the link name : " + name);
    });
    await browser.pause(1000);
  }

  /**
   * method to Verify links
   */
  async bc_VerifyLinks(name) {
    assertionHandler.assertElementDisplayed(
      PG_Common.lnk_Navigation(name),
      "element not visible",
    );
    allureReporter.step("Verify the link : " + name, () => {
      console.log("Verify the link : " + name);
    });
  }

  /**
   * method to Close the current Tab and force to first tab
   */
  async bc_CloseTheCurrentTabAndForceToFirstTab() {
    await browser.closeWindow();
    const handles = await browser.getWindowHandles();
    console.log(handles.length); // returns `1`

    const err = await browser.getTitle().catch((err) => err);
    console.log(err.message); // returns "no such window: target window already closed"

    //make sure to switch to previous window before continuing
    await browser.switchToWindow(handles[0]);
    await browser.pause(2000);
    allureReporter.step("Close the current Tab and force to first tab", () => {
      console.log("Close the current Tab and force to first tab");
    });
  }
}
export default new Common();
