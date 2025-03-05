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
}

export default new OurServicesPage();
