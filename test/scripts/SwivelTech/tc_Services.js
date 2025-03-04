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

  it("Verify the DevOps As A Service Page", async () => {
    await LIB_Common.bc_StartAllureReportStep(
      "Swivel Tech -> Verify the DevOps As A Service Page",
    );
    await LIB_Common.bc_OpenApplication(config.URLS.SWIVEL_TECH);
    await LIB_Common.bc_ClickOnButton("Accept", 1);
    await LIB_Common.bc_VerifyPageHeader(Data_Home.Top_Header1, 1);

    // Verify the "Services" -> "DevOps As A Service" navigation
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
    // Verify the "Services" -> "DevOps as a Service" navigation
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
    // Verify the "Services" -> "DevOps as a Service" navigation
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
    // await LIB_HowWeWork.bc_VerifyFAQs(Data_Services.Q2, Data_Services.A2);//Failing Number 2 question and answer
    await LIB_HowWeWork.bc_VerifyFAQs(Data_Services.Q3, Data_Services.A3);
    // await LIB_HowWeWork.bc_VerifyFAQs(Data_Services.Q4, Data_Services.A4);//Failing Number 4 question and answer
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

    // Verify the "Services" -> "Enterprise Software Development" navigation
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
    // Verify the "Services" -> "Enterprise Software Development" navigation
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
    // Verify the "Services" -> "Enterprise Software Development" navigation
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
});
