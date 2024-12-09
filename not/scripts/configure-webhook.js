const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;


const bot = new TelegramBot(TOKEN);
bot.setWebHook('https://bot-d383.vercel.app/api/telegram');

console.log('Webhook configuré !');
