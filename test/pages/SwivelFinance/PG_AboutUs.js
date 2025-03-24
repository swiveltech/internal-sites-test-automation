class AboutUsPage {
  /**
   * define selectors using getter methods
   */
  lbl_CountWithLabel(Count, Label) {
    return $(
      `//span[text()="${Count}"]/span[text()="+"]/../following-sibling::h4[contains(text(),"${Label}")]`,
    );
  }

  lbl_LeaderName(Name) {
    return $(`//h2[contains(text(),"${Name}")]`);
  }

  lbl_LeaderNameWithJob(Name, Job) {
    return $(
      `//h2[contains(text(),"${Name}")]/following-sibling::h5[contains(text(),"${Job}")]`,
    );
  }

  lnk_LeaderLinkedInProfile(Name) {
    return $(`//h2[contains(text(),"${Name}")]/../following-sibling::div/a[2]`);
  }

  lbl_LeaderNameWithDescription(Name, Description) {
    return $(
      `//h2[contains(text(),"${Name}")]/../../following-sibling::div/p[contains(normalize-space(), "${Description}")]`,
    );
  }

  lbl_OurTeamCultureDescription(Title, Description) {
    return $(
      `//h3[contains(text(),"${Title}")]/../../div/p[contains(normalize-space(), "${Description}")]`,
    );
  }
}

export default new AboutUsPage();
