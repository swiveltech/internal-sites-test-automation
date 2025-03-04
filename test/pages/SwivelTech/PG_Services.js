class ServicesPage {
  /**
   * define selectors using getter methods
   */
  ele_WhyChooseSwivelTechForAIConsultingServicesDescription(
    Header,
    Description,
  ) {
    return $(
      `//h2[contains(text(),"${Header}")]/../following-sibling::div/p[contains(normalize-space(),"${Description}")]`,
    );
  }

  icn_Image(Image) {
    return $(`//img[@alt="${Image}"]`);
  }

  ele_BenefitsOfChoosingThisOptionDescription(Header, Description) {
    return $(
      `//h5[contains(text(),"${Header}")]/following-sibling::p[contains(normalize-space(),"${Description}")]`,
    );
  }
}

export default new ServicesPage();
