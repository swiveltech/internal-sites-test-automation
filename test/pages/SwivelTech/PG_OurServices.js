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

  lbl_H5Title(Header) {
    return $(`//h5[contains(normalize-space(),"${Header}")]`);
  }

  lbl_DescriptionOfEntrustYourCorporateSoftwareDevelopmentNeedsToUs(
    Header,
    Description,
  ) {
    return $(
      `//h5[contains(normalize-space(),"${Header}")]/../following-sibling::p[contains(normalize-space(),"${Description}")]`,
    );
  }

  lbl_PersonNameWithJob(Name, Job) {
    return $(
      `//h6[contains(text(),"${Name}")]/../following-sibling::p[contains(text(),"${Job}")]`,
    );
  }

  lbl_PersonNameWithJobAndDescription(Name, Job, Description) {
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
