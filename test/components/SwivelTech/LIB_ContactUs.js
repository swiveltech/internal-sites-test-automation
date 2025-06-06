import PG_ContactUs from "../../pages/SwivelTech/PG_ContactUs.js";
import LIB_Common from "../LIB_Common.js";
import PG_Home from "../../pages/SwivelTech/PG_Home.js";
class ContactUs {
  /**
   * a method to Verify the How We Grew Over the Years
   */
  async bc_VerifyCompanyAddress(country, addressWithCompanyName, phoneNumber) {
    await expect(
      PG_ContactUs.ele_CountryWithAddress(country, addressWithCompanyName),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Country as : " +
        country +
        " , Address as : " +
        addressWithCompanyName,
    );
    await expect(
      PG_ContactUs.ele_CountryWithAddressWithContactNumber(
        country,
        addressWithCompanyName,
        phoneNumber,
      ),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Phone Number Under Address as : " +
        addressWithCompanyName +
        " , and Phone Number as : " +
        phoneNumber,
    );
  }

  /**
   * a method to Verify the Contact number
   */
  async bc_VerifyContactNumber(text, phoneNumber) {
    await expect(
      PG_ContactUs.lbl_ContactNumber(text, phoneNumber),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Phone Number as : " + phoneNumber,
    );
  }

  /**
   * a method to Verify the Contact number
   */
  async bc_VerifyEmail(text, emailAddress) {
    await expect(
      PG_ContactUs.lbl_EmailAddress(text, emailAddress),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Email Address as : " + emailAddress,
    );
  }

  /**
   * a method to Verify the Error Message
   */
  async bc_VerifyErrorMessage(label, errorMessage) {
    await expect(
      PG_ContactUs.lbl_ErrorMessage(label, errorMessage),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Error Message as : " +
        errorMessage +
        " , and It is Under label as : " +
        label,
    );
  }

  /**
   * a method to Send Us a Message
   */
  async bc_SendUsaMessage(
    firstName,
    lastName,
    emailAddress,
    phoneNumber,
    index,
    message,
  ) {
    await PG_ContactUs.tf_FirstName.clearValue();
    await PG_ContactUs.tf_FirstName.addValue(firstName);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "First Name type as " + firstName,
    );
    await PG_ContactUs.tf_LastName.clearValue();
    await PG_ContactUs.tf_LastName.addValue(lastName);
    await LIB_Common.bc_LogAllureReportAndLogs("Last Name type as " + lastName);
    await PG_ContactUs.tf_Email.clearValue();
    await PG_ContactUs.tf_Email.addValue(emailAddress);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Email Address type as " + emailAddress,
    );
    await PG_ContactUs.tf_PhoneNumber.clearValue();
    await PG_ContactUs.tf_PhoneNumber.addValue(phoneNumber);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Phone Number type as " + phoneNumber,
    );
    await PG_ContactUs.dd_CustomerInquiry.selectByIndex(index);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Customer Inquiry selected " + index + " value.",
    );
    await PG_ContactUs.tf_Message.clearValue();
    await PG_ContactUs.tf_Message.addValue(message);
    await LIB_Common.bc_LogAllureReportAndLogs("Message type as " + message);
  }

  /**
   * a method to Verify the Country
   */
  async bc_VerifyCountry(country, index) {
    let element = await PG_Home.ele_HamburgerIcon;
    if (await element.isDisplayed()) {
      await LIB_Common.bc_VerifyPageHeader(country, index);
    } else {
      await LIB_Common.bc_VerifyH3Header(country);
    }
  }

   /**
   * a method to Verify the AI Agent Card Content
   */

  async bc_VerifyAIHelpCardContent(header) {
    await PG_ContactUs.ele_HelpCardContainer.waitForDisplayed({ timeout: 5000 });

    const headingText = await PG_ContactUs.ele_HelpCardHeading.getText();
    expect(headingText).toBe(header.AIAgentCard_Header);

    expect(await PG_ContactUs.ele_StartCallButton.isDisplayed()).toBe(true);
  }

  async bc_VerifyCallCardFunctionality(callCardData) {
    // Click the Start Call button
    await PG_ContactUs.ele_StartCallButton.waitForDisplayed({ timeout: 5000 });
    await PG_ContactUs.ele_StartCallButton.click();

    // Wait for the Help Card to appear
    await PG_ContactUs.ele_HelpCardContainer.waitForDisplayed({ timeout: 5000 });

    const headerText = await PG_ContactUs.ele_HelpCardHeading.getText();
    expect(headerText).toBe(callCardData.cardHeader);

    const noteText = await PG_ContactUs.ele_CallEndingMsg.getText();
    expect(noteText).toContain(callCardData.endingNote);

    const timerText = await PG_ContactUs.ele_CallTimer.getText();
    expect(timerText).toBe(callCardData.initialTime);

    // End the call
    expect(await PG_ContactUs.ele_EndCallButton.isDisplayed()).toBe(true);
    await PG_ContactUs.ele_EndCallButton.click();

    // Verify Start Call reappears
    await PG_ContactUs.ele_StartCallButton.waitForDisplayed({ timeout: 3000 });
    expect(await PG_ContactUs.ele_StartCallButton.isDisplayed()).toBe(true);
  }

  /**
 * Method to wait for AI Agent widget to appear
 */
async bc_WaitForAIAgentWidget() {
  await PG_ContactUs.ele_HelpCardContainer.waitForDisplayed({ timeout: 5000 });
  await LIB_Common.bc_LogAllureReportAndLogs("AI Agent widget appeared");
}

/**
 * Method to minimize AI Agent widget
 */
async bc_MinimizeAIAgentWidget() {
  await PG_ContactUs.ele_MinimizeButton.waitForDisplayed({ timeout: 3000 });
  await PG_ContactUs.ele_MinimizeButton.click();
  await LIB_Common.bc_LogAllureReportAndLogs("AI Agent widget minimized");
}

/**
 * Method to maximize AI Agent widget
 */
async bc_MaximizeAIAgentWidget() {
  await PG_ContactUs.ele_MaximizeButton.waitForDisplayed({ timeout: 3000 });
  await PG_ContactUs.ele_MaximizeButton.click();
  await LIB_Common.bc_LogAllureReportAndLogs("AI Agent widget maximized");
}

/**
 * Method to close AI Agent widget
 */
async bc_CloseAIAgentWidget() {
  await PG_ContactUs.ele_CloseButton.waitForDisplayed({ timeout: 3000 });
  await PG_ContactUs.ele_CloseButton.click();
  await LIB_Common.bc_LogAllureReportAndLogs("AI Agent widget closed");
}

/**
 * Method to verify AI Agent widget minimized state
 */
async bc_VerifyAIAgentMinimizedState(expectedText) {
  // Verify "Need Help?" text is visible
  const needHelpText = await $("//div[normalize-space(text())='" + expectedText + "']");
  await expect(needHelpText).toBeDisplayed();
  
  // Verify START A CALL button is not visible
  await expect(PG_ContactUs.ele_StartCallButton).not.toBeDisplayed();
  
  await LIB_Common.bc_LogAllureReportAndLogs(
    "Verified AI Agent widget is in minimized state with text: " + expectedText
  );
}

/**
 * Method to verify AI Agent widget maximized state
 */
async bc_VerifyAIAgentMaximizedState() {
  // Verify heading is visible
  await expect(PG_ContactUs.ele_HelpCardHeading).toBeDisplayed();
  
  // Verify START A CALL button is visible
  await expect(PG_ContactUs.ele_StartCallButton).toBeDisplayed();
  
  await LIB_Common.bc_LogAllureReportAndLogs("Verified AI Agent widget is in maximized state");
}

/**
 * Method to verify AI Agent widget is closed
 */
async bc_VerifyAIAgentWidgetClosed() {
  await expect(PG_ContactUs.ele_HelpCardContainer).not.toBeDisplayed();
  await LIB_Common.bc_LogAllureReportAndLogs("Verified AI Agent widget is closed");
}

/**
 * Method to verify AI Agent widget is visible after refresh
 */
async bc_VerifyAIAgentWidgetReappears() {
  await PG_ContactUs.ele_HelpCardContainer.waitForDisplayed({ timeout: 5000 });
  await expect(PG_ContactUs.ele_HelpCardContainer).toBeDisplayed();
  await LIB_Common.bc_LogAllureReportAndLogs("Verified AI Agent widget reappeared after refresh");
}
}
export default new ContactUs();