import config from "../../../config.json" assert { type: "json" };
import LIB_Common from "../../components/LIB_Common.js";
import Data_Home from "../../data/SwivelTech/dt_home.json" assert { type: "json" };
import LIB_Home from "../../components/SwivelTech/LIB_Home.js";
import Data_Resources from "../../data/SwivelTech/dt_resources.json" assert { type: "json" };
import Data_Services from "../../data/SwivelTech/dt_services.json" assert { type: "json" };
import LIB_Services from "../../components/SwivelTech/LIB_Services.js";
import LIB_HowWeWork from "../../components/SwivelTech/LIB_HowWeWork.js";

describe("Swivel Tech Site -> Services Page", () => {
  it("Verify the Artificial Intelligence Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify the Artificial Intelligence Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    // Verify the "Services" -> "Artificial Intelligence" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_ArtificialIntelligence,
    );
    await LIB_Common.bc_VerifyTheAppURL("artificial-intelligence");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_ArtificialIntelligenceConsultingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ArtificialIntelligenceConsultingServices_Description,
    );

    //Verify the "Why choose Swivel Tech for AI Consulting Services?"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.SubHeader_WhyChooseSwivelTechForAIConsultingServices,
    );

    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "quality.svg",
      Data_Services.SubTitle_AIServices1,
      Data_Services.AIServices_Description1,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "value-results.svg",
      Data_Services.SubTitle_AIServices2,
      Data_Services.AIServices_Description2,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "AI-services.svg",
      Data_Services.SubTitle_AIServices3,
      Data_Services.AIServices_Description3,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "scalable-future.svg",
      Data_Services.SubTitle_AIServices4,
      Data_Services.AIServices_Description4,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "ongoing-support.svg",
      Data_Services.SubTitle_AIServices5,
      Data_Services.AIServices_Description5,
    );

    //Verify the "How Can Our Expert AI Consultants Help?"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_HowCanOurExpertAIConsultantsHelp,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "Group 13573.svg",
      Data_Services.SubTitle_AIConsultants1,
      Data_Services.AIConsultants_Description1,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "Group.svg",
      Data_Services.SubTitle_AIConsultants2,
      Data_Services.AIConsultants_Description2,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "artificial-intelligence.svg",
      Data_Services.SubTitle_AIConsultants3,
      Data_Services.AIConsultants_Description3,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "automated-chat-moderation.svg",
      Data_Services.SubTitle_AIConsultants4,
      Data_Services.AIConsultants_Description4,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "multiple-content-generation.svg",
      Data_Services.SubTitle_AIConsultants5,
      Data_Services.AIConsultants_Description5,
    );

    // Verify the "Our 5-step AI Consulting Process"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Title_Our5StepAIConsultingProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number1,
      Data_Services.SubTitle_Number1,
      Data_Services.Number1_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number2,
      Data_Services.SubTitle_Number2,
      Data_Services.Number2_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number3,
      Data_Services.SubTitle_Number3,
      Data_Services.Number3_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number4,
      Data_Services.SubTitle_Number4,
      Data_Services.Number4_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number5,
      Data_Services.SubTitle_Number5,
      Data_Services.Number5_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number6,
      Data_Services.SubTitle_Number6,
      Data_Services.Number6_Description,
    );

    //Verify the "Let Us Elevate Your Business with AI Solutions of the Highest Quality"
    await LIB_Common.bc_VerifyTheParagraph(Data_Services.SubTitle_Footer);
    await LIB_Common.bc_VerifyTheButton("SCHEDULE A CALL", 1);

    await LIB_Common.bc_ClickOnButton("SCHEDULE A CALL", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    // Verify the "Services" -> "Artificial Intelligence" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_ArtificialIntelligence,
    );
    await LIB_Common.bc_VerifyTheAppURL("artificial-intelligence");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_ArtificialIntelligenceConsultingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ArtificialIntelligenceConsultingServices_Description,
    );

    //Verify the Successful tile
    await LIB_Common.bc_VerifyH2Header(
      Data_Home.SubTitle_SuccessfulClientProject,
    );
    await LIB_Common.bc_VerifyPageHeader(
      Data_Home.SuccessfulClientProject_Description,
      1,
    );
    await LIB_Home.bc_VerifySuccessfulClientProjectTile(
      Data_Home.Title_SuccessfulProject1,
      Data_Home.SuccessfulProject1_Description,
    );
    await LIB_Home.bc_VerifySuccessfulClientProjectTile(
      Data_Home.Title_SuccessfulProject2,
      Data_Home.SuccessfulProject2_Description,
    );
    await LIB_Home.bc_VerifySuccessfulClientProjectTile(
      Data_Home.Title_SuccessfulProject3,
      Data_Home.SuccessfulProject3_Description,
    );
    await LIB_Common.bc_VerifyTheButton("Read  more", 1);
    await LIB_Common.bc_ClickOnButton("Read  more", 1);
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.CaseStudies_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("case-studies");
    // Verify the "Services" -> "Artificial Intelligence" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_ArtificialIntelligence,
    );
    await LIB_Common.bc_VerifyTheAppURL("artificial-intelligence");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_ArtificialIntelligenceConsultingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ArtificialIntelligenceConsultingServices_Description,
    );
    //Verify the "FAQs"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Header_FAQs);
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Question1,
      Data_Services.Answer1,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Question2,
      Data_Services.Answer2,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Question3,
      Data_Services.Answer3,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Question4,
      Data_Services.Answer4,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Question5,
      Data_Services.Answer5,
    );
    await LIB_Common.bc_VerifyH3Header(Data_Resources.Header_HowCanWeHelpYou);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Resources.HowCanWeHelpYou_Description,
    );
    await LIB_Common.bc_VerifyTheButton(
      Data_Resources.Header_BookADiscoveryCall,
      1,
    );

    //Click on Book A Discovery Call
    await LIB_Common.bc_ClickOnButton(
      Data_Resources.Header_BookADiscoveryCall,
      1,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.ContactUs_Description,
    );
  });
});
