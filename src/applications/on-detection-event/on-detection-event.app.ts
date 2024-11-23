import { rmdir } from "fs";
import MediaUploader from "../../services/medias";
import { ReviewEventDTO } from "./@types";
import TelegramServices from "../../services/telegram/telegram.services";

export default class OnDetectionEventApp {
  logger = console;
  mediaApp = new MediaUploader();
  notifyServices = new TelegramServices();
  constructor() {}

  async execute(event: any) {
    try {
      if (event.type === "update" && event.after && event.after.thumb_path) {
        const thumbPath = event.after.thumb_path;

        const media = await this.mediaApp.upladByMediaPath({
          path: thumbPath,
          name: `thumb-${event.after.id}.jpg`,
        });

        await this.notifyServices.sendMessage({
          title: "Pessoa proximo a casa.",
          desc: "Pessoa proximo a casa.",
          imageUrl: media.url,
        });
      }
    } catch (error: any) {
      console.log({ error: error.response.data });
      this.logger.error(error.message);
    }
  }
}
