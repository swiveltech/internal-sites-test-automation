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
    ],
    testingPlan: "smoke",
    maxInstances: 1,
  },
];
export default specConfig;
