import PG_Resources from "../../pages/SwivelTech/PG_Resources.js";
import LIB_Common from "../LIB_Common.js";
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
}
export default new Resources();
