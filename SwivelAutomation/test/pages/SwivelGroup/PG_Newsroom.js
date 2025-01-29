class Newsroom {
  /**
   * define selectors using getter methods
   */
  get ele_lblSocialClubEvents() {
    return $(
      '//p[text()="Social Club Events" and @class="newsroom-banner-header-title"]',
    );
  }

  ele_lblTopDescription(description) {
    return $(
      `//p[text()="${description}" and @class="newsroom-header-description"]`,
    );
  }

  ele_lblH3Header(subHeader) {
    return $(`//h3[text()="${subHeader}"]`);
  }

  ele_lblArticleDescription(subHeader, description) {
    return $(
      `//h3[text()="${subHeader}"]/following-sibling::span[text()="${description}"]`,
    );
  }

  ele_lblH4Header(subHeader) {
    return $(`//h4[text()="${subHeader}"]`);
  }

  ele_lblH4HeaderWithDescription(subHeader, description) {
    return $(
      `//h4[text()="${subHeader}"]/following-sibling::p[text()="${description}"]`,
    );
  }

  ele_lblSubDescription(description) {
    return $(`//span[text()="${description}"]`);
  }
}
export default new Newsroom();
