const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '7699819387:AAGPwD3nrs_EZ1vtKlQI2bDtP9tmEwSEvqk';


const bot = new TelegramBot(TOKEN);
bot.setWebHook('https://deltrax.vercel.app/api/telegram');

console.log('Webhook configuré !');
