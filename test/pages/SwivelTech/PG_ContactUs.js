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

  ele_lblEmailAddress(Text, EmailAddress) {
    return $(
      `(//h3[text()="${Text}"]/../following-sibling::div/h3[text()="${EmailAddress}"])[1]`,
    );
  }

  ele_lblContactNumber(Text, ContactNumber) {
    return $(
      `(//h3[text()="${Text}"]/../following-sibling::div/a[text()="${ContactNumber}"])[1]`,
    );
  }
}

export default new ContactUs();
