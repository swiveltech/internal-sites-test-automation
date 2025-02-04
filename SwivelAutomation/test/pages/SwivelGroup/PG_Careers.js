class Careers {
  /**
   * define selectors using getter methods
   */
  ele_lblTopHeaderWithDescription(title, description) {
    return $(
      `//h1[text()="${title}"]/following-sibling::span[text()="${description}"]`,
    );
  }

  get img_Pegging() {
    return $(`//img[contains(@alt,'pegging_')]`);
  }

  get img_FlexHours() {
    return $(`//img[contains(@alt,'Flex_hours_')]`);
  }

  get img_HealthInsurance() {
    return $(`//img[contains(@alt,'Health_insuarance_')]`);
  }

  get img_LeaveBenefits() {
    return $(`//img[contains(@alt,'work_benefits_')]`);
  }

  get img_LearningAndDevelopment() {
    return $(`//img[contains(@alt,'learning_development_')]`);
  }

  get img_EmpoweringIndividuals() {
    return $(`//img[contains(@alt,'empowering')]`);
  }

  get lnk_ShowMore() {
    return $(`//span[text()='Show More ']`);
  }

  ele_lblOurBenefitsSubtitleTiles(title) {
    return $(`//img/following-sibling::span[text()='${title}']`);
  }

  ele_lblOurBenefitsDescriptionTiles(title, description) {
    return $(
      `//img/following-sibling::span[text()='${title}']/following-sibling::span[text()='${description}']`,
    );
  }

  get tf_SearchForJob() {
    return $(`//div[@id='job-openings']/div[2]/div/input`);
  }

  get ele_lblSearchRecord() {
    return $(`//div[@id='job-openings']/div[4]`);
  }
}
export default new Careers();
