class HomePage {
  /**
   * define selectors using getter methods
   */
  get img_SwivelGroupLogo() {
    return $('//div[@class="image-min-width"]/a/img');
  }

  ele_HeaderTab(tabName) {
    return $(`//div[@id='header-nav']/descendant::a[text()='${tabName}']`);
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

  ele_FooterTab(textValue, index) {
    return $(
      `//div[@class='footer-wrapper']/descendant::div[1]/div[2]/ul/li[${index}]/a[text()='${textValue}']`,
    );
  }
}

export default new HomePage();
