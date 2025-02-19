export default {
  /*
   * native vertical scroll to end
   */
  nativeVerticalScrollToEnd: async function () {
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)"
    );
  },
  /*
   * native vertical scroll to top
   */
  nativeVerticalScrollToTop: async function () {
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,5)"
    );
  },
};
