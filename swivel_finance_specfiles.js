/**
 * Add relevant spec file path here which you need to test
 */

const specConfig = [
  {
    specs: [
      // This is Swivel Finance Test cases
      "../test/scripts/SwivelFinance/tc_Home.js",
      "../test/scripts/SwivelFinance/tc_WhoWeAre.js",
      "../test/scripts/SwivelFinance/tc_Careers.js",
      "../test/scripts/SwivelFinance/tc_Cookie.js",
      "../test/scripts/SwivelFinance/tc_PrivacyPolicy.js",
      "../test/scripts/SwivelFinance/tc_ContactUs.js",
      "../test/scripts/SwivelFinance/tc_PodCast.js"
    ],
    testingPlan: "smoke",
    maxInstances: 1,
  },
];
export default specConfig;
