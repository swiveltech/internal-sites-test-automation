import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.js";
import Data_AboutUs from "../../data/SwivelTech/dt_aboutUs.js";
import Data_HowWeWork from "../../data/SwivelTech/dt_howWeWork.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.js";
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import Data_OurServices from "../../data/SwivelTech/dt_ourServices.js";

describe("Swivel Tech Site -> Home Page", () => {
  it("Verify the Home Page Screen size", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Home Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    console.log("Width", window.screen.width);
    console.log("Height", window.screen.heigth);
    await LIB_Common.bc_TakeScreenShot("Screen Size");
  });
});
