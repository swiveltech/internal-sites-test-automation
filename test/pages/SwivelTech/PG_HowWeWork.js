class HowWeWorkPage {
  /**
   * define selectors using getter methods
   */
  ele_lblStepHeader(StepNumber, Header) {
    return $(
      `//p[text()="Step"]/following-sibling::span[text()="${StepNumber}"]/../following-sibling::div/h2[contains(text(),"${Header}")]`,
    );
  }

  ele_lblStepHeaderWithDescription(StepNumber, Header, Description) {
    return $(
      `//p[text()="Step"]/following-sibling::span[text()="${StepNumber}"]/../following-sibling::div/h2[contains(text(),"${Header}")]/following-sibling::p[contains(text(),"${Description}")]`,
    );
  }
}

export default new HowWeWorkPage();
