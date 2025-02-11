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
      `//span[@class='phone-icon']/following-sibling::span[tex()='${contactNumber}']`,
    );
  }

  get btn_LetsTalk() {
    return $(`//div[contains(@class,"flex")]/a[2]/button[text()="Let’s Talk"]`);
  }
}

export default new HomePage();
