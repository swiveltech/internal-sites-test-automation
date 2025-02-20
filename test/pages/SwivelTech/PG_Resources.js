class ResourcesPage {
  /**
   * define selectors using getter methods
   */
  ele_lblH6Header(Label) {
    return $(`//h6[contains(text(),"${Label}")]`);
  }
}

export default new ResourcesPage();
