import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";

describe("Page Screen size", () => {
  it("Verify the Home Page Screen size", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Page Screen size",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Home.bc_VerifyPageHeaderInHomePage();
    await LIB_Common.bc_TakeScreenShot("Screen Size");
  });
});
