class Sitemap {
  /**
   * define selectors using getter methods
   */
  lnk_SubOptionInBottom(title, option) {
    return $(
      `//p[text()="${title}"]/following-sibling::div/a/p[text()="${option}"]`,
    );
  }

  lnk_SubOptionInBottomToGetLink(title, option) {
    return $(
      `//p[text()="${title}"]/following-sibling::div/a/p[text()="${option}"]/..`,
    );
  }

  get ele_HamburgerIcon() {
    return $(`//a[@aria-label="mobile menu"]`);
  }
}
export default new Sitemap();
