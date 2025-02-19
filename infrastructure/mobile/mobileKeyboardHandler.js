import webActions from "../web/webActions.js";

export default {
  /*
   * Hide the mobile keyboard
   */
  hideKeyBoard: async function () {
    const isKeyboardVisible = await driver.isKeyboardShown();

    if (isKeyboardVisible) {
      await browser.hideKeyboard();
    } else {
      console.log("Keyboard not displayed");
    }
  },

  /*
   * Hide the mobile keyboard
   */
  typeAndHideKeyBoard: async function (element, value) {
    await webActions.type(element, value);
    const isKeyboardVisible = await driver.isKeyboardShown();

    if (isKeyboardVisible) {
      await browser.hideKeyboard();
    } else {
      console.log("Keyboard not displayed");
    }
  },

  /*
   * press any keycode
   * @keyCode - representing number of the key
   */
  pressAnyKeyCode: async function (keyCode) {
    await browser.pressKeyCode(keyCode);
  },

  /*
   * Long press any keycode
   * @keyCode - representing number of the key
   */
  longPressAnyKeyCode: async function (keyCode) {
    await browser.longPressKeyCode(keyCode);
  },

  /*The metaState parameter is an integer that uses bitwise flags 
    to represent the state of different modifier keys. 
    Each modifier key is associated with a specific bit, 
    and you can combine them using bitwise OR to represent
    multiple modifier keys simultaneously.

    @Here are some commonly used flags for metaState:
    0: No modifier key is pressed.
    1: Shift key is pressed.
    2: Ctrl key is pressed.
    4: Alt key is pressed.
    8: Meta key (e.g., Command key on macOS) is pressed.
  */

  /*
   * Sends a key event with the specified keycode
   * metaState (number) [optional]: The meta state flags associated with the key event.
   * This is an Android-specific parameter and can be used to specify modifier keys,
   * such as Shift, Control, Alt, etc. If not provided, it defaults to 0.
   * @keyCode - representing number of the key
   */
  sendAnyKeyEventWithKeyCode: async function (keyCode, metaState) {
    await browser.pressKeyCode(keyCode, metaState);
  },

  /*
   * Long press a key event with the specified keycode
   * metaState (number) [optional]: The meta state flags associated with the key event.
   * This is an Android-specific parameter and can be used to specify modifier keys,
   * such as Shift, Control, Alt, etc. If not provided, it defaults to 0.
   * @keyCode - representing number of the key
   */
  longPressAnyKeyEventWithKeyCode: async function (keyCode, metaState) {
    await browser.longPressKeyCode(keyCode, metaState);
  },
};
