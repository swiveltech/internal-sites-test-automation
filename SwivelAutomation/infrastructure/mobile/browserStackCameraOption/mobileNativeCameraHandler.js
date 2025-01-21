export default {
  /*
    * a method to attach image using camera
      This component only support for Samsung, Google Pixel and One Plus
    */

  async bc_AttachImageUsingCameraOptionAndroid() {
    const newID = JSON.parse(fs.readFileSync("./test/constants/ConstData.json"))
    await driver.execute(`browserstack_executor: {"action":"cameraImageInjection", "arguments": { "imageUrl" :"media://${newID.ID}" }}`)
    await pg_StrataIssuesAddImages.ele_Camera.click();

    if (configs.deviceName.includes("Samsung")) {
      await driver.pause(300);
      const statusOne = await pg_StrataIssuesAddImages.ele_LocationPopup_Samsung.isDisplayed()
      if(statusOne===true){
      await browser.back();
      await driver.pause(300);
      await driver.longPressKeyCode(27);
      await pg_StrataIssuesAddImages.ele_TakePhoto_Samsung.click()
      }else{
        await driver.longPressKeyCode(27);
      await pg_StrataIssuesAddImages.ele_TakePhoto_Samsung.click()
      }
    }
    else if (configs.deviceName.includes("Google Pixel")) {
      await driver.pause(200);
      const status = await pg_StrataIssuesAddImages.ele_TryCameraShortcuts_Pixel.isDisplayed()
      if(status===true){
        await pg_StrataIssuesAddImages.ele_TryCameraShortcuts_Pixel.click()
        await driver.pause(200);
      }
      await driver.longPressKeyCode(27);
      await pg_StrataIssuesAddImages.ele_TakePhoto_Pixel.click()
    }
    else if (configs.deviceName.includes("OnePlus")) {
      const statusOne = await pg_StrataIssuesAddImages.ele_AgreeAndContinue_OnePlus.isDisplayed()
      if(statusOne===true){
        await pg_StrataIssuesAddImages.ele_AgreeAndContinue_OnePlus.click()
        const statusTwo = await pg_StrataIssuesAddImages.ele_AgreeAndContinue_OnePlus.isDisplayed()
        if(statusTwo===true){
            await pg_StrataIssuesAddImages.ele_AgreeAndContinue_OnePlus.click() 
            await driver.pause(300);
            await browser.acceptAlert();
            await driver.pause(3000);
            await driver.longPressKeyCode(27);        
            await pg_StrataIssuesAddImages.ele_TakePhoto_OnePlus.click()
          } else{
            await driver.longPressKeyCode(27);
            await pg_StrataIssuesAddImages.ele_TakePhoto_OnePlus.click()
              }
        }else{
            await driver.longPressKeyCode(27);
            await pg_StrataIssuesAddImages.ele_TakePhoto_OnePlus.click()
            }
    }

    // Verify Image is attached
    const imageAvailable = await pg_StrataIssuesAddImages.tf_ImageDescription.isDisplayed();
    assert.strictEqual(imageAvailable, true, "Element is not displayed");

  },
   /*
    * a method to attach image using camera for ios
    */
  async bc_AttachImageUsingCameraOptionInIos() {
    const newID = JSON.parse(fs.readFileSync("./test/constants/ConstData.json"))
    await driver.execute(`browserstack_executor: {"action":"cameraImageInjection", "arguments": { "imageUrl" :"media://${newID.ID}" }}`)

    //add element to click on camera element (Update the location for ios for below element)
    // await pg_StrataIssuesAddImages.ele_Camera.click();

    //click on camera shuter in ios
    await pg_StrataIssuesAddImages.icn_IosCameraShutter.click();

    //click on use photo
    await pg_StrataIssuesAddImages.ele_IosCaptureUsePhoto.click();
  }
 
};
