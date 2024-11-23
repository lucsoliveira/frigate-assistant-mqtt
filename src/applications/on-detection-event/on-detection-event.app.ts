import MediaUploader from "../../services/medias";

export default class OnDetectionEventApp {
  logger = console;
  constructor(
    readonly mediaUploader: MediaUploader,
    readonly notifyServices: any,
  ) {}

  async execute(event: any) {
    try {
      if (event.type === "end" && event.after && event.after.thumb_path) {
        const thumbPath = event.after.thumb_path;

        const thumPathNormalized = thumbPath.split("/media/frigate/")[1];

        const media = await this.mediaUploader.upladByMediaPath({
          path: thumPathNormalized,
          name: `thumb-${event.after.id}.jpg`,
        });

        await this.notifyServices.sendMessage({
          title: "Pessoa proximo a casa.",
          desc: "Pessoa proximo a casa.",
          imageUrl: media.url,
        });
      }
    } catch (error: any) {
      console.log({ error: error });
      this.logger.error(error.message);
    }
  }
}
