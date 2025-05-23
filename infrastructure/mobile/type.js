import configs from "../../config.js";
import timeOutManager from "../web/timeOutManager.js";

export default {
  /**
   * Type command
   *   - Wait for element to display
   *    - Add value
   */

  type: async function (element, value) {
    let count = timeOutManager.getRetryCount();
    let retryInterval = configs.RETRY_INTERVAL;
    try {
      while (count > 0) {
        try {
          count--;
          let ele = await element.isDisplayed();
          if (ele) {
            try {
              await element.addValue(value);
              break;
            } catch (err) {
              console.error(
                "Exception thrown:",
                err + " object is display but it is disable",
              );
              throw err;
            }
          } else {
            browser.pause(retryInterval);
          }
        } catch (err) {
          if (!count > 0) {
            throw err;
          }
        }
      }
    } catch (err) {
      console.error("Exception thrown:", err + this.element + "not loaded");
      throw err;
    }
  },
};
