class PolicyPage {
  /**
   * define selectors using getter methods
   */
  ele_lblDivDescription(Label) {
    return $(`//div[contains(text(),"${Label}")]`);
  }
}

export default new PolicyPage();
