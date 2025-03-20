class CommonPage {
  /**
   * define selectors using getter methods
   */
  lbl_PageHeader(PageHeader, Index) {
    return $(
      `(//*[contains(normalize-space(text()), "${PageHeader}")])[${Index}]`,
    );
  }

  lbl_PageHeaderSingle(PageHeader, Index) {
    return $(
      `(//*[contains(normalize-space(text()), '${PageHeader}')])[${Index}]`,
    );
  }

  btn_ButtonWithLabel(Label, Index) {
    return $(`(//button[text()="${Label}"])[${Index}]`);
  }

  lbl_H1Header(Label) {
    return $(`//h1[contains(text(),"${Label}")]`);
  }

  lbl_H1HeaderWithDot(Label) {
    return $(`//h1[contains(.,"${Label}")]`);
  }

  lbl_H2Header(Label) {
    return $(`//h2[contains(text(),"${Label}")]`);
  }

  lbl_H3Header(Label) {
    return $(`//h3[contains(text(),"${Label}")]`);
  }

  lbl_H4Header(Label) {
    return $(`//h4[contains(text(),"${Label}")]`);
  }

  lbl_H5Header(Label) {
    return $(`//h5[contains(text(),"${Label}")]`);
  }

  lbl_H6Header(Label) {
    return $(`//h6[contains(text(),"${Label}")]`);
  }

  lnk_Navigation(Label) {
    return $(`//a[text()='${Label}']`);
  }

  lbl_Paragraph(TextValue) {
    return $(`//p[contains(text(),"${TextValue}")][1]`);
  }

  lbl_PageHeaderWithDot(PageHeader, Index) {
    return $(`(//*[contains(normalize-space(.), "${PageHeader}")])[${Index}]`);
  }
}

export default new CommonPage();
