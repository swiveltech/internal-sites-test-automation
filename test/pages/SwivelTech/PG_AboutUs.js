class AboutUs {
  /**
   * define selectors using getter methods
   */
  ele_HowWeGrewOverTheYears(Year, Message) {
    return $(
      `//h5[contains(text(),"${Year}")]/following-sibling::p[contains(.,"${Message}")]`,
    );
  }

  icn_OurBusiness(Picture) {
    return $(`//img[@alt="${Picture}"]`);
  }

  lbl_OurBusinessSubTitle(Picture, Title) {
    return $(
      `//img[@alt="${Picture}"]/../following-sibling::div/h2[contains(.,"${Title}")]`,
    );
  }

  lbl_OurBusinessSubTitleAndDescription(Picture, Title, Description) {
    return $(
      `//img[@alt="${Picture}"]/../following-sibling::div/h2[contains(.,"${Title}")]/following-sibling::p[contains(.,"${Description}")]`,
    );
  }

  ele_LeaderName(Picture, Name) {
    return $(
      `//img[@alt="${Picture}"]/../following-sibling::div/div/h2[contains(.,"${Name}")]`,
    );
  }

  ele_LeaderNameWithJob(Picture, Name, Job) {
    return $(
      `//img[@alt="${Picture}"]/../following-sibling::div/div/h2[contains(.,"${Name}")]/following-sibling::h5[contains(.,"${Job}")]`,
    );
  }

  ele_LeaderLinkedIn(Picture) {
    return $(`//img[@alt="${Picture}"]/../following-sibling::div/div[2]/a`);
  }

  ele_LeaderDescription(Picture, Description) {
    return $(
      `//img[@alt="${Picture}"]/../following-sibling::div[2]/p[contains(.,"${Description}")]`,
    );
  }

  ele_OurTeamCultureDescription(Title, Description) {
    return $(
      `//h2[contains(text(),"${Title}")]/following-sibling::div/p[contains(.,"${Description}")]`,
    );
  }
}

export default new AboutUs();
