class HomePage {
  /**
   * define selectors using getter methods
   */
  get img_SwivelFinanceLogo() {
    return $('//img[@alt="Swivel Logo"]/..');
  }

  ele_HeaderTab(tabName) {
    return $(
      `(//div[@class='flex items-center justify-center']/ul[1]/descendant::div[text()='${tabName}'])[1]`,
    );
  }

  ele_ContactNumber(contactNumber) {
    return $(
      `//div[@class='flex']/a[1]/child::span[text()='${contactNumber}']`,
    );
  }

  get btn_LetsTalk() {
    return $(`//div[@class="flex"]/a[2]/button[text()="Let’s Talk"]`);
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
}

export default new HomePage();
