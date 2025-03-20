class PolicyPage {
  /**
   * define selectors using getter methods
   */
  lbl_DescriptionWith3Text(Label1, Label2, Label3) {
    return $(
      `//div[contains(., "${Label1}") and contains(., "${Label2}") and contains(., "${Label3}")]`,
    );
  }

  lbl_PtagToGetText(Header) {
    return $(
      `(//div[contains(text(),"${Header}")]/following-sibling::div/p)[1]`,
    );
  }

  lbl_DescriptionWith2Text(Label1, Label2) {
    return $(`//div[contains(., "${Label1}") and contains(., "${Label2}")]`);
  }

  lbl_DescriptionWith2TextForPTag(Label1, Label2) {
    return $(`//p[contains(text(), "${Label1}") and contains(., "${Label2}")]`);
  }
}

export default new PolicyPage();
