import TelegramBot from 'node-telegram-bot-api';

class TelegramBotSingleton {
  private static instance: TelegramBot;

  private constructor() {}

  public static getInstance(): TelegramBot {
    if (!TelegramBotSingleton.instance) {
      TelegramBotSingleton.instance = new TelegramBot(
        process.env.TELEGRAM_API_TOKEN ?? '',
        {
          polling: true,
        },
      );
    }
    return TelegramBotSingleton.instance;
  }
}

export default TelegramBotSingleton;
