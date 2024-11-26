import TelegramBotSingleton from './agent';

export default class TelegramServices {
  TOKEN = process.env.TELEGRAM_API_TOKEN;
  CHAT_ID = Number(process.env.TELEGRAM_CHAT_ID);
  AGENT = TelegramBotSingleton.getInstance();
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
    await this.AGENT.sendMessage(this.CHAT_ID, title);
    await this.AGENT.sendPhoto(this.CHAT_ID, imageUrl);
    return true;
  }
}
