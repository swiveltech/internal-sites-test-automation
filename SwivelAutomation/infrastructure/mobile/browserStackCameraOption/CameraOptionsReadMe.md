# Below commands only works with browser stack

1. If you want to use commands in mobileNativeCameraHndler you have to add uploadFile.js
2. To delete the image, Add below code lines inside wdio.conf.js afterFeature hook

      afterFeature: async function (uri, feature) {
        if (feature.name === "Verify Job flow functionalities") {
        // Run the deletion regardless of test success or failure
        try {
            await ConstantAPI.bc_DeleteImage(ID);
        } catch (error) {
            console.error('Error deleting image:', error);
        }
        }
      },




