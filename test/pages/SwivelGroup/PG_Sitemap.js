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

  get lnk_Donate() {
    return $(`(//a[text()='DONATE'])[1]`);
  }
}
export default new Sitemap();
