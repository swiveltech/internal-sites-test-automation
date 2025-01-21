/** *
 Impoer wrapper commands to here and define it under export package
 */

import typeFunc from "./type.js";
import mobileTouchActions from "./mobileTouchActions.js";
import clearText from "./clearText.js";
import mobileNativeClickFunc from "./mobileNativeClickFunc.js";
import mobileKeyboardHandler from "./mobileKeyboardHandler.js";

export default {
  ...typeFunc,
  ...mobileTouchActions,
  ...clearText,
  ...mobileNativeClickFunc,
  ...mobileKeyboardHandler,

};
