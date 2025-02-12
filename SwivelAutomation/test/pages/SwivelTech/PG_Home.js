class HomePage {
  /**
   * define selectors using getter methods
   */
  get img_SwivelTechLogo() {
    return $('(//img[@alt="Swivel Logo"]/..)[1]');
  }

  ele_HeaderTab(tabName) {
    return $(`(//nav[@id='header']/div/ul/li/a/span[text()='${tabName}'])[1]`);
  }

  ele_ContactNumber(contactNumber) {
    return $(
      `//span[@class='phone-icon']/following-sibling::span[text()='${contactNumber}']`,
    );
  }

  get btn_LetsTalk() {
    return $(`//div[contains(@class,"flex")]/a[2]/button[text()="Let’s Talk"]`);
  }

  ele_lblServicesWithCount(text, count) {
    return $(
      `//div[text()="${text}"]/parent::div/div[1]/span[text()="${count}"]`,
    );
  }

  lnk_SoftwareSolutionsWeDeliver(softwareSolutions) {
    return $(
      `//h5[text()="${softwareSolutions}"]/following-sibling::div[1]/button[text()="LEARN MORE"]/ancestor::a[1]`,
    );
  }

  ele_lblHowWeWorks(title) {
    return $(
      `//img[@alt="how-we-works"]/following-sibling::h5[text()="${title}"]/following-sibling::div`,
    );
  }

  get icn_AccessTheBestTalentInTheIndustry() {
    return $(`//img[@alt="Access the Best Talent in the Industry "]`);
  }
}

export default new HomePage();
