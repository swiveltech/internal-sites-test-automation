class ContactUsPage {
  /**
   * define selectors using getter methods
   */
  get tf_FirstName() {
    return $(`//input[@id="firstname"]`);
  }
  get tf_LastName() {
    return $(`//input[@id="lastname"]`);
  }

  get tf_Email() {
    return $(`//input[@id="email"]`);
  }

  get tf_PhoneNumber() {
    return $(`//input[@id="phone"]`);
  }

  get tf_CompanyName() {
    return $(`//input[@placeholder="Enter your company name"]`);
  }

  get dd_Country() {
    return $(`//select[@data-name="country"]`);
  }

  get tf_Message() {
    return $(`//textarea[@placeholder="Enter your message"]`);
  }

  lbl_ErrorMessage(Label, ErrorMessage) {
    return $(
      `//label[contains(text(),"${Label}")]/following-sibling::div/div/div[@class="_error-inner" and contains(text(),"${ErrorMessage}")]`,
    );
  }

  lbl_HeaderWithValue(Title, Value) {
    return $(
      `//h3[contains(text(),"${Title}")]/../following-sibling::p/a[contains(text(),"${Value}")]`,
    );
  }

  lbl_AddressWithCompanyNameAndPhoneNumber(
    Country,
    CompanyName,
    Addressline1,
    Addressline2,
    PhoneNumber,
  ) {
    return $(
      `//h3[contains(text(),"${Country}")]/following-sibling::div[1]/ul/ul/li[contains(text(),"${CompanyName}")]/following-sibling::li[contains(text(),"${Addressline1}")]/following-sibling::li[contains(text(),"${Addressline2}")]/../../following-sibling::p/a[contains(text(),"${PhoneNumber}")]`,
    );
  }
}

export default new ContactUsPage();
