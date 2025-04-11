import PG_Common from "../pages/PG_Common.js";
import allureReporter from "@wdio/allure-reporter";

class Common {
  /**
   * method to Open the Application
   */
  async bc_OpenApplication(url) {
    await browser.url(url);
    await browser.waitUntil(
      async function () {
        return (await browser.getUrl()) === url;
      },
      {
        timeout: 5000,
        timeoutMsg: `URL did not load correctly: Expected ${url}, but got a different page.`,
      },
    );
    await this.bc_LogAllureReportAndLogs("Loaded the URL: " + url);
  }

  /**
   * method to Take Screenshot
   */
  async bc_TakeScreenShot(name) {
    await browser.saveScreenshot("./Screenshots/" + name + ".png", {
      fullPage: true,
    });
    await this.bc_LogAllureReportAndLogs("Screenshot name : " + name);
  }

  //Common component for click on button in popups
  async bc_VerifyPageHeader(pageHeader, index) {
    const pageHeaderElement = await PG_Common.lbl_PageHeader(pageHeader, index);

    // Wait for the element to be displayed
    await pageHeaderElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await pageHeaderElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(pageHeaderElement).toBeDisplayed();

    await this.bc_LogAllureReportAndLogs(
      `Verify the page header as ${pageHeader}`,
    );
  }

  //Common component for click on button
  async bc_ClickOnButton(label, Index) {
    await browser.pause(3000);
    let element = await PG_Common.btn_ButtonWithLabel(label, Index);

    if (await element.isDisplayed()) {
      await element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
      await element.click();
      await this.bc_LogAllureReportAndLogs(
        "Clicked on button with label: " + label + " , and Index : " + Index,
      );
      await browser.pause(3000);
    } else {
      await this.bc_LogAllureReportAndLogs(
        `Button with label "${label}" not found.`,
      );
    }
  }

  async bc_VerifyTheButton(label, Index) {
    let buttonWithLabelElement = await PG_Common.btn_ButtonWithLabel(
      label,
      Index,
    );

    // Wait for the element to be displayed
    await buttonWithLabelElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await buttonWithLabelElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(buttonWithLabelElement).toBeDisplayed();
    await this.bc_LogAllureReportAndLogs(
      "Verify the button with label: " + label + " , and Index : " + Index,
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
    let currentUrl = await browser.getUrl();
    console.log(`Full URL After Navigating: ${currentUrl}`);

    // Extract the last segment of the URL
    await expect(browser).toHaveUrl(expect.stringContaining(expectedSegment));

    await this.bc_LogAllureReportAndLogs(
      `Navigated to the correct page. Current URL: ${currentUrl}, Expected segment: ${expectedSegment}`,
    );
  }
  //Common component to verify H1 Header
  async bc_VerifyH1Header(pageHeader) {
    let headerElement = await PG_Common.lbl_H1Header(pageHeader);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

    await this.bc_LogAllureReportAndLogs(
      "Verify the H1 page header as " + pageHeader,
    );
  }

  //Common component to verify H1 Header For match all
  async bc_VerifyH1HeaderText(pageHeader) {
    let headerElement = await PG_Common.lbl_H1HeaderWithDot(pageHeader);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

    await this.bc_LogAllureReportAndLogs(
      "Verify the H1 page header as " + pageHeader,
    );
  }

  //Common component to verify H2 Header
  async bc_VerifyH2Header(pageHeader) {
    let headerElement = await PG_Common.lbl_H2Header(pageHeader);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

    await this.bc_LogAllureReportAndLogs(
      "Verify the H2 page header as " + pageHeader,
    );
  }

  //Common component to verify Header or any text
  async bc_VerifyAnyText(textValue, index) {
    let headerElement = await PG_Common.lbl_PageHeaderWithDot(textValue, index);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

    await this.bc_LogAllureReportAndLogs("Verify the Text as " + textValue);
  }

  //Common component to verify H3 Header
  async bc_VerifyH3Header(pageHeader) {
    let headerElement = await PG_Common.lbl_H3Header(pageHeader);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

    await this.bc_LogAllureReportAndLogs(
      "Verify the H3 page header as " + pageHeader,
    );
  }

  //Common component to verify H4 Header
  async bc_VerifyH4Header(pageHeader) {
    let headerElement = await PG_Common.lbl_H4Header(pageHeader);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

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
      block: "center",
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
    let headerElement = await PG_Common.lnk_Navigation(name);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

    await this.bc_LogAllureReportAndLogs("Verify the link : " + name);
  }

  //Common component to verify paragraph
  async bc_VerifyTheParagraph(paragraph) {
    let headerElement = await PG_Common.lbl_Paragraph(paragraph);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

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
    await browser.pause(4000);

    await browser.switchToWindow(parentGUID);
    await browser.pause(3000);
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
    let headerElement = await PG_Common.lbl_H5Header(pageHeader);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

    await this.bc_LogAllureReportAndLogs(
      "Verify the H5 page header as " + pageHeader,
    );
  }

  //Common component to verify H6 Header
  async bc_VerifyH6Header(pageHeader) {
    let headerElement = await PG_Common.lbl_H6Header(pageHeader);

    // Wait for the element to be displayed
    await headerElement.waitForDisplayed({ timeout: 5000 });

    // Scroll into view if necessary
    await headerElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });

    // Check if the element is displayed
    await expect(headerElement).toBeDisplayedInViewport();

    await this.bc_LogAllureReportAndLogs(
      "Verify the H6 page header as " + pageHeader,
    );
  }
}
export default new Common();
