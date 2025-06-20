class ServicesPage {
    lbl_CountWithLabel(Count, Label) {
      return $(`//span[text()="${Count}"]/following-sibling::h4[contains(text(),"${Label}")]`);
    }

    lbl_StepHeader(StepNumber, Header) {
      return $(`//p[text()="Step"]/following-sibling::span[text()="${StepNumber}"]/ancestor::div[contains(@class, "step-number-box")]/following-sibling::div[contains(@class, "step-content")]/h2[contains(text(),"${Header}")]`);
    }
      
    lbl_StepHeaderWithDescription(StepNumber, Header, Description) {
      return $(`//p[text()="Step"]/following-sibling::span[text()="${StepNumber}"]/ancestor::div[contains(@class, "step-number-box")]/following-sibling::div[contains(@class, "step-content")]/h2[contains(text(),"${Header}")]/following-sibling::p[contains(text(),"${Description}")]`);
    }

    lbl_SuccessfulClientProjectDescription(Title, Description) {
      return $(
        `//p[text()='${Title}']/following-sibling::p[text()='${Description}']`,
      );
    }

    lnk_SuccessfulClientProjectReadMore(Title, Description) {
      return $(
        `//p[text()='${Title}']/following-sibling::p[text()='${Description}']/following-sibling::a/div/p[text()='Read More']/../..`,
      );
    }

    lbl_FAQsQuestionsTitle(Question) {
      return $(`//div[contains(text(),"${Question}")]`);
    }

    lbl_FAQsQuestionsTitleWithArrow(Question) {
      return $(`//div[contains(text(),"${Question}")]/following-sibling::div`);
    }

    lbl_FAQsAnswerContent(Question) {
      return $(`//div[contains(text(),"${Question}")]/ancestor::div[contains(@class,'faq')]//div[contains(@class,'px-4') and contains(@class,'pb-4')]`);
    }

    lbl_FAQContainer(Question) {
      return $(`//div[contains(text(),"${Question}")]/ancestor::div[contains(@class,'faq')]`);
    }
          
}
  
export default new ServicesPage();  