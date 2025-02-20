import config from "../../../config.json" assert { type: "json" };
import allureReporter from "@wdio/allure-reporter";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import Data_Resources from "../../data/SwivelTech/dt_Resources.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import LIB_Resources from "../../components/SwivelTech/LIB_Resources.js";

describe("Swivel Tech Site -> Resources Page", () => {
  it("Verify the Resources Page -> Blogs Page", async () => {
    allureReporter.addFeature(
      "Verify the Swivel Tech Resources Page -> Blogs Page",
    );
    allureReporter.addStory("Verify Resources Page -> Blogs Page");
    allureReporter.startStep(
      "Swivel Tech -> Verify Resources Page -> Blogs Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Resources,
      Data_Home.Resources_Blogs,
    );
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Blogs_Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.Blogs_Top_Description,
    );
    await LIB_Resources.bc_VerifyH6Header("Categories");
  });
});
