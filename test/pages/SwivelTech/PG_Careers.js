class CareersPage {
  /**
   * define selectors using getter methods
   */
  ele_OurBenefitsDescription(Label, Description) {
    return $(
      `//h3[text()='${Label}']/following-sibling::p[text()='${Description}']`,
    );
  }

  get tf_SearchForJobs() {
    return $(`//input[@name="searchTerm"]`);
  }

  get ele_lblSearchRecord() {
    return $(
      `//input[@name="searchTerm"]/../following-sibling::div/div[@data-job-department="Development"]`,
    );
  }
}

export default new CareersPage();
