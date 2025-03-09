class AboutUsPage {
  /**
   * define selectors using getter methods
   */
  ele_lblCountWithLabel(Count, Label) {
    return $(
      `//h1[text()="${Count}"]/span[text()="+"]/../following-sibling::h2[contains(text(),"${Label}")]`,
    );
  }

  ele_lblLeaderName(Name) {
    return $(`//h2[contains(text(),"${Name}")]`);
  }

  ele_lblLeaderNameWithJob(Name, Job) {
    return $(
      `//h2[contains(text(),"${Name}")]/following-sibling::h5[contains(text(),"${Job}")]`,
    );
  }

  lnk_LeaderLinkedInProfile(Name) {
    return $(`//h2[contains(text(),"${Name}")]/../following-sibling::div/a[2]`);
  }

  ele_lblLeaderNameWithDescription(Name, Description) {
    return $(
      `//h2[contains(text(),"${Name}")]/../../following-sibling::div/p[contains(normalize-space(), "${Description}")]`,
    );
  }

  ele_lblOurTeamCultureDescription(Title, Description) {
    return $(
      `//h3[contains(text(),"${Title}")]/../../div/p[contains(normalize-space(), "${Description}")]`,
    );
  }
}

export default new AboutUsPage();
