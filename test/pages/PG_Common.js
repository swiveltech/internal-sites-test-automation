class CommonPage {
  /**
   * define selectors using getter methods
   */
  ele_lblPageHeader(PageHeader, Index) {
    return $(
      `(//*[contains(normalize-space(text()), "${PageHeader}")])[${Index}]`,
    );
  }

  ele_lblPageHeaderWithText(PageHeader, Index) {
    return $(
      `(//*[contains(normalize-space(text()), '${PageHeader}')])[${Index}]`,
    );
  }

  btn_ButtonWithLabel(Label, Index) {
    return $(`(//button[text()="${Label}"])[${Index}]`);
  }

  ele_lblH1Header(Label) {
    return $(`//h1[contains(text(),"${Label}")]`);
  }

  ele_lblH1HeaderWithDot(Label) {
    return $(`//h1[contains(.,"${Label}")]`);
  }

  ele_lblH2Header(Label) {
    return $(`//h2[contains(text(),"${Label}")]`);
  }

  ele_lblH3Header(Label) {
    return $(`//h3[contains(text(),"${Label}")]`);
  }

  ele_lblH4Header(Label) {
    return $(`//h4[contains(text(),"${Label}")]`);
  }

  ele_lblH5Header(Label) {
    return $(`//h5[contains(text(),"${Label}")]`);
  }

  lnk_Navigation(Label) {
    return $(`//a[text()='${Label}']`);
  }

  ele_lblParagraph(TextValue) {
    return $(`//p[contains(text(),"${TextValue}")][1]`);
  }
}

export default new CommonPage();
