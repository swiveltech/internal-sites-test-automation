class ResourcesPage {
  /**
   * define selectors using getter methods
   */
  ele_lblH6Header(Label) {
    return $(`//h6[contains(text(),"${Label}")]`);
  }

  ele_CategoriesOptions(Label, Option) {
    return $(
      `//h6[text()='${Label}']/following-sibling::div[1]/button[text()='${Option}']`,
    );
  }

  ele_CategoriesTile(Title, Description) {
    return $(
      `//h4[text()="${Title}"]/../following-sibling::div/p[contains(.,"${Description}")]`,
    );
  }
  ele_CategoriesTile3Text(Title, Description1, Description2, Description3) {
    return $(
      `//h4[text()="${Title}"]/../following-sibling::div/p[contains(.,"${Description1}") and contains(., "${Description2}") and contains(., "${Description3}")]`,
    );
  }

  lnk_CategoriesTileReadMore3Text(
    Title,
    Description1,
    Description2,
    Description3,
  ) {
    return $(
      `//h4[text()="${Title}"]/../following-sibling::div/p[contains(.,"${Description1}") and contains(., "${Description2}") and contains(., "${Description3}")]/following-sibling::div/div/a/button[text()="Read More"]/..`,
    );
  }
  lnk_CategoriesTileReadMore(Title, Description) {
    return $(
      `//h4[text()="${Title}"]/../following-sibling::div/p[contains(.,"${Description}")]/following-sibling::div/div/a/button[text()="Read More"]/..`,
    );
  }
}

export default new ResourcesPage();
