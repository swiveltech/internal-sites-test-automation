class CommonPage {
  /**
   * define selectors using getter methods
   */

  get ele_Spinner() {
    return $("//span[contains(@class,'MuiCircularProgress')]");
  }

  ele_lblPageHeader(PageHeader, Index) {
    return $(`(//*[text()='${PageHeader}'])[${Index}]`);
  }

  ele_DropDownWithLabel(Label) {
    return $(
      `//*[text()='${Label}']/following-sibling::div/descendant::div[@role='button']`,
    );
  }

  txt_MinMax(FieldName, PlaceholderValue) {
    return $(
      `//h5[text()="${FieldName}"]/../div//input[@placeholder="${PlaceholderValue}"]`,
    );
  }

  btn_PopUpActions(Label) {
    return $(`//div[@class="css-1avjgqy"]/button[text()="${Label}"]`);
  }

  get ele_CloseIcon() {
    return $('//*[name()="svg" and @data-testid="CloseIcon"]');
  }

  btn_ButtonWithLabel(Label, Index) {
    return $(`(//button[text()='${Label}'])[${Index}]`);
  }

  get ele_CircleOutlineIcon() {
    return $('//*[name()="svg" and @data-testid="CheckCircleOutlineIcon"]');
  }

  get ele_WarningAmberIcon() {
    return $('//*[name()="svg" and @data-testid="WarningAmberIcon"]');
  }

  ele_SaveDialogBoxContent(Message) {
    return $(`//h3[normalize-space(text()="${Message}")]`);
  }

  get btn_OkInSuccessPopup() {
    return $('//button[text()="OK"]');
  }

  txt_MinMaxBorderValue(FieldName, PlaceholderValue) {
    return $(
      `//h5[text()="${FieldName}"]/../div//input[@placeholder="${PlaceholderValue}"]/../fieldset`,
    );
  }

  ele_lblMessageWithoutSpace(Label, Index) {
    return $(`(//*[normalize-space(text()) = "${Label}"])[${Index}]`);
  }

  get ele_TriangleOutlineIcon() {
    return $('//*[name()="svg" and @data-testid="WarningAmberIcon"]');
  }
}

export default new CommonPage();
