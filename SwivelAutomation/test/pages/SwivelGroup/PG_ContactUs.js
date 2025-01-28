class ContactUs {
  /**
   * define selectors using getter methods
   */
  get lnk_SendUsAMessage() {
    return $('//a[text()="Send Us a Message"]');
  }

  get ele_lblSendUsAMessage() {
    return $('//p[text()="Send us a message"]');
  }

  get tf_Name() {
    return $(
      '//label[text()="Name "]/following-sibling::div/input[@id="firstname"]',
    );
  }

  get tf_Email() {
    return $(
      '//label[text()="Email "]/following-sibling::div/input[@id="email"]',
    );
  }

  get ele_ddSubject() {
    return $('//label[text()="Subject "]/following-sibling::div/select');
  }

  get tf_PhoneNumber() {
    return $(
      '//label[text()="Phone "]/following-sibling::div/input[@id="phone"]',
    );
  }

  get tf_Message() {
    return $('//label[text()="Message "]/following-sibling::div/textarea');
  }

  get ele_lblEmailUs() {
    return $('//h3[text()="Email Us"]');
  }

  ele_lblEmailUsWithAddress(email) {
    return $(
      `//h3[text()="Email Us"]/following-sibling::div/a[text()="${email}"]`,
    );
  }
}

export default new ContactUs();
