export type MotionDetectedData = {
  cameraName: string;
};

export enum HomeActions {
  FRIGATE_MOTION_DETECTED = 'frigate_motion_detected',
}
export type EventPayload = {
  action: HomeActions;
  data: MotionDetectedData;
};
