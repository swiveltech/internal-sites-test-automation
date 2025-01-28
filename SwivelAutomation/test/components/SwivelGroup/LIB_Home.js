import PG_Home from "../../pages/SwivelGroup/PG_Home.js";
import PG_Common from "../../pages/PG_Common.js";
import PG_SocialMedia from "../../pages/SwivelGroup/PG_SocialMedia.js";
import LIB_Common from "../../components/LIB_Common.js";
import assertionHandler from "../../../infrastructure/common/assertionHandler.js";
import allureReporter from "@wdio/allure-reporter";
import config from "../../../config.json" assert { type: "json" };
class Home {
  /**
   * a method to Verify the Swivel Group logo
   */
  async bc_VerifyHomePageLogo() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.img_SwivelGroupLogo,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Group logo on top of the Home page",
      () => {
        console.log("Verify the Swivel Group logo on top of the Home page");
      },
    );
  }

  /**
   * a method to Click on the Swivel Group logo
   */
  async bc_ClickOnApplicationLogoAndVerifyTheAppURL() {
    await PG_Home.img_SwivelGroupLogo.click();
    await browser.pause(2000);
    // Get the current URL
    const currentUrl = await browser.getUrl();
    console.log("Full URL After Navigating : " + currentUrl);
    assertionHandler.assertEqual(
      currentUrl,
      config.DEFAULT_URL,
      `Expected "${config.DEFAULT_URL}" but got "${currentUrl}"`,
    );
    allureReporter.step(
      "Click on Application logo and Verify the App URL to the Home Screen",
      () => {
        console.log(
          "Click on Application logo and Verify the App URL to the Home Screen",
        );
      },
    );
  }

  /**
   * a method to Verify the Top panel
   */
  async bc_VerifyHomeScreenTopPanel(tabNames) {
    let tabNamesToVerify;

    if (tabNames.includes(";")) {
      tabNamesToVerify = tabNames.split(";");
    } else {
      tabNamesToVerify = tabNames;
    }

    for (let i = 0; i < tabNamesToVerify.length; i++) {
      await assertionHandler.assertElementDisplayed(
        PG_Home.ele_HeaderTab(tabNamesToVerify[i]),
        "Element not exist",
      );
      allureReporter.step(
        "Verify the Swivel Group Tab name " +
          tabNamesToVerify[i] +
          " is present. ",
        () => {
          console.log(
            "Verify the Swivel Group Tab name " +
              tabNamesToVerify[i] +
              " is present. ",
          );
        },
      );
    }
  }

  /**
   * a method to Verify Contact panel on the top of the site
   */
  async bc_VerifyContactDetailsInTopPanel(contactNumber) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_ContactNumber(contactNumber),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Group Contact number on top of the site. Contact number : " +
        contactNumber,
      () => {
        console.log(
          "Verify the Swivel Group Contact number on top of the site. Contact number : " +
            contactNumber,
        );
      },
    );

    await assertionHandler.assertElementDisplayed(
      PG_Home.btn_LetsTalk,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Swivel Group Let's Talk button is present.",
      () => {
        console.log("Verify the Swivel Group Let's Talk button is present.");
      },
    );
  }

  /**
   * a method to navigate to tab from navigation
   */
  async bc_NavigateToTabFromTopNavigation(tabName) {
    await PG_Home.ele_HeaderTab(tabName).click();
    await browser.pause(2000);
    allureReporter.step(
      "Navigate to the " + tabName + " tab from the top navigation ",
      () => {
        console.log(
          "Navigate to the " + tabName + " tab from the top navigation ",
        );
      },
    );
  }

  /**
   * a method to Verify The Experts In Title
   */
  async bc_VerifyTheExpertsInTitle(textValue, index) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_TitleInExpertsIn(textValue, index),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Experts In title is " +
        textValue +
        " and title index is " +
        index +
        " it is present in Home page of the Swivel Group Site.",
      () => {
        console.log(
          "Verify the Experts In title is " +
            textValue +
            " and title index is " +
            index +
            " it is present in Home page of the Swivel Group Site.",
        );
      },
    );
  }

  /**
   * a method to Verify The Center Items
   */
  async bc_VerifyTheCenterItems(
    textValueForTitle,
    textValueForDescription,
    index,
  ) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_TitleInCenter(
        textValueForTitle,
        textValueForDescription,
        index,
      ),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Experts In title is " +
        textValueForTitle +
        " and Description is : " +
        textValueForDescription +
        " title index is " +
        index +
        " it is present in Home page of the Swivel Group Site.",
      () => {
        console.log(
          "Verify the Experts In title is " +
            textValueForTitle +
            " and Description is : " +
            textValueForDescription +
            " title index is " +
            index +
            " it is present in Home page of the Swivel Group Site.",
        );
      },
    );
  }

  /**
   * a method to Verify Our Brands in home page
   */
  async bc_VerifyOurBrandsInHomePage(brandTitle, brandDescription) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_OurBrands(brandTitle, brandDescription),
      "Element not exist",
    );
    allureReporter.step(
      "Verify Our Brand title is " +
        brandTitle +
        " and brand description is " +
        brandDescription +
        " it is present in Home page of the Swivel Group Site.",
      () => {
        console.log(
          "Verify Our Brand title is " +
            brandTitle +
            " and brand description is " +
            brandDescription +
            " it is present in Home page of the Swivel Group Site.",
        );
      },
    );
  }

  /**
   * a method to Verify Our Brands with links in home page
   */
  async bc_VerifyOurBrandsWithLinksInHomePage(brandTitle, brandLink) {
    await assertionHandler.assertElementDisplayed(
      PG_Home.ele_OurBrandsWithLink(brandTitle, brandLink),
      "Element not exist",
    );
    allureReporter.step(
      "Verify Our Brand title is " +
        brandTitle +
        " and brand link is " +
        brandLink +
        " it is present in Home page of the Swivel Group Site.",
      () => {
        console.log(
          "Verify Our Brand title is " +
            brandTitle +
            " and brand link is " +
            brandLink +
            " it is present in Home page of the Swivel Group Site.",
        );
      },
    );
  }

  /**
   * a method to Verify the footer panel
   */
  async bc_VerifyHomeScreenFooterPanel(tabNames) {
    let tabNamesToVerify;

    if (tabNames.includes(";")) {
      tabNamesToVerify = tabNames.split(";");
    } else {
      tabNamesToVerify = tabNames;
    }

    for (let i = 0; i < tabNamesToVerify.length; i++) {
      await assertionHandler.assertElementDisplayed(
        PG_Home.ele_FooterTab(tabNamesToVerify[i], i + 1),
        "Element not exist",
      );
      allureReporter.step(
        "Verify the Footer Tab name " + tabNamesToVerify[i] + " is present. ",
        () => {
          console.log(
            "Verify the Footer Tab name " +
              tabNamesToVerify[i] +
              " is present. ",
          );
        },
      );
    }
  }

  /**
   * a method to verify the social media icon
   */
  async bc_VerifyTheSocialMediaIcon() {
    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_Facebook,
      "Element not exist",
    );
    allureReporter.step("Verify the Facebook icon on Footer ", () => {
      console.log("Verify the Facebook icon on Footer ");
    });

    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_Instagram,
      "Element not exist",
    );
    allureReporter.step("Verify the Instagram icon on Footer ", () => {
      console.log("Verify the Instagram icon on Footer ");
    });

    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_Twitter,
      "Element not exist",
    );
    allureReporter.step("Verify the Twitter icon on Footer ", () => {
      console.log("Verify the Twitter icon on Footer ");
    });

    await assertionHandler.assertElementDisplayed(
      PG_Home.icn_Linkedin,
      "Element not exist",
    );
    allureReporter.step("Verify the Linkedin icon on Footer ", () => {
      console.log("Verify the Linkedin icon on Footer ");
    });
  }

  /**
   * a method to Click option from the footer panel
   */
  async bc_ClickOptionFromFooterPanel(tabName, index) {
    let element = await PG_Home.ele_FooterTab(tabName, index);

    await element.scrollIntoView({ block: "center", inline: "center" });
    await browser.pause(1000);
    await PG_Home.ele_FooterTab(tabName, index).click();
    await browser.pause(1000);
    allureReporter.step(
      "Click on the Footer Tab name " + tabName + " is present. ",
      () => {
        console.log(
          "Click on the Footer Tab name " + tabName + " is present. ",
        );
      },
    );
  }

  /**
   * a method to Verify We Value your Privacy
   */
  async bc_VerifyWeValueYourPrivacy(header, description) {
    await assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblPageHeader(header, 1),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Privacy popup header as : " + header,
      () => {
        console.log("Verify the Privacy popup header as : " + header);
      },
    );
    await assertionHandler.assertElementDisplayed(
      PG_Common.ele_lblPageHeader(description, 1),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Privacy popup description as : " + description,
      () => {
        console.log("Verify the Privacy popup description as : " + description);
      },
    );

    // Button Decline All
    await assertionHandler.assertElementDisplayed(
      PG_Common.btn_ButtonWithLabel("Decline All", 1),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Privacy popup Decline All button is present. ",
      () => {
        console.log("Verify the Privacy popup Decline All button is present. ");
      },
    );
    // Button Accept All
    await assertionHandler.assertElementDisplayed(
      PG_Common.btn_ButtonWithLabel("Accept All", 1),
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Privacy popup Accept All button is present. ",
      () => {
        console.log("Verify the Privacy popup Accept All button is present. ");
      },
    );
  }

  /**
   * a method to Verify We Value your Privacy not present
   */
  async bc_VerifyWeValueYourPrivacyNotPresent(header, description) {
    let pageHeaderFlag = await PG_Common.ele_lblPageHeader(
      header,
      1,
    ).isDisplayed();
    await assertionHandler.assertFalse(pageHeaderFlag);
    allureReporter.step(
      "Verify the Privacy popup header as : " + header + " is not present.",
      () => {
        console.log(
          "Verify the Privacy popup header as : " + header + " is not present.",
        );
      },
    );
    let pageDescriptionFlag = await PG_Common.ele_lblPageHeader(
      description,
      1,
    ).isDisplayed();
    await assertionHandler.assertFalse(pageDescriptionFlag);
    allureReporter.step(
      "Verify the Privacy popup description as : " +
        description +
        " is not present.",
      () => {
        console.log(
          "Verify the Privacy popup description as : " +
            description +
            " is not present.",
        );
      },
    );

    // Button Decline All
    let declineAllFlag = await PG_Common.btn_ButtonWithLabel(
      "Decline All",
      1,
    ).isDisplayed();
    await assertionHandler.assertFalse(declineAllFlag);
    allureReporter.step(
      "Verify the Privacy popup Decline All button is not present. ",
      () => {
        console.log(
          "Verify the Privacy popup Decline All button is not present. ",
        );
      },
    );
    // Button Accept All
    let acceptAllFlag = await PG_Common.btn_ButtonWithLabel(
      "Accept All",
      1,
    ).isDisplayed();
    await assertionHandler.assertFalse(acceptAllFlag);
    allureReporter.step(
      "Verify the Privacy popup Accept All button is not present. ",
      () => {
        console.log(
          "Verify the Privacy popup Accept All button is not present. ",
        );
      },
    );
  }

  /**
   * a method to Clear Cache and cookies and reload the url
   *
   */
  async bc_ClearCacheAndCookiesAndReload() {
    await browser.deleteAllCookies();
    await browser.refresh();
    allureReporter.step("Clear Cache and cookies and reload the url", () => {
      console.log("Clear Cache and cookies and reload the url");
    });
  }

  /**
   * a method to click on facebook icon
   *
   */
  async bc_ClickOnFacebookIcon() {
    const element = await PG_Home.icn_Facebook;
    await element.scrollIntoView({ block: "center", inline: "center" });
    await browser.pause(1000);
    await PG_Home.icn_Facebook.click();
    await browser.pause(2000);
    allureReporter.step("Click on Facebook in home page.", () => {
      console.log("Click on Facebook in home page.");
    });
  }

  /**
   * a method to Verify on facebook popup and close it
   *
   */
  async bc_VerifyTheFacebookPopAndCloseIt() {
    await assertionHandler.assertElementDisplayed(
      PG_SocialMedia.ele_FacebookTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Facebook title in facebook page popup.",
      () => {
        console.log("Verify the Facebook title in facebook page popup.");
      },
    );
    await PG_SocialMedia.ico_FacebookClosePoopUp.click();
    allureReporter.step("Click on Facebook close icon on popup.", () => {
      console.log("Click on Facebook close icon on popup.");
    });
  }

  /**
   * a method to click on Instagram icon
   *
   */
  async bc_ClickOnInstagramIcon() {
    const element = await PG_Home.icn_Facebook;
    await element.scrollIntoView({ block: "center", inline: "center" });
    await browser.pause(1000);
    await PG_Home.icn_Instagram.click();
    await browser.pause(2000);
    allureReporter.step("Click on Instagram in home page.", () => {
      console.log("Click on Instagram in home page.");
    });
  }

  /**
   * a method to verify on Instagram popup and close it
   *
   */
  async bc_VerifyTheInstagramPopAndCloseIt() {
    await assertionHandler.assertElementDisplayed(
      PG_SocialMedia.ele_InstagramTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Instagram title in Instagram page popup.",
      () => {
        console.log("Verify the Instagram title in Instagram page popup.");
      },
    );
    await PG_SocialMedia.ico_InstagramClosePoopUp.click();
    allureReporter.step("Click on Instagram close icon on popup.", () => {
      console.log("Click on Instagram close icon on popup.");
    });
  }

  /**
   * a method to click on Twitter icon
   *
   */
  async bc_ClickOnTwitterIcon() {
    await PG_Home.icn_Twitter.click();
    await browser.pause(2000);
    allureReporter.step("Click on Twitter in home page.", () => {
      console.log("Click on Twitter in home page.");
    });
  }

  /**
   * a method to verify on Twitter popup and close it
   *
   */
  async bc_VerifyTheTwitterPopAndCloseIt() {
    await assertionHandler.assertElementDisplayed(
      PG_SocialMedia.ele_TwitterTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Twitter title in Twitter page popup.",
      () => {
        console.log("Verify the Twitter title in Twitter page popup.");
      },
    );
    await PG_SocialMedia.ico_TwitterClosePoopUp.click();
    allureReporter.step("Click on Twitter close icon on popup.", () => {
      console.log("Click on Twitter close icon on popup.");
    });
  }

  /**
   * a method to click on Linkedin icon
   *
   */
  async bc_ClickOnLinkedinIcon() {
    await PG_Home.icn_Linkedin.click();
    await browser.pause(2000);
    allureReporter.step("Click on Linkedin in home page.", () => {
      console.log("Click on Linkedin in home page.");
    });
  }

  /**
   * a method to Verify on Linkedin popup and close it
   *
   */
  async bc_VerifyTheLinkedinPopAndCloseIt() {
    await assertionHandler.assertElementDisplayed(
      PG_SocialMedia.ele_LinkedinTitle,
      "Element not exist",
    );
    allureReporter.step(
      "Verify the Linkedin title in Linkedin page popup.",
      () => {
        console.log("Verify the Linkedin title in Linkedin page popup.");
      },
    );
    await PG_SocialMedia.ico_LinkedinClosePoopUp.click();
    allureReporter.step("Click on Linkedin close icon on popup.", () => {
      console.log("Click on Linkedin close icon on popup.");
    });
  }

  /**
   * a method to Click on Lets talk button and Verify Contact Us Page
   */
  async bc_ClickOnLetsTalkButtonAndVerifyContactUsPage() {
    await PG_Home.btn_LetsTalk.click();
    allureReporter.step("Click on Lets Talk button in Home page", () => {
      console.log("Click on Lets Talk button in Home page");
    });
    await browser.pause(1000);
    await LIB_Common.bc_VerifyH1Header("Contact Us");
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
  }
}
export default new Home();
