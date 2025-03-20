class BlueprintPage {
  /**
   * define selectors using getter methods
   */
  get tf_FirstName() {
    return $('//input[@id="firstname"]');
  }

  get tf_LastName() {
    return $('//input[@id="lastname"]');
  }

  get tf_Email() {
    return $('//input[@id="email"]');
  }

  get tf_Phone() {
    return $('//input[@id="phone"]');
  }

  get dd_CompanySize() {
    return $(`//select[@data-name="company_size"]`);
  }

  get dd_AccountingSpecialisation() {
    return $(`//select[@data-name="accounting_specialisation"]`);
  }
}

export default new BlueprintPage();
