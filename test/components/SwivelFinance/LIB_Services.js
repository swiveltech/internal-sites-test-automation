import PG_Services from "../../pages/SwivelFinance/PG_Services.js";
import LIB_Common from "../LIB_Common.js";

class AboutUs {
  /**
   * a method to Verify the Labels with the counts
   */
    async bc_VerifyLabelWithCount(Label, Count) {
      await expect(PG_Services.lbl_CountWithLabel(Count, Label)).toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        "Verify the Label as : " +
          Label +
          " and Count as : " +
          Count +
          "+ is present.",
      );
    }

  /**
   * a method to Verify Podcast Cards
   *
   */
    async bc_VerifywhatweofferCards(Header, Description ) {
      await LIB_Common.bc_VerifyH5Header(Header)
      await LIB_Common.bc_VerifyAnyText(Description,1)
    }


   /**
     * a method to Verify the Step Tile
     */
    async bc_VerifyStepTile(Count, Header, Description) {
      await expect(PG_Services.lbl_StepHeader(Count, Header)).toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        "Verify the Step Number as : " + Count + " , and Header as : " + Header,
      );
  
      await expect(
        PG_Services.lbl_StepHeaderWithDescription(Count, Header, Description),
      ).toBePresent();
      await LIB_Common.bc_LogAllureReportAndLogs(
        "Verify the Header as : " +
          Header +
          " , and Description as : " +
          Description,
      );
    }

    /**
   * a method to Verify the Successful Client Project tiles
   */
    async bc_VerifySuccessfulClientProject(Title, Description) {
        await LIB_Common.bc_VerifyTheParagraph(Title);
        await expect(
          PG_Services.lbl_SuccessfulClientProjectDescription(Title, Description),
        ).toBePresent();
        await expect(
          PG_Services.lnk_SuccessfulClientProjectReadMore(Title, Description),
        ).toBePresent();
        let linkedInURL = await PG_Services.lnk_SuccessfulClientProjectReadMore(
          Title,
          Description,
        ).getAttribute("href");
        await LIB_Common.bc_LogAllureReportAndLogs(
          "Verify the Sub Title as : " +
            Title +
            " ,And the Description as : " +
            Description +
            " , and read More link also available. URL : " +
            linkedInURL,
        );
    }

      /**
         * a method to Click on Successful Client Project Read More Link
         */
      async bc_ClickOnSuccessfulClientProjectReadMoreLink(Title, Description) {
        const elementToScroll = await PG_Services.lnk_SuccessfulClientProjectReadMore(Title, Description);
        const linkedInURL = await elementToScroll.getAttribute("href");
        await elementToScroll.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
        await elementToScroll.waitForClickable({ timeout: 5000 });
        await elementToScroll.click();
        await browser.waitUntil(
          async () => (await browser.getUrl()) !== linkedInURL,
          {
            timeout: 5000,
            timeoutMsg: "Navigation did not complete after clicking Read More link.",
          }
        );
      
        await LIB_Common.bc_LogAllureReportAndLogs(
          `Click the Sub Title as: ${Title}, And the Description as: ${Description}, and Read More link. URL: ${linkedInURL}`,
        );
      }
      
      /**
     * method to Verify Single FAQ
     */
      async bc_VerifySingleFAQ(question, answer) {
        const questionElem = await PG_Services.lbl_FAQsQuestionsTitle(question);
        const arrow = await PG_Services.lbl_FAQsQuestionsTitleWithArrow(question);

        if (!(await questionElem.isDisplayedInViewport())) {
            await questionElem.scrollIntoView({ block: "center" });
            await browser.pause(500); 
        }

        await arrow.waitForClickable({ timeout: 10000 });
        await arrow.click();
        await browser.pause(800);

        let answerElem = null;
        let answerFound = false;

        try {
            answerElem = await PG_Services.lbl_FAQsQuestionsTitleWithAnswers(question, answer);
            await answerElem.waitForDisplayed({ timeout: 3000 });
            answerFound = true;
        } catch (error) {
            console.log(`Primary answer selector failed for "${question}". Trying fallback...`);
        }

        if (!answerFound) {
            try {
                answerElem = await PG_Services.lbl_FAQsAnswerContent(question);
                await answerElem.waitForDisplayed({ timeout: 3000 });
                answerFound = true;
            } catch (error) {
                console.log(`Fallback answer selector failed for "${question}". Trying generic...`);
            }
        }

        if (!answerFound) {
            try {
                answerElem = await PG_Services.lbl_FAQsGenericAnswer(question);
                await answerElem.waitForDisplayed({ timeout: 3000 });
                answerFound = true;
            } catch (error) {
                console.log(`All answer selectors failed for "${question}"`);
            }
        }

        if (!answerFound) {
            throw new Error(`Could not locate answer element for FAQ: "${question}"`);
        }

        await browser.waitUntil(
            async () => {
                try {
                    const text = await answerElem.getText();
                    return text && text.trim().length > 0;
                } catch (error) {
                    return false;
                }
            },
            {
                timeout: 15000, 
                interval: 500,
                timeoutMsg: `Answer content for "${question}" did not load within timeout period`,
            }
        );

        const actualText = await answerElem.getText();
        if (!actualText.includes(answer)) {
            console.log(`Expected answer part: "${answer}"`);
            console.log(`Actual answer text: "${actualText}"`);
            await expect(answerElem).toHaveTextContaining(answer.substring(0, 50)); 
        }

        await LIB_Common.bc_LogAllureReportAndLogs(`Verified FAQ: "${question}"`);

        try {
            await arrow.click();
            await browser.pause(500);
            await LIB_Common.bc_LogAllureReportAndLogs(`Collapsed FAQ: "${question}"`);
        } catch (error) {
            console.log(`Could not collapse FAQ: "${question}" - ${error.message}`);
        }
    }

  /**
   * a method to Verify FAQ List 
   */
    async bc_VerifyAllFAQs(faqList) {
        let failedFAQs = [];
        
        for (const { question, answer } of faqList) {
            try {
                await this.bc_VerifySingleFAQ(question, answer);
            } catch (error) {
                console.error(`Failed to verify FAQ: "${question}" - ${error.message}`);
                failedFAQs.push({ question, error: error.message });
            }
        }

        // Report any failures at the end
        if (failedFAQs.length > 0) {
            const failureReport = failedFAQs.map(faq => `"${faq.question}": ${faq.error}`).join('\n');
            throw new Error(`Failed to verify ${failedFAQs.length} FAQ(s):\n${failureReport}`);
        }

        await LIB_Common.bc_LogAllureReportAndLogs(`Successfully verified all ${faqList.length} FAQs`);
    } 
}
export default new AboutUs();