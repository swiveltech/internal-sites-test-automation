class PolicyPage {
  /**
   * define selectors using getter methods
   */
  lbl_DivDescription(Label) {
    return $(`//div[contains(text(),"${Label}")]`);
  }

  lbl_DescriptionWith3Text(Label1, Label2, Label3) {
    return $(
      `//div[contains(text(), "${Label1}") and contains(., "${Label2}") and contains(., "${Label3}")]`,
    );
  }

  lbl_DescriptionWith3TextInCenter(Label1, Label2, Label3) {
    return $(
      `(//div[contains(., "${Label1}") and contains(., "${Label2}") and contains(., "${Label3}")])[1]`,
    );
  }

  lbl_DescriptionWith2Text(Label1, Label2) {
    return $(
      `//div[contains(text(), "${Label1}") and contains(., "${Label2}")]`,
    );
  }
}

export default new PolicyPage();
