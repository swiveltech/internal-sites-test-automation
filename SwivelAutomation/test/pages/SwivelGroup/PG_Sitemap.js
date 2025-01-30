class Sitemap {
  /**
   * define selectors using getter methods
   */
  lnk_SubOptionInBottom(title, option) {
    return $(
      `//p[text()="${title}"]/following-sibling::div/a/p[text()="${option}"]`,
    );
  }
}
export default new Sitemap();
