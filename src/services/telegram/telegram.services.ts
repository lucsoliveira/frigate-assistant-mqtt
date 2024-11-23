// TODO: extends..
const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather

export default class TelegramServices {
  TOKEN = process.env.TELEGRAM_API_TOKEN;
  CHAT_ID = Number(process.env.TELEGRAM_CHAT_ID);
  constructor() {}

  async sendMessage({
    title,
    desc,
    imageUrl,
  }: {
    title: string;
    desc: string;
    imageUrl: string;
  }) {
    let bot = new TelegramBot(this.TOKEN, { polling: true });
    await bot.sendMessage(this.CHAT_ID, title);
    await bot.sendPhoto(this.CHAT_ID, imageUrl);
    bot = null;
    return true;
  }
}
