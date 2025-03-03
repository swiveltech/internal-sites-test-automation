class ContactUs {
  /**
   * define selectors using getter methods
   */
  ele_CountryWithAddress(Country, AddressWithCompanyName) {
    return $(
      `(//h3[text()="${Country}"]/../following-sibling::div[contains(normalize-space(),"${AddressWithCompanyName}")])[1]`,
    );
  }

  ele_CountryWithAddressWithContactNumber(
    Country,
    AddressWithCompanyName,
    ContactNumber,
  ) {
    return $(
      `(//h3[text()="${Country}"]/../following-sibling::div[contains(normalize-space(),"${AddressWithCompanyName}")]/a[contains(text(),"${ContactNumber}")])[1]`,
    );
  }

  ele_lblEmailAddress(Text, EmailAddress) {
    return $(
      `(//h3[text()="${Text}"]/../following-sibling::div/h3[text()="${EmailAddress}"])[1]`,
    );
  }

  ele_lblContactNumber(Text, ContactNumber) {
    return $(
      `(//h3[text()="${Text}"]/../following-sibling::div/a[text()="${ContactNumber}"])[1]`,
    );
  }

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

  get ele_ddCustomerInquiry() {
    return $(`//select[@data-name="customer_inquiry"]`);
  }

  get tf_Message() {
    return $(`//textarea[@data-name="message"]`);
  }

  ele_lblErrorMessage(Label, ErrorMessage) {
    return $(
      `//label[contains(text(),"${Label}")]/following-sibling::div/div/div[text()="${ErrorMessage}"]`,
    );
  }
}

export default new ContactUs();
