export type StatsEventDTO = {
  cameras: {
    back: {
      camera_fps: 5.2;
      process_fps: 0.5;
      skipped_fps: 4.8;
      detection_fps: 1.4;
      detection_enabled: true;
      pid: 482;
      capture_pid: 492;
      ffmpeg_pid: 109944;
      audio_rms: 0.0;
      audio_dBFS: 0.0;
    };
    camera_area: {
      camera_fps: 5.0;
      process_fps: 0.7;
      skipped_fps: 4.4;
      detection_fps: 1.4;
      detection_enabled: true;
      pid: 485;
      capture_pid: 500;
      ffmpeg_pid: 110278;
      audio_rms: 0.0;
      audio_dBFS: 0.0;
    };
  };
  detectors: {
    cpu: {
      inference_speed: 351.51;
      detection_start: 1732369369.214671;
      pid: 466;
    };
  };
  detection_fps: 2.8;
  cpu_usages: {
    "frigate.full_system": { cpu: "56.9"; mem: "31.6" };
    "1": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "/package/admin/s6/command/s6-svscan -d4 -- /run/service";
    };
    "15": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise s6-linux-init-shutdownd";
    };
    "16": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "/package/admin/s6-linux-init/command/s6-linux-init-shutdownd -c /run/s6/basedir -g 3000 -C -B";
    };
    "24": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise nginx";
    };
    "25": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise s6rc-fdholder";
    };
    "26": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise go2rtc";
    };
    "27": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise certsync-log";
    };
    "28": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise nginx-log";
    };
    "29": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise go2rtc-healthcheck";
    };
    "30": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise frigate";
    };
    "31": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise go2rtc-log";
    };
    "32": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise s6rc-oneshot-runner";
    };
    "33": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise certsync";
    };
    "34": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-supervise frigate-log";
    };
    "45": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "/package/admin/s6-2.11.3.2/command/s6-fdholderd -1 -i data/rules";
    };
    "46": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "/package/admin/s6/command/s6-ipcserverd -1 -- /package/admin/s6/command/s6-ipcserver-access -v0 -E -l0 -i data/rules -- /package/admin/s6/command/s6-sudod -t 30000 -- /package/admin/s6-rc/command/s6-rc-oneshot-run -l ../.. --";
    };
    "85": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-log -b -- T 1 n0 s10000000 T /dev/shm/logs/nginx";
    };
    "88": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-log -b -- T 1 n0 s10000000 T /dev/shm/logs/go2rtc";
    };
    "89": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-log -b -- T 1 n0 s10000000 T /dev/shm/logs/frigate";
    };
    "90": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "s6-log -b -- T 1 n0 s10000000 T /dev/shm/logs/certsync";
    };
    "97": {
      cpu: "1.3";
      cpu_average: "1";
      mem: "0.1";
      cmdline: "/usr/local/go2rtc/bin/go2rtc -config=/dev/shm/go2rtc.yaml";
    };
    "106": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "bash ./run.user go2rtc-healthcheck";
    };
    "111": {
      cpu: "0.8";
      cpu_average: "2";
      mem: "3.1";
      cmdline: "python3 -u -m frigate";
    };
    "133": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.1";
      cmdline: "nginx: master process nginx";
    };
    "160": {
      cpu: "0.1";
      cpu_average: "0";
      mem: "0.1";
      cmdline: "nginx: worker process";
    };
    "161": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.1";
      cmdline: "nginx: worker process";
    };
    "162": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.1";
      cmdline: "nginx: worker process";
    };
    "229": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.1";
      cmdline: "nginx: worker process";
    };
    "233": {
      cpu: "0.1";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "nginx: cache manager process";
    };
    "310": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "bash ./run.user certsync";
    };
    "339": {
      cpu: "0.1";
      cpu_average: "0";
      mem: "0.7";
      cmdline: "frigate.logger       ";
    };
    "429": {
      cpu: "0.4";
      cpu_average: "0";
      mem: "0.9";
      cmdline: "frigate.recording_manager";
    };
    "431": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.8";
      cmdline: "frigate.review_segment_manager";
    };
    "465": {
      cpu: "0.2";
      cpu_average: "0";
      mem: "0.1";
      cmdline: "/usr/bin/python3 -c from multiprocessing.resource_tracker import main;main(59)";
    };
    "466": {
      cpu: "146.8";
      cpu_average: "77";
      mem: "0.9";
      cmdline: "frigate.detector.cpu ";
    };
    "468": {
      cpu: "2.3";
      cpu_average: "2";
      mem: "0.9";
      cmdline: "frigate.output       ";
    };
    "482": {
      cpu: "1.2";
      cpu_average: "1";
      mem: "0.9";
      cmdline: "frigate.process:back ";
    };
    "485": {
      cpu: "1.4";
      cpu_average: "1";
      mem: "0.9";
      cmdline: "frigate.process:camera_area";
    };
    "492": {
      cpu: "0.7";
      cpu_average: "1";
      mem: "0.8";
      cmdline: "frigate.capture:back ";
    };
    "500": {
      cpu: "0.6";
      cpu_average: "1";
      mem: "0.8";
      cmdline: "frigate.capture:camera_area";
    };
    "528": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.2";
      cmdline: "ffmpeg -threads 1 -f rawvideo -pix_fmt yuv420p -video_size 640x360 -i pipe: -threads 1 -f mpegts -s 1280x720 -codec:v mpeg1video -q 8 -bf 0 pipe:";
    };
    "533": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.2";
      cmdline: "ffmpeg -threads 1 -f rawvideo -pix_fmt yuv420p -video_size 640x360 -i pipe: -threads 1 -f mpegts -s 1280x720 -codec:v mpeg1video -q 8 -bf 0 pipe:";
    };
    "538": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.1";
      cmdline: "ffmpeg -threads 1 -f rawvideo -pix_fmt yuv420p -video_size 1280x720 -i pipe: -threads 1 -f mpegts -s 1280x720 -codec:v mpeg1video -q 8 -bf 0 pipe:";
    };
    "26762": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.1";
      cmdline: "/usr/bin/python3 -c from multiprocessing.resource_tracker import main;main(48)";
    };
    "109944": {
      cpu: "2.5";
      cpu_average: "2";
      mem: "0.2";
      cmdline: "ffmpeg -hide_banner -loglevel warning -threads 2 -user_agent FFmpeg Frigate/0.14.1-f4f3cfa -rtsp_transport tcp -timeout 5000000 -i rtsp://127.0.0.1:8554/back -r 5 -vf fps=5,scale=640:360 -threads 2 -f rawvideo -pix_fmt yuv420p pipe:";
    };
    "110278": {
      cpu: "2.5";
      cpu_average: "2";
      mem: "0.2";
      cmdline: "ffmpeg -hide_banner -loglevel warning -threads 2 -user_agent FFmpeg Frigate/0.14.1-f4f3cfa -rtsp_transport tcp -timeout 5000000 -i rtsp://127.0.0.1:8554/camera_area -f segment -segment_time 10 -segment_format mp4 -reset_timestamps 1 -strftime 1 -c copy /tmp/cache/camera_area@%Y%m%d%H%M%S%z.mp4 -r 5 -vf fps=5,scale=640:360 -threads 2 -f rawvideo -pix_fmt yuv420p pipe:";
    };
    "111831": {
      cpu: "0.0";
      cpu_average: "0";
      mem: "0.0";
      cmdline: "sleep 30s";
    };
    "111840": { cpu: "0.0"; cpu_average: "0"; mem: "0.0"; cmdline: "sleep 60" };
  };
  service: {
    uptime: 67573;
    version: "0.14.1-f4f3cfa";
    latest_version: "0.14.1";
    storage: {
      "/media/frigate/recordings": {
        total: 214802.8;
        used: 70613.3;
        free: 133207.0;
        mount_type: "ext4";
      };
      "/media/frigate/clips": {
        total: 214802.8;
        used: 70613.3;
        free: 133207.0;
        mount_type: "ext4";
      };
      "/tmp/cache": {
        total: 214802.8;
        used: 70613.3;
        free: 133207.0;
        mount_type: "overlay";
      };
      "/dev/shm": { total: 64.0; used: 4.4; free: 59.6; mount_type: "tmpfs" };
    };
    temperatures: {};
    last_updated: 1732369369;
  };
  processes: {
    logger: { pid: 339 };
    recording: { pid: 429 };
    review_segment: { pid: 431 };
    go2rtc: { pid: 97 };
  };
};

export type ReviewEventDTO = {
  type: "update"; // new, update, end
  before: {
    id: "1718987129.308396-fqk5ka"; // review_id
    camera: "front_cam";
    start_time: 1718987129.308396;
    end_time: null;
    severity: "detection";
    thumb_path: "/media/frigate/clips/review/thumb-front_cam-1718987129.308396-fqk5ka.webp";
    data: {
      detections: [
        // list of event IDs
        "1718987128.947436-g92ztx",
        "1718987148.879516-d7oq7r",
        "1718987126.934663-q5ywpt",
      ];
      objects: ["person", "car"];
      sub_labels: [];
      zones: [];
      audio: [];
    };
  };
  after?: {
    id: "1718987129.308396-fqk5ka";
    camera: "front_cam";
    start_time: 1718987129.308396;
    end_time: null;
    severity: "alert";
    thumb_path?: "/media/frigate/clips/review/thumb-front_cam-1718987129.308396-fqk5ka.webp";
    data: {
      detections: [
        "1718987128.947436-g92ztx",
        "1718987148.879516-d7oq7r",
        "1718987126.934663-q5ywpt",
      ];
      objects: ["person", "car"];
      sub_labels: ["Bob"];
      zones: ["front_yard"];
      audio: [];
    };
  };
};
