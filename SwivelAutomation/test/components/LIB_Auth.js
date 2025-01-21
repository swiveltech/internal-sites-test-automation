import browserManager from "../../infrastructure/web/browserManager.js";
import PG_AFLHome from "../pages/PG_AFLHome.js";
import PG_Login from "../pages/PG_Login.js";
import LIB_Common from "./LIB_Common.js";
import assertionHandler from "../../infrastructure/common/assertionHandler.js";
import labelConstant from "../constants/applicationLabelConst.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import PG_Common from "../pages/PG_Common.js";
import config from "../../config.json" assert { type: "json" };

class Login {
  async open(url) {
    await browserManager.openUrl(`${url}`);
    allureReporter.addStep("Load the URL " + url, "", "passed");
  }
  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */

  /**
   * method for login to comet
   */
  async bc_Login(username, password) {
    await PG_Login.tf_Email.addValue(username);
    allureReporter.addStep("Type Email address " + username, "", "passed");
    await PG_Login.tf_Password.addValue(password);
    allureReporter.addStep("Type Password " + password, "", "passed");
    await PG_Login.btn_Login.click();
    allureReporter.addStep("Click Login button", "", "passed");
  }

  /**
   * method verify Login screen
   */
  async bc_VerifyLoginScreen() {
    await assertionHandler.assertElementDisplayed(
      PG_Login.img_AFLLogo,
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Login.lbl_Comet,
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Login.tf_Email,
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Login.tf_Password,
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Login.lnk_DontRememberPassword,
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Login.btn_Login,
      "Element not exist",
    );
  }

  /**
   * method verify Login without entring email and password
   */
  async bc_VerifyEmptyEmailPasswordFieldValidations(ValidationType) {
    if (ValidationType == "Email") {
      await assertionHandler.assertElementDisplayed(
        PG_Login.ele_ErrorMsgEmail,
        "Element not exist",
      );
      allureReporter.addStep(
        "Verify Empty Email Field Validations",
        "",
        "passed",
      );
      await browser.refresh();
      await browser.pause(2000);
    } else if (ValidationType == "Password") {
      await assertionHandler.assertElementDisplayed(
        PG_Login.ele_ErrorMsgPassword,
        "Element not exist",
      );
      allureReporter.addStep(
        "Verify Empty Password Field Validations",
        "",
        "passed",
      );
      await browser.refresh();
      await browser.pause(2000);
    } else {
      await assertionHandler.assertElementDisplayed(
        PG_Login.ele_ErrorMsgEmail,
        "Element not exist",
      );
      await assertionHandler.assertElementDisplayed(
        PG_Login.ele_ErrorMsgPassword,
        "Element not exist",
      );
      allureReporter.addStep(
        "Verify Empty Email and Password Field Validations",
        "",
        "passed",
      );
    }
  }

  /**
   * method verify Login entring incorrect email and password
   */
  async bc_VerifyIncorrectEmailPasswordFieldValidations(ValidationType) {
    if (ValidationType == "Email" || ValidationType == "Password") {
      await assertionHandler.assertElementDisplayed(
        PG_Login.ele_IncorrectEmailPswdError,
        "Element not exist",
      );
      await browser.refresh();
      await browser.pause(2000);
    }
  }

  /**
   * method to click on don't remeber password link
   */
  async bc_ClickOnDontRemeberPassword() {
    await PG_Login.lnk_DontRememberPassword.click();
    await assertionHandler.assertElementDisplayed(
      PG_Login.lbl_ResetPassword,
      "Element not exist",
    );
  }

  /**
   * method to Verify Reset password screen
   */
  async bc_VerifyResetPasswordScreen() {
    await assertionHandler.assertElementDisplayed(
      PG_Login.lbl_ResetPassword,
      "Element not exist",
    );
    await browser.pause(5000);
    const content = await PG_Login.ele_ResetPasswordBodyContent.getText();
    assertionHandler.assertEqual(
      content,
      labelConstant.RESETPASSWORDBODYCONTENT,
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Login.tf_Email,
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Login.btn_ResetPasswordSendEmail,
      "Element not exist",
    );
    await assertionHandler.assertElementDisplayed(
      PG_Login.btn_ResetPasswordBack,
      "Element not exist",
    );
  }

  /**
   * method to click on back button in reset password screen
   */
  async bc_ClickOnBackInResetPasswordScreen() {
    await PG_Login.btn_ResetPasswordBack.click();
    await PG_Login.tf_Email.waitForExist({ timeout: 5000 });
  }

  /**
   * method to logout from comet
   */
  async bc_Logout() {
    if (config.projectType == "web" || config.projectType == "web-BS") {
      await browser.pause(5000);
      await PG_AFLHome.ele_Logout(1).click();
    } else {
      await PG_AFLHome.btn_HamburgerMenu.click();
      allureReporter.addStep("Click on Hamburger Menu", "", "passed");
      await PG_AFLHome.ele_Logout(2).click();
    }
    await PG_AFLHome.ele_LogoutDialogBox.waitForDisplayed(6000);
    allureReporter.addStep("Click on Logout link", "", "passed");
    await PG_Common.btn_ButtonWithLabel("YES", 1).click();
    allureReporter.addStep("Click on Yes button in logout popup", "", "passed");
    await PG_Login.btn_Login.waitForDisplayed(4000);
    const loginButton = await PG_Login.btn_Login.isDisplayed();
    assertionHandler.assertTrue(loginButton);
    allureReporter.addStep("Verify the login button", "", "passed");
  }

  /**
   * method to logout from comet
   */
  async bc_VerifyCancelLogout() {
    await LIB_Common.bc_WaitUntilSpinnerDissapear();
    if (config.projectType == "web" || config.projectType == "web-BS") {
      await PG_AFLHome.ele_Logout(1).click();
    } else {
      await PG_AFLHome.ele_Logout(2).click();
    }
    await PG_AFLHome.ele_LogoutDialogBox.waitForDisplayed(3000);
    await PG_Common.btn_ButtonWithLabel("NO", 1);
    await PG_AFLHome.btn_Settings.waitForDisplayed(3000);
    assertionHandler.assertElementDisplayed(PG_AFLHome.btn_Settings);
  }
}
export default new Login();
