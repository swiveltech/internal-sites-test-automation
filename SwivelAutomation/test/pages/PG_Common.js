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

  ele_lblH1Header(Label) {
    return $(`//h1[text()='${Label}']`);
  }

  lnk_Navigation(Label) {
    return $(`//a[text()='${Label}']`);
  }
}

export default new CommonPage();
