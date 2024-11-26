import { resolve } from 'path';
import GetLastMotionImage from './GetLastMotionImage.app';
import { getTestsPath } from '../../../resolves';

describe('GetLastMotionImage', () => {
  test('should get last media path on snapshots folder', async () => {
    const testPath = getTestsPath();
    const app = new GetLastMotionImage(testPath);
    const result = await app.getImage('cameraName');
    const expectedPath = resolve(testPath, '2024-11-24 20:46:44.jpg');

    expect(result).toStrictEqual({
      success: true,
      imagePath: expectedPath,
    });
  });
});
