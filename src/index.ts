require("dotenv").config();
// import OnDetectionEventApp from "./applications/on-detection-event/on-detection-event.app";

import OnDetectionEventApp from "./applications/on-detection-event/on-detection-event.app";
import { MqttTopics } from "./constants/topics";
import MediaUploader from "./services/medias";
import TelegramServices from "./services/telegram/telegram.services";

const mediaApp = new MediaUploader();
const notifyServices = new TelegramServices();
const onDetectionEventApp = new OnDetectionEventApp(mediaApp, notifyServices);

//   .then(() => {})
//   .catch(() => {});

import mqtt from "mqtt";

const client = mqtt.connect({
  host: process.env.MQTT_HOST,
  password: process.env.MQTT_PASS,
  username: process.env.MQTT_USER,
  port: Number(process.env.MQTT_PORT),
  protocol: "mqtt",
  clientId: "frigate-telegram-bot",
});

client.on("connect", () => {
  console.info("Connected");
  client.subscribe("presence", (err) => {
    if (!err) {
      client.publish("presence", "Hello mqtt");
    } else {
      console.error(err);
    }
  });

  client.subscribe(MqttTopics.FRIGATE_REVIEWS, (err) => {});
  client.subscribe("testtopic", (err) => {});
});

client.on("error", (err) => {
  console.log("entrou no error", err);
});

client.on("message", async (topic, message: Buffer) => {
  // message is Buffer

  console.info("Message received: ", topic, message.toString());
  if (topic === MqttTopics.FRIGATE_REVIEWS) {
    const messageParsed = JSON.parse(message.toString());
    await onDetectionEventApp.execute(messageParsed);
  } else if (topic === "testtopic") {
    const messageParsed = JSON.parse(message.toString());
    console.log("messageParsed", messageParsed);
    await onDetectionEventApp.execute(messageParsed);
  }
});
