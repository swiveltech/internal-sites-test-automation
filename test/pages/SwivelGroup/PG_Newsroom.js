class Newsroom {
  /**
   * define selectors using getter methods
   */
  get lbl_SocialClubEvents() {
    return $(
      '//p[text()="Social Club Events" and @class="newsroom-banner-header-title"]',
    );
  }

  lbl_TopDescription(description) {
    return $(
      `//p[text()="${description}" and @class="newsroom-header-description"]`,
    );
  }

  lbl_H3Header(subHeader) {
    return $(`//h3[text()="${subHeader}"]`);
  }

  lbl_ArticleDescription(subHeader, description) {
    return $(
      `//h3[text()="${subHeader}"]/following-sibling::span[text()="${description}"]`,
    );
  }

  lbl_H4Header(subHeader) {
    return $(`//h4[text()="${subHeader}"]`);
  }

  lbl_H4HeaderWithDescription(subHeader, description) {
    return $(
      `//h4[text()="${subHeader}"]/following-sibling::p[text()="${description}"]`,
    );
  }

  lbl_SubDescription(description) {
    return $(`//span[text()="${description}"]`);
  }
}
export default new Newsroom();
