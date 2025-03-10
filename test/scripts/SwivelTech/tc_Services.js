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

    // Click on the "Services" -> "Artificial Intelligence" navigation
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
    // Click on the "Services" -> "Artificial Intelligence" navigation
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
    // Click on the "Services" -> "Artificial Intelligence" navigation
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

  it("Verify the DevOps As A Service Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify the DevOps As A Service Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    // Click on the "Services" -> "DevOps As A Service" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_DevOpsAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("devops-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_DevOpsConsultingServicesAndSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.DevOpsConsultingServicesAndSolutions_Description,
    );

    //Verify the "Why choose Swivel Tech for DevOps consulting services?"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Title_WhyChooseSwivelTechForDevOpsConsultingServices,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "experience.svg",
      Data_Services.Title_DevOpsTile1,
      Data_Services.Description_DevOpsTile1,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "devops.svg",
      Data_Services.Title_DevOpsTile2,
      Data_Services.Description_DevOpsTile2,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "strategies.svg",
      Data_Services.Title_DevOpsTile3,
      Data_Services.Description_DevOpsTile3,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "aws.svg",
      Data_Services.Title_DevOpsTile4,
      Data_Services.Description_DevOpsTile4,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "continuous-support.svg",
      Data_Services.Title_DevOpsTile5,
      Data_Services.Description_DevOpsTile5,
    );

    //Verify the "How can our DevOps engineers help?"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_HowCanOurDevOpsEngineersHelp,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "cicd-pipeline.svg",
      Data_Services.SubTitle_HelpDevOps1,
      Data_Services.Description_HelpDevOps1,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "cloud-infrastructure.svg",
      Data_Services.SubTitle_HelpDevOps2,
      Data_Services.Description_HelpDevOps2,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "config-management.svg",
      Data_Services.SubTitle_HelpDevOps3,
      Data_Services.Description_HelpDevOps3,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "monitoring_performance.svg",
      Data_Services.SubTitle_HelpDevOps4,
      Data_Services.Description_HelpDevOps4,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "Icons.svg",
      Data_Services.SubTitle_HelpDevOps5,
      Data_Services.Description_HelpDevOps5,
    );

    //Verify the "Our DevOps consulting process"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_OurDevOpsConsultingProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number1,
      Data_Services.Step1_Header,
      Data_Services.Step1_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number2,
      Data_Services.Step2_Header,
      Data_Services.Step2_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number3,
      Data_Services.Step3_Header,
      Data_Services.Step3_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number4,
      Data_Services.Step4_Header,
      Data_Services.Step4_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number5,
      Data_Services.Step5_Header,
      Data_Services.Step5_Description,
    );

    //Verify the "Elevate Your Business with DevOps Solutions of the Highest Quality"
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Services.Header_ElevateYourBusinessWithDevOpsSolutionsOfTheHighestQuality,
    );
    await LIB_Common.bc_VerifyTheButton("SCHEDULE A CALL", 1);
    await LIB_Common.bc_ClickOnButton("SCHEDULE A CALL", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    // Click on the "Services" -> "DevOps as a Service" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_DevOpsAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("devops-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_DevOpsConsultingServicesAndSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.DevOpsConsultingServicesAndSolutions_Description,
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
    // Click on the "Services" -> "DevOps as a Service" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_DevOpsAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("devops-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(
      Data_Resources.Header_DevOpsConsultingServicesAndSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.DevOpsConsultingServicesAndSolutions_Description,
    );

    //Verify the "FAQs"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Header_FAQs);
    await LIB_HowWeWork.bc_VerifyFAQs(Data_Services.Q1, Data_Services.A1);

    await LIB_HowWeWork.bc_VerifyFAQsQuestionsAndIcon(Data_Services.Q2);
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q2,
      Data_Services.A2_Part1,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q2,
      Data_Services.A2_Part2,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q2,
      Data_Services.A2_Part3,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q2,
      Data_Services.A2_Part4,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q2,
      Data_Services.A2_Part5,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q2,
      Data_Services.A2_Part6,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q2,
      Data_Services.A2_Part7,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q2,
      Data_Services.A2_Part8,
    );
    await LIB_HowWeWork.bc_CollapseTheFAQsAnswers(Data_Services.Q2);

    await LIB_HowWeWork.bc_VerifyFAQs(Data_Services.Q3, Data_Services.A3);

    await LIB_HowWeWork.bc_VerifyFAQsQuestionsAndIcon(Data_Services.Q4);
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q4,
      Data_Services.A4_Part1,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q4,
      Data_Services.A4_Part2,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q4,
      Data_Services.A4_Part3,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q4,
      Data_Services.A4_Part4,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q4,
      Data_Services.A4_Part5,
    );
    await LIB_HowWeWork.bc_CollapseTheFAQsAnswers(Data_Services.Q4);

    await LIB_HowWeWork.bc_VerifyFAQs(Data_Services.Q5, Data_Services.A5);

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

  it("Verify the Enterprise Software Development Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify the Enterprise Software Development Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    // Click on the "Services" -> "Enterprise Software Development" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_EnterpriseSoftwareDevelopment,
    );
    await LIB_Common.bc_VerifyTheAppURL("enterprise-software-development");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_EnterpriseApplicationSoftwareDevelopmentSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.EnterpriseApplicationSoftwareDevelopmentSolutions_Description,
    );

    //Verify the "Why choose Swivel Tech to Develop Your Enterprise Business Application?"
    await LIB_Common.bc_VerifyAnyText(
      Data_Services.Header_WhyChooseSwivelTechToDevelopYourEnterpriseBusinessApplication,
      1,
    );

    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "customer-centric-approach.svg",
      Data_Services.T1_BusinessApplication,
      Data_Services.D1_BusinessApplication,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "scalable-solutions.svg",
      Data_Services.T2_BusinessApplication,
      Data_Services.D2_BusinessApplication,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "best-inclass-technologies.svg",
      Data_Services.T3_BusinessApplication,
      Data_Services.D3_BusinessApplication,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "data-driven.svg",
      Data_Services.T4_BusinessApplication,
      Data_Services.D4_BusinessApplication,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "User-Experience.svg",
      Data_Services.T5_BusinessApplication,
      Data_Services.D5_BusinessApplication,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "support-team.svg",
      Data_Services.T6_BusinessApplication,
      Data_Services.D6_BusinessApplication,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "cost-effieciency.svg",
      Data_Services.T7_BusinessApplication,
      Data_Services.D7_BusinessApplication,
    );

    //Verify the "What Enterprise Software Solutions Can We Help You With?"
    await LIB_Common.bc_VerifyAnyText(
      Data_Services.Header_WhatEnterpriseSoftwareSolutionsCanWeHelpYouWith,
      1,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "crm.svg",
      Data_Services.T1_EnterpriseSoftwareSolutions,
      Data_Services.D1_EnterpriseSoftwareSolutions,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "erp.svg",
      Data_Services.T2_EnterpriseSoftwareSolutions,
      Data_Services.D2_EnterpriseSoftwareSolutions,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "design-and-dev.svg",
      Data_Services.T3_EnterpriseSoftwareSolutions,
      Data_Services.D3_EnterpriseSoftwareSolutions,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "data_analysis.svg",
      Data_Services.T4_EnterpriseSoftwareSolutions,
      Data_Services.D4_EnterpriseSoftwareSolutions,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "supply-chain-management.svg",
      Data_Services.T5_EnterpriseSoftwareSolutions,
      Data_Services.D5_EnterpriseSoftwareSolutions,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "project-management.svg",
      Data_Services.T6_EnterpriseSoftwareSolutions,
      Data_Services.D6_EnterpriseSoftwareSolutions,
    );

    //Verify the "Our 5-step Enterprise-Level Software Development Consultation Process"
    await LIB_Common.bc_VerifyAnyText(
      Data_Services.Header_Our5StepEnterpriseLevelSoftwareDevelopmentConsultationProcess,
      1,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number1,
      Data_Services.S1_Header,
      Data_Services.S1_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number2,
      Data_Services.S2_Header,
      Data_Services.S2_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number3,
      Data_Services.S3_Header,
      Data_Services.S3_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number4,
      Data_Services.S4_Header,
      Data_Services.S4_Description,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number5,
      Data_Services.S5_Header,
      Data_Services.S5_Description,
    );

    //Verify the "Let Us Elevate Your Business with Enterprise Software Solutions of the Highest Quality"
    await LIB_Common.bc_VerifyTheParagraph(Data_Services.S1_Footer);
    await LIB_Common.bc_VerifyTheButton("SCHEDULE A CALL", 1);
    await LIB_Common.bc_ClickOnButton("SCHEDULE A CALL", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    // Click on the "Services" -> "Enterprise Software Development" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_EnterpriseSoftwareDevelopment,
    );
    await LIB_Common.bc_VerifyTheAppURL("enterprise-software-development");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_EnterpriseApplicationSoftwareDevelopmentSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.EnterpriseApplicationSoftwareDevelopmentSolutions_Description,
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
    await LIB_Common.bc_VerifyTheButton("Read More", 4);
    await LIB_Common.bc_ClickOnButton("Read More", 4);
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.CaseStudies_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("case-studies");
    // Click on the "Services" -> "Enterprise Software Development" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_EnterpriseSoftwareDevelopment,
    );
    await LIB_Common.bc_VerifyTheAppURL("enterprise-software-development");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_EnterpriseApplicationSoftwareDevelopmentSolutions,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.EnterpriseApplicationSoftwareDevelopmentSolutions_Description,
    );

    //Verify the "FAQs"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Header_FAQs);
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q1_InEnterprise,
      Data_Services.A1_InEnterprise,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q2_InEnterprise,
      Data_Services.A2_InEnterprise,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q3_InEnterprise,
      Data_Services.A3_InEnterprise,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q4_InEnterprise,
      Data_Services.A4_InEnterprise,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q5_InEnterprise,
      Data_Services.A5_InEnterprise,
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

  it("Verify the Managed Service Augmentation Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify the Managed Service Augmentation Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    // Click on the "Services" -> "Managed Service Augmentation" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_ManagedServiceAugmentation,
    );
    await LIB_Common.bc_VerifyTheAppURL("managed-service-augmentation");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_SeamlesslyExpandYourTeamWithStaffAugmentation,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.SeamlesslyExpandYourTeamWithStaffAugmentation_Description,
    );

    //Verify the "Benefits of Choosing This Option"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_BenefitsOfChoosingThisOption,
    );
    await LIB_Services.bc_VerifyBenefitsOfChoosingThisOption(
      Data_Services.T1_BenefitsOfChoosingThisOption,
      Data_Services.D1_BenefitsOfChoosingThisOption,
    );
    await LIB_Services.bc_VerifyBenefitsOfChoosingThisOption(
      Data_Services.T2_BenefitsOfChoosingThisOption,
      Data_Services.D2_BenefitsOfChoosingThisOption,
    );
    await LIB_Services.bc_VerifyBenefitsOfChoosingThisOption(
      Data_Services.T3_BenefitsOfChoosingThisOption,
      Data_Services.D3_BenefitsOfChoosingThisOption,
    );
    await LIB_Services.bc_VerifyBenefitsOfChoosingThisOption(
      Data_Services.T4_BenefitsOfChoosingThisOption,
      Data_Services.D4_BenefitsOfChoosingThisOption,
    );
    await LIB_Services.bc_VerifyBenefitsOfChoosingThisOption(
      Data_Services.T5_BenefitsOfChoosingThisOption,
      Data_Services.D5_BenefitsOfChoosingThisOption,
    );

    //Verify the "Our Process"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Header_OurProcess);
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number1,
      Data_Services.T1_OurProcess,
      Data_Services.D1_OurProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number2,
      Data_Services.T2_OurProcess,
      Data_Services.D2_OurProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number3,
      Data_Services.T3_OurProcess,
      Data_Services.D3_OurProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number4,
      Data_Services.T4_OurProcess,
      Data_Services.D4_OurProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number5,
      Data_Services.T5_OurProcess,
      Data_Services.D5_OurProcess,
    );

    //Verify the "FAQs"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Header_FAQs);
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q1_ManagedServiceAugmentation,
      Data_Services.A1_ManagedServiceAugmentation,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q2_ManagedServiceAugmentation,
      Data_Services.A2_ManagedServiceAugmentation,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q3_ManagedServiceAugmentation,
      Data_Services.A3_ManagedServiceAugmentation,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q4_ManagedServiceAugmentation,
      Data_Services.A4_ManagedServiceAugmentation,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q5_ManagedServiceAugmentation,
      Data_Services.A5_ManagedServiceAugmentation,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q6_ManagedServiceAugmentation,
      Data_Services.A6_ManagedServiceAugmentation,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q7_ManagedServiceAugmentation,
      Data_Services.A7_ManagedServiceAugmentation,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q8_ManagedServiceAugmentation,
      Data_Services.A8_ManagedServiceAugmentation,
    );

    //Verify the "Our Latest Insights"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Header_OurLatestInsights);
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Services.Description_OurLatestInsights,
    );

    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights1_Title,
      Data_Resources.OurLatestInsights1_Category,
      Data_Resources.OurLatestInsights1_Date,
      Data_Resources.OurLatestInsights1_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights2_Title,
      Data_Resources.OurLatestInsights2_Category,
      Data_Resources.OurLatestInsights2_Date,
      Data_Resources.OurLatestInsights2_SubDescription,
    );
    await LIB_Home.bc_VerifyOurLatestInsightsTile(
      Data_Resources.OurLatestInsights3_Title,
      Data_Resources.OurLatestInsights3_Category,
      Data_Resources.OurLatestInsights3_Date,
      Data_Resources.OurLatestInsights3_SubDescription,
    );

    await LIB_Common.bc_VerifyTheButton("ALL BLOG ARTICLES ", 1);
    await LIB_Common.bc_ClickOnButton("ALL BLOG ARTICLES ", 1);

    await LIB_Common.bc_VerifyTheAppURL("blogs");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Blogs_Top_Header);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.Blogs_Top_Description,
    );

    // Click on the "Services" -> "Managed Service Augmentation" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_ManagedServiceAugmentation,
    );
    await LIB_Common.bc_VerifyTheAppURL("managed-service-augmentation");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_SeamlesslyExpandYourTeamWithStaffAugmentation,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.SeamlesslyExpandYourTeamWithStaffAugmentation_Description,
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

  it("Verify the QA as a Service Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify the QA as a Service Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    // Click on the "Services" -> "QA as a Service" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_QAAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("qa-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_QAAsAService);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.QAAsAService_Description,
    );

    //Verify the "Why Choose Swivel Tech?"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_WhyChooseSwivelTech,
    );

    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "pencil-gear.svg",
      Data_Services.T1_WhyChooseSwivelTech,
      Data_Services.D1_WhyChooseSwivelTech,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "efficiency.svg",
      Data_Services.T2_WhyChooseSwivelTech,
      Data_Services.D2_WhyChooseSwivelTech,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "automation.svg",
      Data_Services.T3_WhyChooseSwivelTech,
      Data_Services.D3_WhyChooseSwivelTech,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "premium (1).svg",
      Data_Services.T4_WhyChooseSwivelTech,
      Data_Services.D4_WhyChooseSwivelTech,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "team-building.svg",
      Data_Services.T5_WhyChooseSwivelTech,
      Data_Services.D5_WhyChooseSwivelTech,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "growth.svg",
      Data_Services.T6_WhyChooseSwivelTech,
      Data_Services.D6_WhyChooseSwivelTech,
    );

    //Verify the "How Can Our QA Team Help?"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_HowCanOurQATeamHelp,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "test-coverage.svg",
      Data_Services.T1_HowCanOurQATeamHelp,
      Data_Services.D1_HowCanOurQATeamHelp,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "webpage-speed-testing.svg",
      Data_Services.T2_HowCanOurQATeamHelp,
      Data_Services.D2_HowCanOurQATeamHelp,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "Security Testing - QA 1.svg",
      Data_Services.T3_HowCanOurQATeamHelp,
      Data_Services.D3_HowCanOurQATeamHelp,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "user.svg",
      Data_Services.T4_HowCanOurQATeamHelp,
      Data_Services.D4_HowCanOurQATeamHelp,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "devices.svg",
      Data_Services.T5_HowCanOurQATeamHelp,
      Data_Services.D5_HowCanOurQATeamHelp,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "software-testing.svg",
      Data_Services.T6_HowCanOurQATeamHelp,
      Data_Services.D6_HowCanOurQATeamHelp,
    );

    //Verify the "Our Quality Assurance Process"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_OurQualityAssuranceProcess,
    );
    await LIB_Common.bc_VerifyAnyText(
      Data_Services.Description_OurQualityAssuranceProcess,
      1,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number1,
      Data_Services.T1_OurQualityAssuranceProcess,
      Data_Services.D1_OurQualityAssuranceProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number2,
      Data_Services.T2_OurQualityAssuranceProcess,
      Data_Services.D2_OurQualityAssuranceProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number3,
      Data_Services.T3_OurQualityAssuranceProcess,
      Data_Services.D3_OurQualityAssuranceProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number4,
      Data_Services.T4_OurQualityAssuranceProcess,
      Data_Services.D4_OurQualityAssuranceProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number5,
      Data_Services.T5_OurQualityAssuranceProcess,
      Data_Services.D5_OurQualityAssuranceProcess,
    );

    //Verify the "Schedule a Call to Set Up Your Quality Assurance Team"
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Services.Header_ScheduleACallToSetUpYourQualityAssuranceTeam,
    );
    await LIB_Common.bc_VerifyTheButton("SCHEDULE A CALL", 1);
    await LIB_Common.bc_ClickOnButton("SCHEDULE A CALL", 1);

    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    // Click on the "Services" -> "QA as a Service" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_QAAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("qa-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_QAAsAService);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.QAAsAService_Description,
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
    await LIB_Common.bc_VerifyTheButton("Read More", 4);
    await LIB_Common.bc_ClickOnButton("Read More", 4);

    //Verify the top header and description
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_CaseStudies);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.CaseStudies_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("case-studies");
    // Click on the "Services" -> "QA as a Service" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_QAAsAService,
    );
    await LIB_Common.bc_VerifyTheAppURL("qa-as-a-service");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(Data_Resources.Header_QAAsAService);
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.QAAsAService_Description,
    );

    //Verify the "FAQs"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Header_FAQs);

    await LIB_HowWeWork.bc_VerifyFAQsQuestionsAndIcon(
      Data_Services.Q1_QaAsAService,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q1_QaAsAService,
      Data_Services.A1_QaAsAService1,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q1_QaAsAService,
      Data_Services.A1_QaAsAService2,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q1_QaAsAService,
      Data_Services.A1_QaAsAService3,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q1_QaAsAService,
      Data_Services.A1_QaAsAService4,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q1_QaAsAService,
      Data_Services.A1_QaAsAService5,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q1_QaAsAService,
      Data_Services.A1_QaAsAService6,
    );
    await LIB_HowWeWork.bc_VerifyFAQsAnswers(
      Data_Services.Q1_QaAsAService,
      Data_Services.A1_QaAsAService7,
    );
    await LIB_HowWeWork.bc_CollapseTheFAQsAnswers(
      Data_Services.Q1_QaAsAService,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q2_QaAsAService,
      Data_Services.A2_QaAsAService,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q3_QaAsAService,
      Data_Services.A3_QaAsAService,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q4_QaAsAService,
      Data_Services.A4_QaAsAService,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q5_QaAsAService,
      Data_Services.A5_QaAsAService,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q6_QaAsAService,
      Data_Services.A6_QaAsAService,
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

  it("Verify the Search Engine Optimisation Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify the Search Engine Optimisation Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    // Click on the "Services" -> "Search Engine Optimisation" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_SearchEngineOptimisation,
    );

    await LIB_Common.bc_VerifyTheAppURL("search-engine-optimization");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_SEOConsultancyAndAuditingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.SEOConsultancyAndAuditingServices_Description,
    );

    //Verify the "Why choose Swivel Tech for SEO Consultancy Services?"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_WhyChooseSwivelTechForSEOConsultancyServices,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "_why-choose-us-icon_.svg",
      Data_Services.T1_WhyChooseSwivelTechForSEOConsultancyServices,
      Data_Services.D1_WhyChooseSwivelTechForSEOConsultancyServices,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "_why-choose-us-icon_ (1).svg",
      Data_Services.T2_WhyChooseSwivelTechForSEOConsultancyServices,
      Data_Services.D2_WhyChooseSwivelTechForSEOConsultancyServices,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "end-to-end-support.svg",
      Data_Services.T3_WhyChooseSwivelTechForSEOConsultancyServices,
      Data_Services.D3_WhyChooseSwivelTechForSEOConsultancyServices,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "proven-results.svg",
      Data_Services.T4_WhyChooseSwivelTechForSEOConsultancyServices,
      Data_Services.D4_WhyChooseSwivelTechForSEOConsultancyServices,
    );

    //Verify the "What SEO Solutions Can We Help You With?"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_WhatSEOSolutionsCanWeHelpYouWith,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "_how-help-icons_.svg",
      Data_Services.T1_WhatSEOSolutionsCanWeHelpYouWith,
      Data_Services.D1_WhatSEOSolutionsCanWeHelpYouWith,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "_how-help-icons_ (1).svg",
      Data_Services.T2_WhatSEOSolutionsCanWeHelpYouWith,
      Data_Services.D2_WhatSEOSolutionsCanWeHelpYouWith,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "_how-help-icons_ (2).svg",
      Data_Services.T3_WhatSEOSolutionsCanWeHelpYouWith,
      Data_Services.D3_WhatSEOSolutionsCanWeHelpYouWith,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "_how-help-icons_ (3).svg",
      Data_Services.T4_WhatSEOSolutionsCanWeHelpYouWith,
      Data_Services.D4_WhatSEOSolutionsCanWeHelpYouWith,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "site-migration-assistance.svg",
      Data_Services.T5_WhatSEOSolutionsCanWeHelpYouWith,
      Data_Services.D5_WhatSEOSolutionsCanWeHelpYouWith,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "_how-help-icons_ (4).svg",
      Data_Services.T6_WhatSEOSolutionsCanWeHelpYouWith,
      Data_Services.D6_WhatSEOSolutionsCanWeHelpYouWith,
    );
    await LIB_Services.bc_VerifyWhyChooseSwivelTechForAIConsultingServices(
      "link-building.svg",
      Data_Services.T7_WhatSEOSolutionsCanWeHelpYouWith,
      Data_Services.D7_WhatSEOSolutionsCanWeHelpYouWith,
    );

    //Verify the "Our 4-step SEO Consultancy Process"
    await LIB_Common.bc_VerifyH2Header(
      Data_Services.Header_Our4StepSEOConsultancyProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number1,
      Data_Services.T1_Our4StepSEOConsultancyProcess,
      Data_Services.D1_Our4StepSEOConsultancyProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number2,
      Data_Services.T2_Our4StepSEOConsultancyProcess,
      Data_Services.D2_Our4StepSEOConsultancyProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number3,
      Data_Services.T3_Our4StepSEOConsultancyProcess,
      Data_Services.D3_Our4StepSEOConsultancyProcess,
    );
    await LIB_HowWeWork.bc_VerifyStepTile(
      Data_Services.Step_Number4,
      Data_Services.T4_Our4StepSEOConsultancyProcess,
      Data_Services.D4_Our4StepSEOConsultancyProcess,
    );

    //Verify the "Elevate Your Business with Top Quality SEO Solutions"
    await LIB_Common.bc_VerifyTheParagraph(
      Data_Services.Header_ElevateYourBusinessWithTopQualitySEOSolutions,
    );

    await LIB_Common.bc_VerifyTheButton("SCHEDULE A CALL", 1);
    await LIB_Common.bc_ClickOnButton("SCHEDULE A CALL", 1);
    await LIB_Common.bc_VerifyH1Header(Data_Resources.Header_ContactUs);
    await LIB_Home.bc_VerifySubPageHeaderInPTag(
      Data_Resources.ContactUs_Description,
    );
    await LIB_Common.bc_VerifyTheAppURL("contact-us");
    // Click on the "Services" -> "Search Engine Optimisation" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_SearchEngineOptimisation,
    );

    await LIB_Common.bc_VerifyTheAppURL("search-engine-optimization");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_SEOConsultancyAndAuditingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.SEOConsultancyAndAuditingServices_Description,
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
    // Click on the "Services" -> "Search Engine Optimisation" navigation
    await LIB_Home.bc_ClickOnTopTab(
      Data_Home.TabName_Services,
      Data_Home.Services_SearchEngineOptimisation,
    );

    await LIB_Common.bc_VerifyTheAppURL("search-engine-optimization");
    //Verify the top header and description
    await LIB_Common.bc_VerifyH1HeaderText(
      Data_Resources.Header_SEOConsultancyAndAuditingServices,
    );
    await LIB_Home.bc_VerifySubPageHeaderToMatchAllInPTag(
      Data_Resources.SEOConsultancyAndAuditingServices_Description,
    );

    //Verify the "FAQs"
    await LIB_Common.bc_VerifyH2Header(Data_Services.Header_FAQs);
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q1_SEO,
      Data_Services.A1_SEO,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q2_SEO,
      Data_Services.A2_SEO,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q3_SEO,
      Data_Services.A3_SEO,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q4_SEO,
      Data_Services.A4_SEO,
    );
    await LIB_HowWeWork.bc_VerifyFAQs(
      Data_Services.Q5_SEO,
      Data_Services.A5_SEO,
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
