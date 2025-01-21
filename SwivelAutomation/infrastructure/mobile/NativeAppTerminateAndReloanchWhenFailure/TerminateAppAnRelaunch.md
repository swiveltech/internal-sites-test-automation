# If you want to terminate the app and relaunch when failure occure,
# Use below code lines inside wdio.conf.js afterScenario hook

  afterScenario: async function (world, result, context) {
    if (result.error) {
      // Screenshot configuration cucumber json
      cucumberJson.attach(await browser.takeScreenshot(), "image/png");

      // Close the app and launch it again
      await driver.terminateApp("com.smata.mobileapp");
      await driver.launchApp();
      await LIB_Common.bc_LogoutFromSmata();
    }
  },

# Note 
# "await LIB_Common.bc_LogoutFromSmata();" only works with SMATA app and have to create method according to the application




