import assertionHandler from "../../infrastructure/common/assertionHandler.js";
import PG_Common from "../pages/PG_Common.js";
import allureReporter from "@wdio/allure-reporter";
import browserManager from "../../infrastructure/web/browserManager.js";

class Common {
  /**
   * method to Open the Application
   */
  async bc_OpenApplication(url) {
    await browserManager.openUrl(url);
    await browser.waitUntil(async () => (await browser.getUrl()) === url, {
      timeout: 3000, // Adjust timeout as needed
      timeoutMsg: `URL did not load correctly: Expected ${url}, but got a different page.`,
    });

    allureReporter.step(`Loaded the URL: ${url}`, () => {
      console.log(`Loaded the URL: ${url}`);
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
    await elementToScroll.scrollIntoView();
    assertionHandler.assertTrue(element, "element not visible");
    allureReporter.step("Verify the page header as " + pageHeader, () => {
      console.log("Verify the page header as " + pageHeader);
    });
  }

  //Common component for click on button
  async bc_ClickOnButton(label, Index) {
    const element = await PG_Common.btn_ButtonWithLabel(label, Index);

    if (await element.isExisting()) {
      await element.scrollIntoView({ block: "center", inline: "center" });
      await element.click();

      allureReporter.step(`Clicked on button with label: ${label}`, () => {
        console.log(`Clicked on button with label: ${label}`);
      });
    } else {
      console.warn(`Button with label "${label}" not found.`);
    }
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
    // Wait until the URL changes or contains the expected segment
    await browser.waitUntil(
      async () => (await browser.getUrl()).includes(expectedSegment),
      {
        timeout: 5000, // Adjust as needed
        timeoutMsg: `Expected URL to contain "${expectedSegment}", but it didn't.`,
      },
    );

    // Get the current URL
    const currentUrl = await browser.getUrl();
    console.log(`Full URL After Navigating: ${currentUrl}`);

    // Extract the last segment of the URL
    const lastPathSegment = currentUrl.split("/").filter(Boolean).pop();

    // Verify the last path segment
    assertionHandler.assertEqual(
      lastPathSegment,
      expectedSegment,
      `Expected "${expectedSegment}" but got "${lastPathSegment}"`,
    );

    allureReporter.step(
      `Navigated to the correct page. Current URL: ${currentUrl}, Expected segment: ${expectedSegment}`,
      () => {
        console.log(
          `Navigated to the correct page. Current URL: ${currentUrl}, Expected segment: ${expectedSegment}`,
        );
      },
    );
  }
  //Common component to verify H1 Header
  async bc_VerifyH1Header(pageHeader) {
    let elementToScroll = await PG_Common.ele_lblH1Header(pageHeader);
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblH1Header(pageHeader),
      "element not visible",
    );
    allureReporter.step("Verify the H1 page header as " + pageHeader, () => {
      console.log("Verify the H1 page header as " + pageHeader);
    });
  }

  //Common component to verify H2 Header
  async bc_VerifyH2Header(pageHeader) {
    let elementToScroll = await PG_Common.ele_lblH2Header(pageHeader);
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblH2Header(pageHeader),
      "element not visible",
    );
    allureReporter.step("Verify the H2 page header as " + pageHeader, () => {
      console.log("Verify the H2 page header as " + pageHeader);
    });
  }

  //Common component to verify H3 Header
  async bc_VerifyH3Header(pageHeader) {
    let elementToScroll = await PG_Common.ele_lblH3Header(pageHeader);
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblH3Header(pageHeader),
      "element not visible",
    );
    allureReporter.step("Verify the H3 page header as " + pageHeader, () => {
      console.log("Verify the H3 page header as " + pageHeader);
    });
  }

  //Common component to verify H4 Header
  async bc_VerifyH4Header(pageHeader) {
    let elementToScroll = await PG_Common.ele_lblH4Header(pageHeader);
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblH4Header(pageHeader),
      "element not visible",
    );
    allureReporter.step("Verify the H4 page header as " + pageHeader, () => {
      console.log("Verify the H4 page header as " + pageHeader);
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

  //Common component to verify paragraph
  async bc_VerifyTheParagraph(paragraph) {
    let elementToScroll = await PG_Common.ele_lblParagraph(paragraph);
    await elementToScroll.scrollIntoView({ block: "center", inline: "center" });
    assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblParagraph(paragraph),
      "element not visible",
    );
    allureReporter.step("Verify the Paragraph as " + paragraph, () => {
      console.log("Verify the Paragraph as " + paragraph);
    });
  }

  /**
   * method to Close the current Tab and force to first tab
   */
  async bc_CloseTheCurrentTabAndForceToFirstTab() {
    let allGUIDs = await browser.getWindowHandles();
    let currentGUID = await browser.getWindowHandle();

    // Find the parent GUID by filtering out the current one
    let parentGUID = allGUIDs.find((guid) => guid !== currentGUID);

    await browser.closeWindow();

    // Ensure the previous window is available before switching
    await browser.waitUntil(
      async () => (await browser.getWindowHandles()).length === 1,
    );

    await browser.switchToWindow(parentGUID);

    allureReporter.step(
      "Closed the current tab and switched to the first tab",
      () => {
        console.log("Closed the current tab and switched to the first tab");
      },
    );
  }
}
export default new Common();
