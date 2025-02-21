class CareersPage {
  /**
   * define selectors using getter methods
   */
  ele_OurBenefitsDescription(Label, Description) {
    return $(
      `//h3[text()='${Label}']/following-sibling::p[text()='${Description}']`,
    );
  }
}

export default new CareersPage();
