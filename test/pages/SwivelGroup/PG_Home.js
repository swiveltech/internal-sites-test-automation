class HomePage {
  /**
   * define selectors using getter methods
   */
  get img_SwivelGroupLogo() {
    return $('//div[@class="image-min-width"]/a/img');
  }

  get img_SwivelGroupLogoForTable() {
    return $('(//img[contains(@alt,"Swivel_Group_Logo_")])[1]');
  }

  ele_HeaderTab(tabName) {
    return $(`//div[@id='header-nav']/descendant::a[text()='${tabName}']`);
  }

  ele_HeaderTabForTab(tabName) {
    return $(
      `//ul[contains(@class,'navbar-nav d-block')]/descendant::a[text()='${tabName}']`,
    );
  }

  ele_ContactNumber(contactNumber) {
    return $(
      `//div[@id='contact']/descendant::span[text()='${contactNumber}']`,
    );
  }

  get btn_LetsTalk() {
    return $(`//div[@id='contact']/descendant::button[text()="Let's Talk"]`);
  }

  ele_TitleInExpertsIn(textValue, index) {
    return $(
      `//span[text()='Experts In']/../following-sibling::div/div[${index}]/span[text()='${textValue}']`,
    );
  }

  ele_TitleInCenter(textValueForTitle, textValueForDescription, index) {
    return $(
      `//span[text()='0${index}']/following-sibling::span[text()='${textValueForTitle}']/following-sibling::span[text()="${textValueForDescription}"]`,
    );
  }

  ele_OurBrands(title, description) {
    return $(
      `//img[contains(@alt,'${title}')]/../../p[text()="${description}"]`,
    );
  }

  ele_OurBrandsWithLink(title, link) {
    return $(
      `//img[contains(@alt,'${title}')]/../..//following-sibling::a/p[text()='${link}']`,
    );
  }

  lnk_OurBrandsWithLink(title) {
    return $(`//img[contains(@alt,'${title}')]/../..//following-sibling::a`);
  }

  ele_FooterTab(textValue) {
    return $(
      `//div[@class='footer-wrapper']/descendant::div[1]/div[2]/ul/li/a[text()='${textValue}']`,
    );
  }

  get icn_Facebook() {
    return $("//nav[@class='navbar navbar-expand social-media']/ul/li[1]/a");
  }

  get icn_Instagram() {
    return $("//nav[@class='navbar navbar-expand social-media']/ul/li[2]/a");
  }

  get icn_Twitter() {
    return $("//nav[@class='navbar navbar-expand social-media']/ul/li[3]/a");
  }

  get icn_Linkedin() {
    return $("//nav[@class='navbar navbar-expand social-media']/ul/li[4]/a");
  }

  get lnk_PrivacyPolicy() {
    return $("//a[text()='Privacy Policy']");
  }

  get lnk_CookiePolicy() {
    return $("//a[text()='Cookie Policy']");
  }

  get lnk_ForMoreNews() {
    return $(`//p[contains(text(),"For More News")]/..`);
  }

  get ele_HamburgerIcon() {
    return $(`(//button[@aria-controls='navbarSupportedContent'])[1]`);
  }
}

export default new HomePage();
