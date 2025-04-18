import PG_Sitemap from "../../pages/SwivelGroup/PG_Sitemap.js";
import LIB_Common from "../LIB_Common.js";
class Sitemap {
  /**
   * a method to Click on Sub option
   */
  async bc_ClickOnSubOption(Title, Option) {
    await browser.pause(4000);
    let element = await PG_Sitemap.lnk_SubOptionInBottom(Title, Option);
    await element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    await browser.pause(4000);
    let appURL = await PG_Sitemap.lnk_SubOptionInBottomToGetLink(
      Title,
      Option,
    ).getAttribute("href");
    await PG_Sitemap.lnk_SubOptionInBottom(Title, Option).click();
    await browser.pause(5000);
    await LIB_Common.bc_LogAllureReportAndLogs(
      "Click on Option as : " +
        Option +
        " and Under Title as : " +
        Title +
        " and navigation URL : " +
        appURL,
    );
  }
}
export default new Sitemap();
