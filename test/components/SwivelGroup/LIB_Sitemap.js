import PG_Sitemap from "../../pages/SwivelGroup/PG_Sitemap.js";
import LIB_Common from "../LIB_Common.js";
class Sitemap {
  /**
   * a method to Click on Sub option
   */
  async bc_ClickOnSubOption(Title, Option) {
    let element = await PG_Sitemap.lnk_SubOptionInBottom(Title, Option);
    await element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    let appURL = await PG_Sitemap.lnk_SubOptionInBottomToGetLink(
      Title,
      Option,
    ).getAttribute("href");
    await PG_Sitemap.lnk_SubOptionInBottom(Title, Option).click();
    await browser.pause(2000);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Option as : " +
        Option +
        " and Under Title as : " +
        Title +
        " and navigation URL : " +
        appURL,
    );
  }
  /**
   * a method to Verify The Donate Button
   */
  async bc_VerifyTheDonateButton() {
    let element = await PG_Sitemap.lnk_Donate;
    // Check if the element is displayed
    await expect(element).toBeDisplayedInViewport();

    await LIB_Common.bc_LogAllureReportAndLogs(
      "Verify the Donate button in Swivel Foundation page ",
    );
  }
}
export default new Sitemap();
