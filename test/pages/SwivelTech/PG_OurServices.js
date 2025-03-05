class OurServicesPage {
  /**
   * define selectors using getter methods
   */

  ele_OurSoftwareDevelopmentServicesDescription(Header, Description) {
    return $(
      `//h5[contains(text(),"${Header}")]/following-sibling::p[contains(normalize-space(),"${Description}")]`,
    );
  }

  lnk_OurSoftwareDevelopmentServicesLearnMore(Header) {
    return $(
      `//h5[contains(text(),"${Header}")]/following-sibling::a/button[text()="LEARN MORE"]/..`,
    );
  }

  ele_lblH5Title(Header) {
    return $(`//h5[contains(normalize-space(),"${Header}")]`);
  }

  ele_lblDescriptionOfEntrustYourCorporateSoftwareDevelopmentNeedsToUs(
    Header,
    Description,
  ) {
    return $(
      `//h5[contains(normalize-space(),"${Header}")]/../following-sibling::p[contains(normalize-space(),"${Description}")]`,
    );
  }
}

export default new OurServicesPage();
