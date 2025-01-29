class Careers {
  /**
   * define selectors using getter methods
   */
  ele_lblTopHeaderWithDescription(title, description) {
    return $(
      `//h1[text()="${title}"]/following-sibling::span[text()="${description}"]`,
    );
  }
}
export default new Careers();
