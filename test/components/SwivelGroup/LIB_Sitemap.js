import allureReporter from "@wdio/allure-reporter";
import PG_Sitemap from "../../pages/SwivelGroup/PG_Sitemap.js";
class Sitemap {
  /**
   * a method to Click on Sub option
   */
  async bc_ClickOnSubOption(Title, Option) {
    let element = await PG_Sitemap.lnk_SubOptionInBottom(Title, Option);
    await element.scrollIntoView({ block: "center", inline: "center" });
    let appURL = await PG_Sitemap.lnk_SubOptionInBottomToGetLink(
      Title,
      Option,
    ).getAttribute("href");
    await PG_Sitemap.lnk_SubOptionInBottom(Title, Option).click();
    await browser.pause(2000);
    allureReporter.step(
      "Click on Option as : " +
        Option +
        " and Under Title as : " +
        Title +
        " and navigation URL : " +
        appURL,
      () => {
        console.log(
          "Click on Option as : " +
            Option +
            " and Under Title as : " +
            Title +
            " and navigation URL : " +
            appURL,
        );
      },
    );
  }
}
export default new Sitemap();
