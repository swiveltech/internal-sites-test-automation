class AboutUsPage {
  /**
   * define selectors using getter methods
   */
  ele_lblCountWithLabel(Count, Label) {
    return $(
      `//h1[text()="${Count}"]/span[text()="+"]/../following-sibling::h2[contains(text(),"${Label}")]`,
    );
  }
}

export default new AboutUsPage();
