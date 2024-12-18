import TelegramBot from 'node-telegram-bot-api';

const TOKEN = "7699819387:AAGPwD3nrs_EZ1vtKlQI2bDtP9tmEwSEvqk";
const CHANNEL_ID = -1002379681476;

const bot = new TelegramBot(TOKEN, { polling: false });

/**
 * Envoie un message au canal Telegram
 * @param {string} text - Le message à envoyer
 */
export async function sendMessageToChannel(text) {
    try {
        await bot.sendMessage(CHANNEL_ID, text);
        console.log('Message envoyé au canal avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'envoi du message au canal:', error);
    }
}

/**
 * Envoie une alerte au canal Telegram
 * @param {string} alertTitle - Le titre de l'alerte
 * @param {string} alertMessage - Le contenu de l'alerte
 */
export async function sendAlertToChannel(alertTitle, alertMessage) {
    const alertText = `🚨 *${alertTitle}*\n\n${alertMessage}`;
    try {
        await bot.sendMessage(CHANNEL_ID, alertText, { parse_mode: 'Markdown' });
        console.log('Alerte envoyée au canal avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'alerte au canal:', error);
    }
}
