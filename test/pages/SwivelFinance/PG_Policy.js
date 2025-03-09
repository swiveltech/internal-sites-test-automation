class PolicyPage {
  /**
   * define selectors using getter methods
   */
  ele_lblDescriptionWith3Text(Label1, Label2, Label3) {
    return $(
      `//div[contains(., "${Label1}") and contains(., "${Label2}") and contains(., "${Label3}")]`,
    );
  }

  ele_lblDescriptionWith2Text(Label1, Label2) {
    return $(`//div[contains(., "${Label1}") and contains(., "${Label2}")]`);
  }
}

export default new PolicyPage();
