class HomePage {
  /**
   * define selectors using getter methods
   */
  get img_SwivelTechLogo() {
    return $('(//img[@alt="Swivel Logo"]/..)[1]');
  }

  get img_SwivelTechLogoInFooter() {
    return $('(//img[@alt="Swivel Logo"]/..)[2]');
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

  lbl_ServicesWithCount(text, count) {
    return $(
      `//div[contains(text(),'${text}')]/parent::div/div[1]/span[contains(text(),'${count}')]`,
    );
  }

  lnk_SoftwareSolutionsWeDeliver(softwareSolutions) {
    return $(
      `//h5[contains(text(),"${softwareSolutions}")]/following-sibling::div[1]/button[text()="LEARN MORE"]/ancestor::a[1]`,
    );
  }

  lbl_HowWeWorks(title) {
    return $(
      `//img[@alt="how-we-works"]/following-sibling::h5[contains(text(),"${title}")]/following-sibling::div`,
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
      `//img[@alt="Robust Employee Performance Management"]/../following-sibling::div/h5[text()="Robust Employee Performance Management"]/../following-sibling::p[contains(text(),"${Description}")]`,
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
      `//img[@alt="Agile Approach to Software Development "]/../following-sibling::div/h5[text()="Agile Approach to Software Development "]/../following-sibling::p[contains(text(),"${Description}")]`,
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
      `//img[@alt="Eliminate Overhead Costs"]/../following-sibling::div/h5[text()="Eliminate Overhead Costs"]/../following-sibling::p[contains(text(),"${Description}")]`,
    );
  }

  icn_WhatOurClientSay(ClientName) {
    return $(`//img[contains(@alt,"${ClientName}")]`);
  }

  lbl_WhatOurClientSayWithName(ClientName) {
    return $(
      `//img[contains(@alt,"${ClientName}")]/../../div[2]/div/h6[contains(text(),"${ClientName}")]`,
    );
  }

  lbl_WhatOurClientSayWithNameDesignation(ClientName, Designation) {
    return $(
      `//img[contains(@alt,"${ClientName}")]/../../div[2]/div/h6[contains(text(),"${ClientName}")]/../following-sibling::p[contains(text(),'${Designation}')]`,
    );
  }

  lbl_WhatOurClientSayWithNameDesignationAndDescription(
    ClientName,
    Designation,
    Description,
  ) {
    return $(
      `//img[contains(@alt,"${ClientName}")]/../../div[2]/div/h6[contains(text(),"${ClientName}")]/../following-sibling::p[contains(text(),'${Designation}')]/following-sibling::p[contains(text(),"${Description}")]`,
    );
  }

  ele_SuccessfulProjectTile(Title, Description) {
    return $(
      `//p[contains(text(),"${Title}")]/../following-sibling::div/p[contains(text(),"${Description}")]`,
    );
  }

  lnk_SuccessfulProjectTileReadMore(Title) {
    return $(
      `//p[contains(text(),"${Title}")]/../following-sibling::div[2]/a/button[text()='Read More']/..`,
    );
  }

  lbl_OurLatestInsights(Title, Category, DateInSystem) {
    return $(
      `//h4[contains(text(),'${Title}')]/following-sibling::div[contains(.,'${Category}')]/following-sibling::div/span[contains(text(),'${DateInSystem}')]`,
    );
  }
  lbl_LatestDescription(Description) {
    return $(`//p[text()[normalize-space() = "${Description}"]]`);
  }

  lbl_DescriptionToMatchAllInPTag(Description) {
    return $(`//p[contains(., "${Description}")]`);
  }

  lbl_LatestDescriptionReadMoreInP(Description) {
    return $(
      `//p[contains(., "${Description}")]/following-sibling::div/div/a/button[text()='READ MORE']/..`,
    );
  }
  lbl_LatestDescriptionReadMore(Description) {
    return $(
      `//p[text()[normalize-space() = "${Description}"]]/following-sibling::div/div/a/button[text()='READ MORE']/..`,
    );
  }
  lnk_FooterOption(Header, Option) {
    return $(
      `//h4[contains(text(),'${Header}')]/following-sibling::ul/li/a[text()='${Option}']`,
    );
  }

  lbl_H1WithNormalizeSpace(Description) {
    return $(`//h1[text()[normalize-space() = "${Description}"]]`);
  }

  get tf_EmailForOurNewsletter() {
    return $(`//input[@id="email"]`);
  }

  lbl_ErrorMessageUnderEmail(Message) {
    return $(
      `//input[@id="email"]/following-sibling::div/div[text()="${Message}"]`,
    );
  }

  lbl_ThankYouSigningUp(Message) {
    return $(
      `//input[@id="email"]/../../../following-sibling::div/div/span[text()="${Message}"]`,
    );
  }

  lnk_SocialMedia(Index) {
    return $(`//div[@class="social-area flex flex-col"]/div[1]/a[${Index}]`);
  }

  get lbl_Year() {
    return $(`(//div[contains(text(),"Years in Business")])[1]`);
  }

  get ele_HamburgerIcon() {
    return $(`(//button[@aria-controls='navbar-default'])[1]`);
  }

  ele_MainItemArrowDown(Option) {
    return $(
      `(//a[text()='${Option}']/following-sibling::button/*[@class="transition-transform "])[1]`,
    );
  }

  get ele_CloseIcon() {
    return $(`(//button[@aria-controls='navbar-default'])[2]`);
  }

  get ele_lblPageHeaderInHero() {
    return $(
      `(//span[contains(normalize-space(.), "Building, Automating, andEvolving Software withAI Precision")])[1]`,
    );
  }

  get ele_lblPageHeaderInHeroInWeb() {
    return $(
      `(//span[contains(normalize-space(.), "Building, Automating, and EvolvingSoftware with AI Precision")])[1]`,
    );
  }
}

export default new HomePage();
