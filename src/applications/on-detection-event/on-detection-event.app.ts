import { resolve } from 'path';
import MediaUploader from '../../services/medias';
import {
  EventPayload,
  HomeActions,
} from '../../types/home-notifications.types';
import { GetLastMotionImage } from '../frigate';

const BASE_SNAPSHOT_PATH = resolve(
  process.env.MEDIA_BASE_PATH ?? '',
  'Snapshots',
);
export default class OnDetectionEventApp {
  logger = console;
  getLastMotionImage = new GetLastMotionImage(BASE_SNAPSHOT_PATH);
  constructor(
    readonly mediaUploader: MediaUploader,
    readonly notifyServices: any,
  ) {}

  async execute(event: EventPayload) {
    try {
      if (event.action === HomeActions.FRIGATE_MOTION_DETECTED) {
        const thumPathNormalized = await this.getLastMotionImage.getImage(
          event.data.cameraName,
        );

        const media = await this.mediaUploader.upladByMediaPath({
          path: thumPathNormalized.imagePath ?? '',
          name: `thumb.jpg`,
        });

        await this.notifyServices.sendMessage({
          title: 'Pessoa proximo a casa.',
          desc: 'Pessoa proximo a casa.',
          imageUrl: media.url,
        });
      }
    } catch (error: any) {
      console.log({ error: error });
      this.logger.error(error.message);
    }
  }
}
