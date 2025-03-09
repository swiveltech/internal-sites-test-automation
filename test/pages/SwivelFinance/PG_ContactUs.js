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

  get ele_ddCountry() {
    return $(`//select[@data-name="country"]`);
  }

  get tf_Message() {
    return $(`//textarea[@placeholder="Enter your message"]`);
  }
}

export default new ContactUsPage();
