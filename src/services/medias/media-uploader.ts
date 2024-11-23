import axios from "axios";
const FormData = require("form-data");
import { ResultDTO } from "./@types";
import fs from "fs";
export default class MediaUploader {
  logger = console;
  constructor() {}

  async upladByMediaPath({ path, name }: { path: string; name: string }) {
    const options = {
      method: "POST",
      url: "https://freeimage.host/api/1/upload",
      params: { key: process.env.MEDIA_API_TOKEN },
      headers: {
        "content-type": "multipart/form-data;",
      },
    };

    const form = new FormData();

    form.append("action", "upload");

    form.append("source", fs.createReadStream(path));

    const response = await axios.postForm(options.url, form, {
      url: "https://freeimage.host/api/1/upload",
      params: { key: process.env.MEDIA_API_TOKEN },
      headers: form.getHeaders(),
    });

    const data: ResultDTO = response.data;
    if (data.status_code !== 200) {
      throw new Error("Error on upload image");
    }

    return {
      url: data.image.url,
    };
  }
}
