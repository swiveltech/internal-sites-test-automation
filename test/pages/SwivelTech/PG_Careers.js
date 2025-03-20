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

  get lbl_FirstRecordInTable() {
    return $(
      `(//input[@name="searchTerm"]/../following-sibling::div/div[@class="rooster-job"]/a/h3)[1]`,
    );
  }

  get lnk_FirstRecordInTable() {
    return $(
      `(//input[@name="searchTerm"]/../following-sibling::div/div[@class="rooster-job"]/a)[1]`,
    );
  }
}

export default new CareersPage();
