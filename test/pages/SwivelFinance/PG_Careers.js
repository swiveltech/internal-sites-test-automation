class CareersPage {
  /**
   * define selectors using getter methods
   */
  lbl_OurBenefitsWithDescription(Title, Description) {
    return $(
      `//div[contains(text(),"${Title}")]/following-sibling::div[contains(normalize-space(), "${Description}")]`,
    );
  }

  get tf_SearchBox() {
    return $(
      `//h2[contains(text(),"OUR JOB OPENINGS")]/following-sibling::div/div/div/input`,
    );
  }

  get lbl_GetFirstRecord() {
    return $(`(//div[@class="flex flex-col gap-8"]/div/h2/a)[1]`);
  }
}

export default new CareersPage();
