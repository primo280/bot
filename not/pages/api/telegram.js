import TelegramBot from "node-telegram-bot-api";
import { sendNotification, sendAlert } from "../utils/notifications";

const TOKEN = "7699819387:AAGPwD3nrs_EZ1vtKlQI2bDtP9tmEwSEvqk";
const bot = new TelegramBot(TOKEN, { polling: false });

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { message } = req.body;

      if (message) {
        const chatId = message.chat.id;
        const text = message.text;

        if (text === "/start") {
          // Répondre à l'utilisateur
          await bot.sendMessage(
            chatId,
            `👋 Bienvenue sur Deltraxbot !\n\nVoici les commandes disponibles :\n` +
              `/apropos - En savoir plus sur Deltrax\n` +
              `/services - Voir les services proposés\n` +
              `/infos - Obtenir des informations utiles\n`
          );

          // Envoyer une notification dans le canal
          await sendNotification(
            `Un nouvel utilisateur a démarré le bot !\n👤 Utilisateur : [${message.from.first_name}](tg://user?id=${message.from.id})`
          );
        } else if (text === "/apropos") {
          await bot.sendMessage(
            chatId,
            `DELTRAX a pour objectif la mise en place d’un écosystème blockchain en Afrique, permettant ainsi de combler le retard technologique du continent tout en améliorant les conditions de vie des populations.\n\n` +
              `Nous avons ainsi pour mission:\n` +
              `- Faciliter l’accès aux solutions blockchain aux populations sur le continent africain.\n` +
              `- Former une communauté africaine aguerrie aux marchés boursier et aux solutions blockchain.\n` +
              `- Réduire au maximum les arnaques à la blockchain sur le marché africain.\n` +
              `- Porter des améliorations aux différents secteurs d’activités en Afrique grâces aux solutions blockchain.`
          );
        } else if (text === "/services") {
          await bot.sendMessage(
            chatId,
            `🛠️ Voici les services disponibles :\n` +
              `- **ACADÉMIE** : Avancez avec sérénité dans l’univers de la Blockchain et des Cryptomonnaies grâce à nos encadrements et formations.\n` +
              `- **ECHANGES CRYPTO/FIAT** : Achetez et vendez vos cryptomonnaies en Afrique et dans le monde aux meilleurs prix facilement et en toute sécurité.`
          );
        } else if (text === "/infos") {
          await bot.sendMessage(
            chatId,
            `ℹ️ **Informations utiles** :\n` +
              `- Contact : deltrax.contact@gmail.com\n` +
              `- Site web : https://www.deltraxafrica.com\n` +
              `- Horaires : 9h à 18h`
          );
        } else {
          // Envoyer un message d'erreur à l'utilisateur
          await bot.sendMessage(
            chatId,
            `⚠️ Commande non reconnue. Tapez /start pour voir la liste des commandes.`
          );

          // Envoyer une alerte dans le canal
          await sendAlert(
            `Une commande non reconnue a été envoyée !\n👤 Utilisateur : [${message.from.first_name}](tg://user?id=${message.from.id})\n❓ Commande : ${text}`
          );
        }
      }

      res.status(200).send("OK");
    } catch (error) {
      console.error("Erreur dans le traitement du webhook:", error);
      res.status(500).send("Erreur interne");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
