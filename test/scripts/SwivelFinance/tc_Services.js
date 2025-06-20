import config from "../../../config.js";
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelFinance/dt_home.js";
import LIB_Home from "../../components/SwivelFinance/LIB_Home.js";
import LIB_Services from "../../components/SwivelFinance/LIB_Services.js";
import Data_ContactUs from "../../data/SwivelFinance/dt_contactUs.js";
import Data_Services from "../../data/SwivelFinance/dt_Services.js";
import Data_SuccessfulClientProject from "../../data/SwivelFinance/dt_successfulClientProject.js"

describe("Swivel Finance Site -> Services Page", () => {
  it("Verify the Services Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Finance -> Services Page Verification",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_FINANCE);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);

    //Click on Tab "Who we are"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_Services);
    await LIB_Common.bc_VerifyH1Header(Data_Services.Header_Services);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Services_Description, 1);
    await LIB_Common.bc_VerifyTheAppURL("our-services");

    //Verify "How Swivel Finance Can Help You"
    await LIB_Common.bc_VerifyH3Header(Data_Services.Title_HowSwivelFinanceCanHelpYou);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_HowSwivelFinanceCanHelpYou,1);

    await LIB_Services.bc_VerifyLabelWithCount(
      Data_Services.Label_Year,
      Data_Services.Year_Count,
    );
    await LIB_Services.bc_VerifyLabelWithCount(
        Data_Services.Label_Expert,
        Data_Services.Expert_Count,
    );
    await LIB_Services.bc_VerifyLabelWithCount(
        Data_Services.Label_Industries,
        Data_Services.Industries_Count,
    );

    //Verify "Why Outsource with Swivel Finance?"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Title_WhyOutsourcewithSwivelFinance);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_WhyOutsourcewithSwivelFinance,1);
    await LIB_Common.bc_VerifyH3Header(Data_Services.Title_JobBased);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_JobBased,1);
    await LIB_Common.bc_VerifyH3Header(Data_Services.Title_Augmented);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_Augmented1,1);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_Augmented2,1);

    //Verify "what we offer"
    await LIB_Common.bc_VerifyH3Header(Data_Services.Title_whatweoffer);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_whatweoffer,1);
    await LIB_Services.bc_VerifywhatweofferCards(
        Data_Services.Bookkeeping,
        Data_Services.Bookkeeping_Description,
    );
    await LIB_Services.bc_VerifywhatweofferCards(
      Data_Services.Tax,
      Data_Services.Tax_Description,
    );
    await LIB_Services.bc_VerifywhatweofferCards(
        Data_Services.SMSF,
        Data_Services.SMSF_Description,
    );
    //Click on Get a Custom Quote Today
    await LIB_Common.bc_ClickOnButton("Get a Custom Quote Today", 1);
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    await LIB_Common.bc_VerifyH1Header(Data_ContactUs.Header_ContactUs);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.ContactUs_Description,
    );
    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);
    //Click on Tab "Services"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_Services);

    //Verify "Why Choose Swivel Finance?"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Title_WhyChooseSwivelFinance);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_WhyChooseSwivelFinance1,1);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_WhyChooseSwivelFinance2,1);
    await LIB_Common.bc_VerifyH5Header(Data_Services.WhyChooseSwivelFinance_Card1);
    await LIB_Common.bc_VerifyH5Header(Data_Services.WhyChooseSwivelFinance_Card2);
    await LIB_Common.bc_VerifyH5Header(Data_Services.WhyChooseSwivelFinance_Card3);
    await LIB_Common.bc_VerifyH5Header(Data_Services.WhyChooseSwivelFinance_Card4);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_WhyChooseSwivelFinance3,1);

    //Verify "Onboarding Process"
    await LIB_Common.bc_VerifyH3Header(Data_Services.Title_OnboardingProcess);
    await LIB_Services.bc_VerifyStepTile(
        Data_Services.Step_Number1,
        Data_Services.Step_Header1,
        Data_Services.Step_Description1,
    );
    await LIB_Services.bc_VerifyStepTile(
        Data_Services.Step_Number2,
        Data_Services.Step_Header2,
        Data_Services.Step_Description2,
    );
    await LIB_Services.bc_VerifyStepTile(
        Data_Services.Step_Number3,
        Data_Services.Step_Header3,
        Data_Services.Step_Description3,
    );
    await LIB_Services.bc_VerifyStepTile(
        Data_Services.Step_Number4,
        Data_Services.Step_Header4,
        Data_Services.Step_Description4,
    );
    await LIB_Services.bc_VerifyStepTile(
        Data_Services.Step_Number5,
        Data_Services.Step_Header5,
        Data_Services.Step_Description5,
    );
    await LIB_Services.bc_VerifyStepTile(
        Data_Services.Step_Number6,
        Data_Services.Step_Header6,
        Data_Services.Step_Description6,
    );

    //Verify "success stories"
    await LIB_Common.bc_VerifyH3Header(Data_Services.Title_successstories);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_successstories,1);

    await LIB_Services.bc_VerifySuccessfulClientProject(
        Data_Services.SubTitle_SuccessfulClient1,
        Data_Services.SuccessfulClient1_Description,
    );
    await LIB_Services.bc_VerifySuccessfulClientProject(
        Data_Services.SubTitle_SuccessfulClient2,
        Data_Services.SuccessfulClient2_Description,
    );
    await LIB_Services.bc_VerifySuccessfulClientProject(
        Data_Services.SubTitle_SuccessfulClient3,
        Data_Services.SuccessfulClient3_Description,
    );

    //Click on success stories
    await LIB_Services.bc_ClickOnSuccessfulClientProjectReadMoreLink(
        Data_Services.SubTitle_SuccessfulClient1,
        Data_Services.SuccessfulClient1_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("a-leading-accounting-firm");
    await LIB_Common.bc_VerifyH1Header(
        Data_SuccessfulClientProject.Header_ALeadingAccountingFirm,
    );
    await LIB_Common.bc_VerifyH5Header(
        Data_SuccessfulClientProject.SubTitle_TheNeed,
    );
    await LIB_Common.bc_VerifyTheParagraph(
        Data_SuccessfulClientProject.TheNeed_Description,
    );
    await LIB_Common.bc_VerifyH5Header(
        Data_SuccessfulClientProject.SubTitle_TheSolution,
    );
    await LIB_Common.bc_VerifyTheParagraph(
        Data_SuccessfulClientProject.TheSolution_Description,
    );
    await LIB_Common.bc_VerifyH5Header(
        Data_SuccessfulClientProject.SubTitle_TheResult,
    );
    await LIB_Common.bc_VerifyTheParagraph(
        Data_SuccessfulClientProject.TheResult_Description,
    );
    
    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);
    
    //Click on Successful Client Project
    await LIB_Services.bc_ClickOnSuccessfulClientProjectReadMoreLink(
        Data_Services.SubTitle_SuccessfulClient2,
        Data_Services.SuccessfulClient2_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("a-top-100-accounting-firm");
    
    await LIB_Common.bc_VerifyH1Header(
        Data_SuccessfulClientProject.Header_ATop100AccountingFirm,
    );
    await LIB_Common.bc_VerifyH5Header(
        Data_SuccessfulClientProject.SubTitle_TheNeed,
    );
    await LIB_Common.bc_VerifyTheParagraph(
        Data_SuccessfulClientProject.TheNeed_DescriptionForProject2,
    );
    await LIB_Common.bc_VerifyH5Header(
        Data_SuccessfulClientProject.SubTitle_TheSolution,
    );
    await LIB_Common.bc_VerifyTheParagraph(
        Data_SuccessfulClientProject.TheSolution_DescriptionForProject2,
    );
    await LIB_Common.bc_VerifyH5Header(
        Data_SuccessfulClientProject.SubTitle_TheResult,
    );
    await LIB_Common.bc_VerifyTheParagraph(
        Data_SuccessfulClientProject.TheResult_DescriptionForProject2,
    );
    
    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);
    
    //Click on Successful Client Project
    await LIB_Services.bc_ClickOnSuccessfulClientProjectReadMoreLink(
        Data_Services.SubTitle_SuccessfulClient3,
        Data_Services.SuccessfulClient3_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("a-leading-australian-health-provider");
    
    await LIB_Common.bc_VerifyH1Header(
        Data_SuccessfulClientProject.Header_ALeadingAustralianHealthProvider,
    );
    await LIB_Common.bc_VerifyH5Header(
        Data_SuccessfulClientProject.SubTitle_TheNeed,
    );
    await LIB_Common.bc_VerifyTheParagraph(
        Data_SuccessfulClientProject.TheNeed_DescriptionForProject3,
    );
    await LIB_Common.bc_VerifyH5Header(
        Data_SuccessfulClientProject.SubTitle_TheSolution,
    );
    await LIB_Home.bc_VerifyAnyTextForPTag(
        Data_SuccessfulClientProject.TheSolution_DescriptionForProject3,
        1,
    );
    await LIB_Common.bc_VerifyH5Header(
        Data_SuccessfulClientProject.SubTitle_TheResult,
    );
    await LIB_Common.bc_VerifyTheParagraph(
        Data_SuccessfulClientProject.TheResult_DescriptionForProject3,
    );

    //Click on Application logo on top and verify the home page
    await LIB_Home.bc_ClickOnTopAppLogo();
    await LIB_Common.bc_VerifyH1Header(Data_Home.HomePage_MainTitle);
    await LIB_Common.bc_VerifyTheParagraph(Data_Home.HomePage_Top_Description);
    //Click on Tab "Services"
    await LIB_Home.bc_ClickOnTabFromTopPanel(Data_Home.Tab_Services);

    //Verify FAQ's
    await LIB_Common.bc_VerifyH3Header(Data_Services.Title_FAQ);
    await LIB_Services.bc_VerifyAllFAQs([
      { question: Data_Services.Q1, answer: Data_Services.A1 },
      { question: Data_Services.Q2, answer: Data_Services.A2 },
      { question: Data_Services.Q3, answer: Data_Services.A3 },
      { question: Data_Services.Q4, answer: Data_Services.A4 },
      { question: Data_Services.Q5, answer: Data_Services.A5 },
      { question: Data_Services.Q6, answer: Data_Services.A6 },
      { question: Data_Services.Q7, answer: Data_Services.A7 },
      { question: Data_Services.Q8, answer: Data_Services.A8 },
      { question: Data_Services.Q9, answer: Data_Services.A9 },
      { question: Data_Services.Q10, answer: Data_Services.A10 },
      { question: Data_Services.Q11, answer: Data_Services.A11 },
    ]);
        
    //Verify Talk to Our Experts
    await LIB_Common.bc_VerifyH3Header(Data_Services.Title_contactus);
    await LIB_Common.bc_VerifyAnyText(Data_Services.Description_contactus,1);
    
    await LIB_Common.bc_ClickOnButton(Data_Services.Button_contactus, 1);
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    await LIB_Common.bc_VerifyH1Header(Data_ContactUs.Header_ContactUs);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_ContactUs.ContactUs_Description,
    );

  });
});