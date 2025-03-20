class AboutUs {
  /**
   * define selectors using getter methods
   */
  lbl_H4Header(subHeader) {
    return $(`//h4[text()="${subHeader}"]`);
  }

  lbl_H4HeaderWithDescription(subHeader, description) {
    return $(
      `//h4[text()="${subHeader}"]/../following-sibling::div[1]/div[1]/p[text()="${description}"]`,
    );
  }

  lbl_H4HeaderWithDescriptionInBottom(subHeader, description) {
    return $(
      `//h4[text()="${subHeader}"]/following-sibling::p[text()="${description}"]`,
    );
  }

  lbl_H4HeaderWithDescriptionForOurClient(subHeader, description) {
    return $(
      `//h4[text()="${subHeader}"]/../following-sibling::div[1]/p[text()="${description}"]`,
    );
  }

  lbl_LeadershipPersonName(name) {
    return $(`//div[@class='leadership-designation']/p[text()='${name}']`);
  }

  lbl_LeadershipPersonNameWithDesignation(name, Designation) {
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
