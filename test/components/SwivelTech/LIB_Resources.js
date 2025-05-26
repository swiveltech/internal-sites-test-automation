import PG_Common from "../../pages/PG_Common.js";
import PG_Resources from "../../pages/SwivelTech/PG_Resources.js";
import LIB_Common from "../LIB_Common.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.js"
class Resources {
  /**
   * a method to Verify the Categories Options
   */
  async bc_VerifyCategoriesOptions(Header, Options) {
    let optionsToVerify =
      typeof Options === "string" && Options.includes(";")
        ? Options.split(";")
        : [Options];

    for (const optionToCheck of optionsToVerify) {
      await expect(
        PG_Resources.ele_CategoriesOptions(Header, optionToCheck),
      ).toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        "Verify the Categories Options as : " + optionToCheck,
      );
    }
  }

  /**
   * a method to Verify Categories tile
   *
   */
  async bc_VerifyCategoriesTile(Title, Description) {
    await LIB_Common.bc_VerifyH4Header(Title);

    await expect(
      PG_Resources.ele_CategoriesTile(Title, Description),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Categories Title as : " +
        Title +
        " , Description as : " +
        Description,
    );
    await expect(
      PG_Resources.lnk_CategoriesTileReadMore(Title, Description),
    ).toBePresent();
    let URL = await PG_Resources.lnk_CategoriesTileReadMore(
      Title,
      Description,
    ).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Categories Title as : " +
        Title +
        " and Read more link is present. URL : " +
        URL,
    );
  }

  /**
   * a method to Verify Categories tile for 3 text
   *
   */
  async bc_VerifyCategoriesTileFor3Text(
    Title,
    Description1,
    Description2,
    Description3,
  ) {
    await LIB_Common.bc_VerifyH4Header(Title);
    await expect(
      PG_Resources.ele_CategoriesTile3Text(
        Title,
        Description1,
        Description2,
        Description3,
      ),
    ).toBePresent();
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Categories Title as : " +
        Title +
        " , Description as : " +
        Description1 +
        " " +
        Description2 +
        " " +
        Description3,
    );
    await expect(
      PG_Resources.lnk_CategoriesTileReadMore3Text(
        Title,
        Description1,
        Description2,
        Description3,
      ),
    ).toBePresent();
    let URL = await PG_Resources.lnk_CategoriesTileReadMore3Text(
      Title,
      Description1,
      Description2,
      Description3,
    ).getAttribute("href");
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Categories Title as : " +
        Title +
        " and Read more link is present. URL : " +
        URL,
    );
  }

  /**
   * a method to Click on Load More Button
   *
   */
  async bc_ClickOnLoadMoreButton() {
    let element = await PG_Resources.btn_LoadMore;
    if (await element.isExisting()) {
      await PG_Resources.btn_LoadMore.click();
      await LIB_Common.bc_LogAllureReportAndLogs("Click on Load more button.");
      await browser.pause(5000);
    } else {
      await LIB_Common.bc_LogAllureReportAndLogs(
        "Load more button is not present.",
      );
    }
  }
  

  /**
   * a method to Verify Swivel Tak Cards
   *
   */
  async bc_VerifySwivelTalkCards(Header, Date, Host, Description ) {
    await LIB_Common.bc_VerifyH4Header(Header)
    await LIB_Common.bc_VerifyAnyText(Date,1)
    await LIB_Common.bc_VerifyAnyText(Host,1)
    await LIB_Common.bc_VerifyTheParagraph(Description)
  }
  
  /**
   * a method to Verify Youtube video ID
   *
   */

  async bc_verifyWatchNowForEpisode(index, videoId) {
    await LIB_Common.bc_VerifyTheButton(Data_Resources.WatchNow_Button, index);
    await LIB_Common.bc_ClickOnButton(Data_Resources.WatchNow_Button, index);
  
    const allHandles = await browser.getWindowHandles();
    await browser.switchToWindow(allHandles[1]);
  
    await LIB_Common.bc_VerifyYouTubeURL(videoId);
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
  }
  
}

export default new Resources();
