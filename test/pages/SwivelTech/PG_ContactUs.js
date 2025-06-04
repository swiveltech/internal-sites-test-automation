class ContactUs {
  /**
   * define selectors using getter methods
   */
  ele_CountryWithAddress(Country, AddressWithCompanyName) {
    return $(
      `(//h3[text()="${Country}"]/../following-sibling::div[contains(normalize-space(),"${AddressWithCompanyName}")])[1]`,
    );
  }

  ele_CountryWithAddressWithContactNumber(
    Country,
    AddressWithCompanyName,
    ContactNumber,
  ) {
    return $(
      `(//h3[text()="${Country}"]/../following-sibling::div[contains(normalize-space(),"${AddressWithCompanyName}")]/a[contains(text(),"${ContactNumber}")])[1]`,
    );
  }

  lbl_EmailAddress(Text, EmailAddress) {
    return $(
      `(//h3[text()="${Text}"]/../following-sibling::div/h3[text()="${EmailAddress}"])[1]`,
    );
  }

  lbl_ContactNumber(Text, ContactNumber) {
    return $(
      `(//h3[text()="${Text}"]/../following-sibling::div/a[text()="${ContactNumber}"])[1]`,
    );
  }

  get tf_FirstName() {
    return $(`//input[@id="firstname"]`);
  }

  get tf_LastName() {
    return $(`//input[@id="lastname"]`);
  }

  get tf_Email() {
    return $(`//input[@id="email"]`);
  }

  get tf_PhoneNumber() {
    return $(`//input[@id="phone"]`);
  }

  get dd_CustomerInquiry() {
    return $(`//select[@data-name="customer_inquiry"]`);
  }

  get tf_Message() {
    return $(`//textarea[@data-name="message"]`);
  }

  lbl_ErrorMessage(Label, ErrorMessage) {
    return $(
      `//label[contains(text(),"${Label}")]/following-sibling::div/div/div[text()="${ErrorMessage}"]`,
    );
  }

  get ele_HelpCardContainer() {
    return $("//div[contains(@class, 'fixed') and contains(@class, 'bottom-10')]");
  }

  get ele_HelpCardHeading() {
    return $("//div[contains(@class, 'fixed') and contains(@class, 'bottom-10')]//h4");
  }

  get ele_StartCallButton() {
    return $("//div[contains(@class, 'fixed') and contains(@class, 'bottom-10')]//button[contains(text(), 'START A CALL')]");
  }

  get ele_CallEndingMsg() {
    return $("//div[contains(text(),'Call ending in')]");
    }
    
    get ele_CallTimer() {
    return $("//div[contains(text(),'Call ending in')]/following-sibling::div");
    }
    
    get ele_EndCallButton() {
    return $("//button[normalize-space()='END CALL']");
    }
      get ele_MinimizeButton() {
        return $("//img[@alt='minimize' or contains(@src,'keyboard_arrow_down.svg')]");
      }
      
      get ele_MaximizeButton() {
        return $("//img[@alt='maximize' or contains(@src,'keyboard_arrow_up.svg')]");
      }
      
      get ele_CloseButton() {
        return $("//img[@alt='close' and contains(@src,'close_small.svg')]");
      }
      
      get ele_SupportCardFixed() {
        return $("//div[contains(@class,'fixed') and contains(@class,'z-40')]");
      }
      
      get ele_NeedHelpTextMinimized() {
        return $("//div[normalize-space(text())='Need Help?']");
      }

}

export default new ContactUs();
