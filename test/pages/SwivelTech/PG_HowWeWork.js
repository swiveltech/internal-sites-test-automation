class HowWeWorkPage {
  /**
   * define selectors using getter methods
   */
  lbl_StepHeader(StepNumber, Header) {
    return $(
      `//p[text()="Step"]/following-sibling::span[text()="${StepNumber}"]/../following-sibling::div/h2[contains(text(),"${Header}")]`,
    );
  }

  lbl_StepHeaderWithDescription(StepNumber, Header, Description) {
    return $(
      `//p[text()="Step"]/following-sibling::span[text()="${StepNumber}"]/../following-sibling::div/h2[contains(text(),"${Header}")]/following-sibling::p[contains(text(),"${Description}")]`,
    );
  }

  lbl_FAQsQuestionsTitle(Question) {
    return $(`//div[contains(text(),"${Question}")]`);
  }

  lbl_FAQsQuestionsTitleWithArrow(Question) {
    return $(`//div[contains(text(),"${Question}")]/following-sibling::div`);
  }

  lbl_FAQsQuestionsTitleWithAnswers(Question, Answers) {
    return $(
      `//div[contains(text(),"${Question}")]/../following-sibling::div[contains(.,"${Answers}")]`,
    );
  }

  lbl_FAQsQuestionsTitleGetTheAnswers(Question) {
    return $(
      `//div[contains(text(),"${Question}")]/../following-sibling::div[1]`,
    );
  }

  lbl_FAQsQuestionsTitleGetTheAnswersInSameLevel(Question) {
    return $(`//div[contains(text(),"${Question}")]/following-sibling::div[1]`);
  }

  lbl_H5Header(Header) {
    return $(`//h5[contains(text(),"${Header}")]`);
  }

  lbl_BenefitsDescription(Header, Description) {
    return $(
      `//h5[contains(text(),"${Header}")]/following-sibling::p[contains(text(),"${Description}")]`,
    );
  }
}

export default new HowWeWorkPage();
