class ContactUs {
  /**
   * define selectors using getter methods
   */
  get lnk_SendUsAMessage() {
    return $('//a[text()="Send Us a Message"]');
  }

  get lbl_SendUsAMessage() {
    return $('//p[text()="Send us a message"]');
  }

  get tf_Name() {
    return $(
      '//label[contains(normalize-space(), "Name")]/following-sibling::div/input[@id="firstname"]',
    );
  }

  get tf_Email() {
    return $(
      '//label[contains(normalize-space(), "Email")]/following-sibling::div/input[@id="email"]',
    );
  }

  get dd_Subject() {
    return $(
      '//label[contains(normalize-space(), "Subject")]/following-sibling::div/select',
    );
  }

  get tf_PhoneNumber() {
    return $(
      '//label[contains(normalize-space(), "Phone")]/following-sibling::div/input[@id="phone"]',
    );
  }

  get tf_Message() {
    return $(
      '//label[contains(normalize-space(), "Message")]/following-sibling::div/textarea',
    );
  }

  get lbl_EmailUs() {
    return $('//h3[text()="Email Us"]');
  }

  lbl_EmailUsWithAddress(email) {
    return $(
      `//h3[text()="Email Us"]/following-sibling::div/a[text()="${email}"]`,
    );
  }

  lbl_Footer(word) {
    return $(`//span[text()="${word}"]`);
  }

  lbl_ErrorMessage(errorMessage) {
    return $(`//div[text()="${errorMessage}" and @class="_error-inner"]`);
  }

  get icn_FooterLogo() {
    return $('//img[contains(@alt,"Footer_Swivel_Logo_")]');
  }

  ele_VisitUsLocation(
    subLocationHeader,
    companyName,
    addressLine1,
    addressLine2,
    phoneNumber,
  ) {
    return $(
      `//h5[text()="${subLocationHeader}"]/following-sibling::div/div[text()="${companyName}"]/following-sibling::div[text()="${addressLine1}"]/following-sibling::div[text()="${addressLine2}"]/following-sibling::div[text()="${phoneNumber}"]`,
    );
  }
}

export default new ContactUs();
