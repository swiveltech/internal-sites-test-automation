/**
 * Add relevant spec file path here which you need to test
 */

const specConfig = [
  {
    specs: [
      // This is Swivel Group Test cases
      "../test/scripts/SwivelGroup/tc_Home.js",
      "../test/scripts/SwivelGroup/tc_AboutUs.js",
      "../test/scripts/SwivelGroup/tc_Careers.js",
      "../test/scripts/SwivelGroup/tc_ContactUs.js",
      "../test/scripts/SwivelGroup/tc_Cookie.js",
      "../test/scripts/SwivelGroup/tc_Newsroom.js",
      "../test/scripts/SwivelGroup/tc_PrivacyPolicy.js",
      "../test/scripts/SwivelGroup/tc_Sitemap.js",

      // This is Swivel Finance Test cases
      "../test/scripts/SwivelFinance/tc_Home.js",

      // This is Swivel Tech Test cases
      "../test/scripts/SwivelTech/tc_Home.js",
      "../test/scripts/SwivelTech/tc_OurServices.js",
      "../test/scripts/SwivelTech/tc_Resources.js",
      "../test/scripts/SwivelTech/tc_Careers.js",
      "../test/scripts/SwivelTech/tc_Footer.js",
      "../test/scripts/SwivelTech/tc_Policy.js",
      "../test/scripts/SwivelTech/tc_AboutUs.js",
      "../test/scripts/SwivelTech/tc_HowWeWork.js",
      "../test/scripts/SwivelTech/tc_ContactUs.js",
      "../test/scripts/SwivelTech/tc_Services.js",
    ],
    testingPlan: "smoke",
    maxInstances: 1,
  },
];
export default specConfig;
