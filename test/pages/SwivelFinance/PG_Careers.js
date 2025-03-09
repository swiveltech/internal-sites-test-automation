class CareersPage {
  /**
   * define selectors using getter methods
   */
  ele_lblOurBenefitsWithDescription(Title, Description) {
    return $(
      `//div[contains(text(),"${Title}")]/following-sibling::div[contains(normalize-space(), "${Description}")]`,
    );
  }

  get tf_SearchBox() {
    return $(
      `//h1[contains(text(),"OUR JOB OPENINGS")]/following-sibling::div/div/input`,
    );
  }

  get ele_lblGetFirstRecord() {
    return $(`(//div[@class="flex flex-col gap-8"]/div/h2/a)[1]`);
  }
}

export default new CareersPage();
