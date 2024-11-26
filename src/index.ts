require('dotenv').config();
import TelegramBot from 'node-telegram-bot-api';
import OnDetectionEventApp from './applications/on-detection-event/on-detection-event.app';
import { MqttTopics } from './constants/topics';
import MediaUploader from './services/medias';
import TelegramServices from './services/telegram/telegram.services';
import LoggerWrapper from './infra/logger';
const mediaApp = new MediaUploader();
const notifyServices = new TelegramServices();
const onDetectionEventApp = new OnDetectionEventApp(mediaApp, notifyServices);

import mqtt from 'mqtt';
import { EventPayload, HomeActions } from './types/home-notifications.types';

function setupMqtt() {
  LoggerWrapper('setupMqtt').info('Setup MQTT');
  const client = mqtt.connect({
    host: process.env.MQTT_HOST,
    password: process.env.MQTT_PASS,
    username: process.env.MQTT_USER,
    port: Number(process.env.MQTT_PORT),
    protocol: 'mqtt',
    clientId: 'frigate-telegram-bot',
  });

  client.on('connect', () => {
    client.subscribe(MqttTopics.NOTIFICATIONS_TOPIC, (err) => {});
  });

  client.on('error', (err) => {
    LoggerWrapper('setupMqtt').error('entrou no error', err);
  });

  client.on('message', async (topic, message: Buffer) => {
    try {
      LoggerWrapper('setupMqtt').debug('Message received: ', {
        topic,
        message: message.toString(),
      });

      if (topic === MqttTopics.NOTIFICATIONS_TOPIC) {
        const messageParsed: EventPayload = JSON.parse(message.toString());

        if (messageParsed.action === HomeActions.FRIGATE_MOTION_DETECTED) {
          await onDetectionEventApp.execute(messageParsed);
        }
      }
    } catch (error: any) {
      console.error(error.message);
    }
  });
}

function setupTelegramBot() {
  LoggerWrapper('setupTelegramBot').info('Setup Telegram Bot');
  const bot = new TelegramBot(process.env.TELEGRAM_API_TOKEN ?? '', {
    polling: true,
  });

  bot.on('message', async (msg) => {
    LoggerWrapper('setupTelegramBot').debug(`Received message `, msg);

    if (msg.text?.includes('/ultimaMedia')) {
      await onDetectionEventApp.execute({
        action: HomeActions.FRIGATE_MOTION_DETECTED,
        data: {
          cameraName: 'camera1',
        },
      });
    }
  });
}

function main() {
  setupMqtt();
  setupTelegramBot();
}

main();
