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

  ele_lblFAQsQuestionsTitle(Question) {
    return $(`//div[contains(text(),"${Question}")]`);
  }

  ele_lblFAQsQuestionsTitleWithArrow(Question) {
    return $(`//div[contains(text(),"${Question}")]/following-sibling::div`);
  }

  ele_lblFAQsQuestionsTitleWithAnswers(Question, Answers) {
    return $(
      `//div[contains(text(),"${Question}")]/../following-sibling::div[contains(.,"${Answers}")]`,
    );
  }

  ele_lblFAQsQuestionsTitleGetTheAnswers(Question) {
    return $(
      `//div[contains(text(),"${Question}")]/../following-sibling::div[1]`,
    );
  }

  ele_lblH5Header(Header) {
    return $(`//h5[contains(text(),"${Header}")]`);
  }

  ele_lblBenefitsDescription(Header, Description) {
    return $(
      `//h5[contains(text(),"${Header}")]/following-sibling::p[contains(text(),"${Description}")]`,
    );
  }
}

export default new HowWeWorkPage();
