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

  ele_lblOurBenefitsSubtitleTiles(title) {
    return $(`//img/following-sibling::span[text()='${title}']`);
  }

  ele_lblOurBenefitsDescriptionTiles(title, description) {
    return $(
      `//img/following-sibling::span[text()='${title}']/following-sibling::span[text()='${description}']`,
    );
  }
}
export default new Careers();
