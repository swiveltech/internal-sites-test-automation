import PG_Home from "../../pages/SwivelFinance/PG_Home.js";
import PG_AboutUs from "../../pages/SwivelFinance/PG_AboutUs.js";
import LIB_Common from "../LIB_Common.js";
import PG_Podcast from "../../pages/SwivelFinance/PG_Podcast.js";

class Podcast {
    /**
     * a method to Verify Podcast Cards
     *
     */
    async bc_VerifyPodcastCards(Header, Date, Host, Description ) {
      await LIB_Common.bc_VerifyH4Header(Header)
      await LIB_Common.bc_VerifyAnyText(Date,1)
      await LIB_Common.bc_VerifyAnyText(Host,1)
      await LIB_Common.bc_VerifyTheParagraph(Description)
    }

    
    /**
     * a method to Verify Youtube video ID
     *
     */  
    async bc_verifyWatchNowForEpisode(Button, VideoId) {
      await LIB_Common.bc_VerifyLinks(Button);
      await LIB_Common.bc_ClickOnLinks(Button);
    
      const allHandles = await browser.getWindowHandles();
      await browser.switchToWindow(allHandles[1]);
    
      await LIB_Common.bc_VerifyYouTubeURL(VideoId);
      await LIB_Common.bc_CloseTheCurrentTabAndForceToFirstTab();
    } 

    /**
     * New method to verify podcast button links
     */
    async bc_VerifyPodcastButton(name) {
        const button = await PG_Podcast.lnk_PodcastButton(name);
    
        await button.waitForDisplayed({ timeout: 10000 });
        await button.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
        });
    
        await expect(button).toBeDisplayedInViewport();    
        await LIB_Common.bc_LogAllureReportAndLogs(`Verified podcast button: ${name}`);
    }
    
    /**
     * New method to click podcast buttons
     */
    async bc_ClickPodcastButton(name) {
        const button = await PG_Podcast.lnk_PodcastButton(name);
    
        await button.waitForDisplayed({ timeout: 10000 });
        await button.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
        });
    
        await browser.pause(1000);
        await button.click();
        await LIB_Common.bc_LogAllureReportAndLogs(`Clicked podcast button: ${name}`);
        await browser.pause(1000);
    }   
}
export default new Podcast();
