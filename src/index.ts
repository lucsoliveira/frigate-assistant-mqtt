require("dotenv").config();
import OnDetectionEventApp from "./applications/on-detection-event/on-detection-event.app";

const app = new OnDetectionEventApp();

app
  .execute({
    type: "update",
    after: {
      thumb_path:
        "/Users/lucasdeoliveira/Pictures/photo_2024-09-18_18-18-56.jpg",
    },
  })
  .then(() => {})
  .catch(() => {});
