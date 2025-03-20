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
    await this.bc_LogAllureReportAndLogs("Loaded the URL: " + url);
  }

  /**
   * method to Take Screenshot
   */
  async bc_TakeScreenShot(name) {
    await browser.saveScreenshot("./Screenshots/" + name + ".png");
    await this.bc_LogAllureReportAndLogs("Screenshot name : " + name);
  }

  //Common component for click on button in popups
  async bc_VerifyPageHeader(pageHeader, index) {
    await PG_Common.lbl_PageHeader(pageHeader, index).waitForDisplayed(5000);
    const element = await PG_Common.lbl_PageHeader(
      pageHeader,
      index,
    ).isDisplayed();
    const elementToScroll = await PG_Common.lbl_PageHeader(pageHeader, index);
    await elementToScroll.scrollIntoView();
    assertionHandler.assertTrue(element, "element not visible");
    await this.bc_LogAllureReportAndLogs(
      "Verify the page header as " + pageHeader,
    );
  }

  //Common component for click on button
  async bc_ClickOnButton(label, Index) {
    const element = await PG_Common.btn_ButtonWithLabel(label, Index);

    if (await element.isExisting()) {
      await element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      await element.click();
      await this.bc_LogAllureReportAndLogs(
        `Clicked on button with label: ${label}`,
      );
      await browser.pause(2000);
    } else {
      console.warn(`Button with label "${label}" not found.`);
    }
  }

  async bc_VerifyTheButton(label, Index) {
    let elementToScroll = await PG_Common.btn_ButtonWithLabel(label, Index);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    let element = await PG_Common.btn_ButtonWithLabel(
      label,
      Index,
    ).isDisplayed();
    assertionHandler.assertTrue(element, "element not visible");
    await this.bc_LogAllureReportAndLogs(
      "Verify the button value is : " + label,
    );
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
    await this.bc_LogAllureReportAndLogs(
      `Navigated to the correct page. Current URL: ${currentUrl}, Expected segment: ${expectedSegment}`,
    );
  }
  //Common component to verify H1 Header
  async bc_VerifyH1Header(pageHeader) {
    let elementToScroll = await PG_Common.lbl_H1Header(pageHeader);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    assertionHandler.assertElementDisplayed(
      PG_Common.lbl_H1Header(pageHeader),
      "element not visible",
    );
    await this.bc_LogAllureReportAndLogs(
      "Verify the H1 page header as " + pageHeader,
    );
  }

  //Common component to verify H1 Header For match all
  async bc_VerifyH1HeaderText(pageHeader) {
    let elementToScroll = await PG_Common.lbl_H1HeaderWithDot(pageHeader);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    assertionHandler.assertElementDisplayed(
      PG_Common.lbl_H1HeaderWithDot(pageHeader),
      "element not visible",
    );
    await this.bc_LogAllureReportAndLogs(
      "Verify the H1 page header as " + pageHeader,
    );
  }

  //Common component to verify H2 Header
  async bc_VerifyH2Header(pageHeader) {
    let elementToScroll = await PG_Common.lbl_H2Header(pageHeader);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    assertionHandler.assertElementDisplayed(
      PG_Common.lbl_H2Header(pageHeader),
      "element not visible",
    );
    await this.bc_LogAllureReportAndLogs(
      "Verify the H2 page header as " + pageHeader,
    );
  }

  //Common component to verify Header or any text
  async bc_VerifyAnyText(textValue, index) {
    let elementToScroll = await PG_Common.lbl_PageHeaderWithDot(
      textValue,
      index,
    );
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    assertionHandler.assertElementDisplayed(
      PG_Common.lbl_PageHeaderWithDot(textValue, index),
      "element not visible",
    );
    await this.bc_LogAllureReportAndLogs("Verify the Text as " + textValue);
  }

  //Common component to verify H3 Header
  async bc_VerifyH3Header(pageHeader) {
    let elementToScroll = await PG_Common.lbl_H3Header(pageHeader);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    assertionHandler.assertElementDisplayed(
      PG_Common.lbl_H3Header(pageHeader),
      "element not visible",
    );
    await this.bc_LogAllureReportAndLogs(
      "Verify the H3 page header as " + pageHeader,
    );
  }

  //Common component to verify H4 Header
  async bc_VerifyH4Header(pageHeader) {
    let elementToScroll = await PG_Common.lbl_H4Header(pageHeader);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    assertionHandler.assertElementDisplayed(
      PG_Common.lbl_H4Header(pageHeader),
      "element not visible",
    );
    await this.bc_LogAllureReportAndLogs(
      "Verify the H4 page header as " + pageHeader,
    );
  }

  /**
   * method to Click on links
   */
  async bc_ClickOnLinks(name) {
    let elementToScroll = await PG_Common.lnk_Navigation(name);
    await browser.pause(3000);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    await browser.pause(2000);
    await PG_Common.lnk_Navigation(name).click();
    await this.bc_LogAllureReportAndLogs("Click on the link name : " + name);
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
    await this.bc_LogAllureReportAndLogs("Verify the link : " + name);
  }

  //Common component to verify paragraph
  async bc_VerifyTheParagraph(paragraph) {
    let elementToScroll = await PG_Common.lbl_Paragraph(paragraph);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    assertionHandler.assertElementDisplayed(
      PG_Common.lbl_Paragraph(paragraph),
      "element not visible",
    );
    await this.bc_LogAllureReportAndLogs(
      "Verify the Paragraph as " + paragraph,
    );
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
    await this.bc_LogAllureReportAndLogs(
      "Closed the current tab and switched to the first tab",
    );
  }

  /**
   * method to Log Allure Report And Logs
   */
  async bc_LogAllureReportAndLogs(reportLog) {
    allureReporter.step(reportLog, () => {
      console.log(reportLog);
    });
  }

  /**
   * method to Start Allure Report Step
   */
  async bc_StartAllureReportStep(reportLog) {
    allureReporter.startStep(reportLog);
  }

  //Common component to verify H5 Header
  async bc_VerifyH5Header(pageHeader) {
    let elementToScroll = await PG_Common.lbl_H5Header(pageHeader);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    assertionHandler.assertElementDisplayed(
      PG_Common.lbl_H5Header(pageHeader),
      "element not visible",
    );
    await this.bc_LogAllureReportAndLogs(
      "Verify the H5 page header as " + pageHeader,
    );
  }

  //Common component to verify H6 Header
  async bc_VerifyH6Header(pageHeader) {
    let elementToScroll = await PG_Common.lbl_H6Header(pageHeader);
    await elementToScroll.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    assertionHandler.assertElementDisplayed(
      PG_Common.lbl_H6Header(pageHeader),
      "element not visible",
    );
    await this.bc_LogAllureReportAndLogs(
      "Verify the H6 page header as " + pageHeader,
    );
  }
}
export default new Common();
