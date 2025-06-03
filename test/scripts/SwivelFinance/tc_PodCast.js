import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.js";
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";
import Data_ContactUs from "../../data/SwivelFinance/dt_contactUs.js";
import Data_Podcast from "../../data/SwivelFinance/dt_Podcast.js";
import LIB_Podcast from "../../components/SwivelFinance/LIB_Podcast.js";

describe("Swivel Finance Site -> PodCast Page", () => {
  it("Verify the PodCast Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> PodCast Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Tab "PodCast"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_PodCast);
    await LIB_Common.bc_VerifyH1Header(Data_Podcast.Header_Podcast);
    await LIB_Common.bc_VerifyAnyText(Data_Podcast.Podcast_Description, 1);
    await LIB_Common.bc_VerifyTheAppURL("podcast");

    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Podcast.Header_Podcast);
    await LIB_Common.bc_VerifyTheParagraph(Data_Podcast.Podcast_Description);
    
    await LIB_Common.bc_VerifyH2Header(Data_Podcast.Podcast_H2Header1,);
    // Latest Episode
    await LIB_Podcast.bc_VerifyPodcastCards(
        Data_Podcast.Podcast_Episode1_title,
        Data_Podcast.Podcast_Episode1_date,
        Data_Podcast.Podcast_Episode1_hosted,
        Data_Podcast.Podcast_Description
    );
    
    await LIB_Podcast.bc_VerifyPodcastButton(Data_Podcast.WatchNow_Button);
    await LIB_Podcast.bc_ClickPodcastButton(Data_Podcast.WatchNow_Button);

    const allHandles = await browser.getWindowHandles();
    await browser.switchToWindow(allHandles[1]);

    await LIB_Common.bc_VerifyYouTubeURL(Data_Podcast.Podcast_Episode1_videoId);
    await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
    
    // Previous Episodes
    await LIB_Common.bc_VerifyH2Header(Data_Podcast.Podcast_H2Header2);
    
       
    await LIB_Common.bc_VerifyH3Header(Data_Home.Title_WeWouldLoveToHelpYou);
    await LIB_Common.bc_VerifyTheButton("Connect With Us", 1);
    //Click on Connect With Us
    await LIB_Common.bc_ClickOnButton("Connect With Us", 1);
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    await LIB_Common.bc_VerifyH1Header(Data_ContactUs.Header_ContactUs);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.ContactUs_Description,
    );
  });
});
