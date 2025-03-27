import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import configs from "../../config.js";
import path from "path";

let data = new FormData();
let newID;
//'/C:/Users/TaniyaSenawirathne/Downloads/testimage.jpg'

class UploadFileToBS {
  async bc_PostImageToBS() {
    data.append(
      "file",
      fs.createReadStream(
        path.join("./test/data/testData_001", "testimage.jpg"),
      ),
    );
    data.append("custom_id", "SampleMedia");

    let config = {
      method: "post",
      url: "https://api-cloud.browserstack.com/app-automate/upload-media",
      auth: {
        username: configs.BS_User,
        password: configs.BS_Key,
      },
      headers: {
        "Content-Type": "image/jpg",
        ...data.getHeaders(),
      },
      data: data,
    };

    try {
      const response = await axios(config);
      console.log(JSON.stringify(response.data.media_url));
      const media_url = response.data.media_url;
      console.log(media_url);
      // return media_url;
      let splitId = media_url.split("//");
      newID = splitId[1];
      console.log(newID);
      return newID;
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error for higher-level error handling if needed
    }
  }

  async bc_DeleteImage(prm_ID) {
    let config = {
      method: "delete",
      url: `https://api-cloud.browserstack.com/app-automate/custom_media/delete/${prm_ID}`,
      auth: {
        username: configs.BS_User,
        password: configs.BS_Key,
      },
    };

    try {
      const response = await axios(config);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  }
}
export default new UploadFileToBS();
