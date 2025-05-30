class HomePage {
  /**
   * define selectors using getter methods
   */
  get img_SwivelFinanceLogo() {
    return $('//img[@alt="Swivel Logo"]/..');
  }

  ele_HeaderTab(tabName) {
    return $(
      `((//div[@class='flex items-center justify-center']/ul[1]/descendant::a[text()='${tabName}']) | (//div[@class='flex items-center justify-center']/ul[1]/descendant::div[text()='${tabName}']))[1]`,
    );
  }

  ele_ContactNumber(contactNumber) {
    return $(
      `//div[@class='flex']/a[1]/child::span[text()='${contactNumber}']`,
    );
  }

  get btn_LetsTalk() {
    return $(`//div[@class="flex"]/div/button[text()="Let’s Talk"]`);
  }

  get btn_LetsTalkForiPad() {
    return $(
      `(//div[@class='flex items-center justify-center']/ul[1]/descendant::div[text()="Let's Talk"])`,
    );
  }

  ele_FooterTab(textValue) {
    return $(`//nav[@aria-label="Main"]/li/a[text()="${textValue}"]`);
  }
  get icn_Instagram() {
    return $(`//img[@alt="insta-hover.png"]/..`);
  }

  get icn_Linkedin() {
    return $(`//img[@alt="linked-in-hover.png"]/..`);
  }

  get lnk_PrivacyPolicy() {
    return $("//a[text()='Privacy Policy']");
  }

  get lnk_CookiePolicy() {
    return $("//a[text()='Cookie Policy']");
  }

  ele_ServicesWeDeliverTile(Title, SubTitle) {
    return $(
      `//h4[text()='${Title}']/following-sibling::div/div/div/p[text()='${SubTitle}']`,
    );
  }

  lbl_SuccessfulClientProjectDescription(Title, Description) {
    return $(
      `//p[text()='${Title}']/following-sibling::p[text()='${Description}']`,
    );
  }

  lbl_PeopleNameWithDescription(Description, PeopleName) {
    return $(
      `//p[normalize-space(text()) = "${Description}"]/../following-sibling::div/div/div[2]/p[text()='${PeopleName}']`,
    );
  }

  lnk_ThoughtLeadershipVisitMore(Title) {
    return $(
      `//p[text()='${Title}']/following-sibling::a/span[text()='Visit More']/..`,
    );
  }

  lbl_DescriptionWithoutPeopleName(Description) {
    return $(`//p[normalize-space(text()) = "${Description}"]`);
  }
  lbl_PeopleNameWithDescriptionAndJob(Description, PeopleName, Job) {
    return $(
      `//p[normalize-space(text()) = "${Description}"]/../following-sibling::div/div/div[2]/p[text()='${PeopleName}']/following-sibling::p[normalize-space(text()) = "${Job}"]`,
    );
  }

  lnk_SuccessfulClientProjectReadMore(Title, Description) {
    return $(
      `//p[text()='${Title}']/following-sibling::p[text()='${Description}']/following-sibling::a/div/p[text()='Read More']/../..`,
    );
  }

  get img_SwivelLogoFooter() {
    return $(`//img[@alt="footer-logo.svg"]`);
  }

  get lnk_CookiePolicyInPopUp() {
    return $(`//div[@class="popuplink"]/p/a[text()="Cookie Policy"]`);
  }

  get lbl_AboutAuthor() {
    return $(
      `//div[@class="bach-component"]/div[3]/p/span[text()="Shanil Dissanayak"]/following-sibling::span[text()="e CPA"]/../following-sibling::p/span[contains(normalize-space(.), "Co-Founder & CEO") and contains(normalize-space(.), "of Swivel Group")]`,
    );
  }

  ele_SocialMedia(Index) {
    return $(`(//div[@class="bach-component bach-social"])[1]/a[${Index}]`);
  }

  img_Leadership(Image) {
    return $(`//img[@alt="${Image}"]`);
  }

  get ele_HamburgerIcon() {
    return $(`(//button[@aria-controls='navbar-default'])[1]`);
  }

  ele_HeaderTabForiPad(tabName) {
    return $(
      `((//div[@class='flex items-center justify-center']/ul[1]/descendant::a[text()='${tabName}']) | (//div[@class='flex items-center justify-center']/ul[1]/descendant::div[text()='${tabName}']))[2]`,
    );
  }
}

export default new HomePage();
