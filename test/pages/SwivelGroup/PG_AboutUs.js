class AboutUs {
  /**
   * define selectors using getter methods
   */
  ele_lblH4Header(subHeader) {
    return $(`//h4[text()="${subHeader}"]`);
  }

  ele_lblH4HeaderWithDescription(subHeader, description) {
    return $(
      `//h4[text()="${subHeader}"]/../following-sibling::div[1]/div[1]/p[text()="${description}"]`,
    );
  }

  ele_lblH4HeaderWithDescriptionInBottom(subHeader, description) {
    return $(
      `//h4[text()="${subHeader}"]/following-sibling::p[text()="${description}"]`,
    );
  }

  ele_lblH4HeaderWithDescriptionForOurClient(subHeader, description) {
    return $(
      `//h4[text()="${subHeader}"]/../following-sibling::div[1]/p[text()="${description}"]`,
    );
  }

  ele_lblLeadershipPersonName(name) {
    return $(`//div[@class='leadership-designation']/p[text()='${name}']`);
  }

  ele_lblLeadershipPersonNameWithDesignation(name, Designation) {
    return $(
      `//div[@class='leadership-designation']/p[text()='${name}']/following-sibling::p[text()="${Designation}"]`,
    );
  }

  lnk_LeadershipPersonNameWithDesignationLinkedIn(name, Designation) {
    return $(
      `//p[text()='${name}']/following-sibling::p[text()="${Designation}"]/../following-sibling::div[@class='leadership-icon']/a`,
    );
  }
}
export default new AboutUs();
