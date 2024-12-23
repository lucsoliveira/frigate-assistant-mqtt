import { readdirSync } from 'fs';
import { resolve } from 'path';

export default class GetLastMotionImage {
  logger = console;
  constructor(readonly basePath: string) {}

  async getImage(cameraName: string) {
    try {
      this.logger.debug('Base path: ', this.basePath);
      const basePathData = readdirSync(this.basePath, {
        encoding: 'utf-8',
      });

      this.logger.debug('Base path data: ', basePathData);

      const onlyJpgFiles = basePathData.filter((file) =>
        file.includes('.webp'),
      );
      const lastFile = onlyJpgFiles[onlyJpgFiles.length - 1];

      this.logger.debug('Last file: ', lastFile);
      const lastFilePath = resolve(this.basePath, lastFile);

      this.logger.debug('Last file path: ', lastFilePath);
      return {
        success: true,
        imagePath: lastFilePath,
      };
    } catch (error) {
      return {
        success: false,
        error,
      };
    }
  }
}
