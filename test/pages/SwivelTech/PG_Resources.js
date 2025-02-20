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
}

export default new ResourcesPage();
