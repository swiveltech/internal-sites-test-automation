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

  get ele_AccessTheBestTalentInTheIndustryTitle() {
    return $(
      `//img[@alt="Access the Best Talent in the Industry "]/../following-sibling::div/h5[text()="Access the Best Talent in the Industry "]`,
    );
  }

  ele_AccessTheBestTalentInTheIndustryDescription(Description) {
    return $(
      `//img[@alt="Access the Best Talent in the Industry "]/../following-sibling::div/h5[text()="Access the Best Talent in the Industry "]/../following-sibling::p[text()="${Description}"]`,
    );
  }

  get icn_RobustEmployeePerformanceManagement() {
    return $(`//img[@alt="Robust Employee Performance Management"]`);
  }

  get ele_RobustEmployeePerformanceManagementTitle() {
    return $(
      `//img[@alt="Robust Employee Performance Management"]/../following-sibling::div/h5[text()="Robust Employee Performance Management"]`,
    );
  }

  ele_RobustEmployeePerformanceManagementDescription(Description) {
    return $(
      `//img[@alt="Robust Employee Performance Management"]/../following-sibling::div/h5[text()="Robust Employee Performance Management"]/../following-sibling::p[text()="${Description}"]`,
    );
  }

  get icn_AgileApproachToSoftwareDevelopment() {
    return $(`//img[@alt="Agile Approach to Software Development "]`);
  }

  get ele_AgileApproachToSoftwareDevelopmentTitle() {
    return $(
      `//img[@alt="Agile Approach to Software Development "]/../following-sibling::div/h5[text()="Agile Approach to Software Development "]`,
    );
  }

  ele_AgileApproachToSoftwareDevelopmentDescription(Description) {
    return $(
      `//img[@alt="Agile Approach to Software Development "]/../following-sibling::div/h5[text()="Agile Approach to Software Development "]/../following-sibling::p[text()="${Description}"]`,
    );
  }

  get icn_EliminateOverheadCosts() {
    return $(`//img[@alt="Eliminate Overhead Costs"]`);
  }

  get ele_EliminateOverheadCostsTitle() {
    return $(
      `//img[@alt="Eliminate Overhead Costs"]/../following-sibling::div/h5[text()="Eliminate Overhead Costs"]`,
    );
  }

  ele_EliminateOverheadCostsDescription(Description) {
    return $(
      `//img[@alt="Eliminate Overhead Costs"]/../following-sibling::div/h5[text()="Eliminate Overhead Costs"]/../following-sibling::p[text()="${Description}"]`,
    );
  }

  icn_WhatOurClientSay(ClientName) {
    return $(`//img[@alt="${ClientName}"]`);
  }

  ele_lblWhatOurClientSayWithName(ClientName) {
    return $(
      `//img[@alt="${ClientName}"]/../../div[2]/div/h6[text()="${ClientName}"]`,
    );
  }

  ele_lblWhatOurClientSayWithNameDesignation(ClientName, Designation) {
    return $(
      `//img[@alt="${ClientName}"]/../../div[2]/div/h6[text()="${ClientName}"]/../following-sibling::p[text()='${Designation}']`,
    );
  }

  ele_lblWhatOurClientSayWithNameDesignationAndDescription(
    ClientName,
    Designation,
    Description,
  ) {
    return $(
      `//img[@alt="${ClientName}"]/../../div[2]/div/h6[text()="${ClientName}"]/../following-sibling::p[text()='${Designation}']/following-sibling::p[text()="${Description}"]`,
    );
  }

  ele_SuccessfulProjectTile(Title, Description) {
    return $(
      `//p[text()="${Title}"]/../following-sibling::div/p[text()="${Description}"]`,
    );
  }

  lnk_SuccessfulProjectTileReadMore(Title) {
    return $(
      `//p[text()="${Title}"]/../following-sibling::div[2]/a/button[text()='Read More']/..`,
    );
  }
}

export default new HomePage();
