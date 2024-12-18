import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7699819387:AAGPwD3nrs_EZ1vtKlQI2bDtP9tmEwSEvqk";
const bot = new TelegramBot(TOKEN, { polling: false });

const CHANNEL_ID = "-1002379681476"; 

// Fonction pour envoyer une notification dans le canal
export const sendNotification = async (message) => {
  try {
    await bot.sendMessage(CHANNEL_ID, `📢 **Notification** : ${message}`);
  } catch (error) {
    console.error("Erreur lors de l'envoi de la notification :", error);
  }
};

// Fonction pour envoyer une alerte dans le canal
export const sendAlert = async (message) => {
  try {
    await bot.sendMessage(CHANNEL_ID, `🚨 **Alerte** : ${message}`);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'alerte :", error);
  }
};
