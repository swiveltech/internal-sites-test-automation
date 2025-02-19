import timeOutManager from "../web/timeOutManager.js";

export default {
  /* Click on the given element
   * @element - element type parameter
   * @button - string (default - "left") | "middle", "right"
   */
  nativeClick: async function (element, button = "left") {
    const retries = timeOutManager.getRetryCount();
    let attempt = 0;

    const isDisplayed = await element.isDisplayed();
    if (isDisplayed) {
      while (attempt < retries) {
        const isClickable = await element.waitForEnabled();
        if (isClickable) {
          try {
            await element.click({ button });
            console.log("performed click after clickable");
            break;
          } catch (err) {
            console.error("Exception thrown:", err);
          }
        } else {
          await scrollToElement(element);
        }
        attempt++;
      }
      console.log("Retried attempt count: " + attempt);
      if (attempt === retries) {
        console.log("Element is not clickable");
        throw new Error("Element is not clickable");
      }
    } else {
      throw new Error("Element is not displayed");
    }
  },

  scrollToElement: async function (element) {
    try {
      console.warn(
        "WARN: Element",
        element,
        "is not clickable.",
        "Scrolling to it before clicking again."
      );
      await element.scrollIntoView({
        block: "center",
        inline: "center",
      });
      console.log("Scrolled into view");
    } catch (err) {
      console.error("Exception thrown:", err);
    }
  },

  /* Double click on the given element by movith the xOffset and yOffset
   * @element - element type parameter
   */
  nativeDoubleClick: async function (element) {
    let retries = timeOutManager.getRetryCount;
    let attempt = 0;

    let isDisplayed = await element.isDisplayed();
    if (!isDisplayed) {
      await element.waitForEnabled({
        timeout: timeOutManager.getDisplayTimeOut(),
      });
    }

    do {
      try {
        await element.doubleClick();
        console.log("Performed doubleClick");
        break;
      } catch (err) {
        console.error("Exception thrown:", err);
        if (err.message.includes("is not clickable at this point")) {
          console.warn(
            "WARN: Element",
            this.element,
            "is not clickable.",
            "Scrolling to it before double clicking again."
          );

          await element.scrollIntoView({ block: "center", inline: "center" });
        } else {
          attempt++;
          if (attempt >= retries) {
            console.log("Element is not clickable");
            throw err;
          }
        }
      }
    } while (attempt < retries);
    console.log("Retried attempt count: " + attempt);
  },

  nativeIOSClick: async function (element) {
    try {
      await element.click();
      console.log("performed click");
    } catch (err) {
      console.error("Exception thrown:", err);
    }
  },

  nativeIOSDoubleClick: async function (element) {
    try {
      await element.doubleClick();
      console.log("performed double click");
    } catch (err) {
      console.error("Exception thrown:", err);
    }
  },
};
