export default {
  /*Note: Only working with the native apps
   * Tap on element
   */
  tapOnElement: async function (element) {
    await element.touchAction("tap");
  },

  /*Note: Only working with the native apps
   *Tap at specific coordinates
   */
  tapAtSpecificCoordinates: async function (element, xVal, yVal) {
    await element.touchAction({
      action: "tap",
      x: xVal,
      y: yVal,
    });
  },

  /*Note: Only working with the native apps
   * Tap on element
   */
  tapAndHoldOnElement: async function (element) {
    await element.touchAction("press");
  },

  /*Note: Only working with the native apps
   * Swipe on one element to another
   */
  dragAndDropToElement: async function (fromElement, toElement) {
    await fromElement.touchAction([
      "press",
      { action: "moveTo", element: toElement },
      "release",
    ]);
  },

  /*Note: Only working with the native apps
   * Swipe on one element to another
   */
  dragAndDropToPosition: async function (element, xValue, yValue) {
    await element.touchAction([
      "press",
      { action: "moveTo", x: xValue, y: yValue },
      "release",
    ]);
  },
};
