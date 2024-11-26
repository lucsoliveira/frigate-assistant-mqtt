import { resolve } from 'path';

export const getTestsPath = () => {
  return resolve(__dirname, '..', '__tests__', 'Snapshots');
};
