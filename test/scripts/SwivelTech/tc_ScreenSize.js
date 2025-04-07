import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";

describe("Swivel Tech Site -> Home Page", () => {
  it("Verify the Home Page Screen size", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Home Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    const windowSize = await browser.getWindowSize();
    console.log(windowSize);
    await LIB_Common.bc_TakeScreenShot("Screen Size");
  });
});
