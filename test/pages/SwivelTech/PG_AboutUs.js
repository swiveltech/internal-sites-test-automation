class AboutUs {
  /**
   * define selectors using getter methods
   */
  ele_HowWeGrewOverTheYears(Year, Message) {
    return $(
      `//h5[contains(text(),"${Year}")]/following-sibling::p[contains(.,"${Message}")]`,
    );
  }
}

export default new AboutUs();
