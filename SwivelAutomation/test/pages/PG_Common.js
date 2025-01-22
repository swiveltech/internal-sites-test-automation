class CommonPage {
  /**
   * define selectors using getter methods
   */
  ele_lblPageHeader(PageHeader, Index) {
    return $(`(//*[text()='${PageHeader}'])[${Index}]`);
  }

  btn_ButtonWithLabel(Label, Index) {
    return $(`(//button[text()='${Label}'])[${Index}]`);
  }
}

export default new CommonPage();
