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
    return $(`//h1[text()="${Label}"]`);
  }

  ele_lblH2Header(Label) {
    return $(`//h2[text()="${Label}"]`);
  }

  ele_lblH3Header(Label) {
    return $(`//h3[text()="${Label}"]`);
  }

  ele_lblH4Header(Label) {
    return $(`//h4[text()="${Label}"]`);
  }

  lnk_Navigation(Label) {
    return $(`//a[text()='${Label}']`);
  }

  ele_lblParagraph(TextValue) {
    return $(`//p[text()='${TextValue}']`);
  }
}

export default new CommonPage();
