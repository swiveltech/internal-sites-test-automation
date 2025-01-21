class AFLHomePage {
  /**
   * define selectors using getter methods
   */
  get img_AFLLogo() {
    return $('//img[@alt="logo"]');
  }

  ele_Logout(Index) {
    return $(`(//div[text()='Log out'])[${Index}]`);
  }

  get ele_LogoutDialogBox() {
    return $("//h5[contains(text(),'logout?')]/../../../..");
  }

  get btn_Settings() {
    return $("//*[local-name()='svg' and @data-testid='SettingsIcon']/..");
  }

  get btn_SystemLog() {
    return $("//*[local-name()='svg' and @data-testid='ErrorIcon']/..");
  }

  ele_AFLorAFLW(leagueType) {
    return $(`//div[text()="${leagueType}"]`);
  }

  ele_AFLHomeHeaderTabLabels(HeaderLabel) {
    return $(`//div[text()="${HeaderLabel}"]`);
  }

  get btn_HamburgerMenu(){
    return $(`//*[local-name()="svg" and @data-testid="DensityMediumIcon"]/..`);
  }
}

export default new AFLHomePage();
