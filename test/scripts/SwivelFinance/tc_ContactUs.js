import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";
import Data_ContactUs from "../../data/SwivelFinance/dt_contactUs.json" assert { type: "json" };

describe("Swivel Finance Site -> Contact Us Page", () => {
  it("Verify the Contact Us Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Contact Us Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Let's Talk  button and verify the landing page
    await LIB_Home.bc_ClickOnLetsTalkButton();
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    await LIB_Common.bc_VerifyH1Header(Data_ContactUs.Header_ContactUs);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheButton("Send Us a Message", 1);

    //Verify the "Send us a message"
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.Header_SendUsAMessage,
    );
  });
});
