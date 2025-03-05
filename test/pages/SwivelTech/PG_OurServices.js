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

  ele_lblPersonNameWithJob(Name, Job) {
    return $(
      `//h6[contains(text(),"${Name}")]/../following-sibling::p[contains(text(),"${Job}")]`,
    );
  }

  ele_lblPersonNameWithJobAndDescription(Name, Job, Description) {
    return $(
      `//h6[contains(text(),"${Name}")]/../following-sibling::p[contains(text(),"${Job}")]/following-sibling::p[contains(normalize-space(.), "${Description}")]`,
    );
  }

  ele_SuccessfulProjectTile(Title, Description) {
    return $(
      `//h4[contains(text(),"${Title}")]/../following-sibling::div/p[contains(text(),"${Description}")]`,
    );
  }

  lnk_SuccessfulProjectTileReadMore(Title) {
    return $(
      `//h4[contains(text(),"${Title}")]/../following-sibling::div/div/div/a/button[text()='Read More']/..`,
    );
  }
}

export default new OurServicesPage();
