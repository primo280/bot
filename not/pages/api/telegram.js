import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7699819387:AAGPwD3nrs_EZ1vtKlQI2bDtP9tmEwSEvqk";
const bot = new TelegramBot(TOKEN, { polling: false }); // Désactiver le polling

export default async function handler(req, res) {
  // Vérifiez que la méthode est POST
  if (req.method === "POST") {
    try {
      const { message } = req.body; // Récupérer les données envoyées par Telegram

      if (message) {
        const chatId = message.chat.id;
        const text = message.text;

        // Gérer les commandes
        if (text === "/start") {
          await bot.sendMessage(
            chatId,
            `👋 Bienvenue sur Deltraxbot  !\n\nVoici les commandes disponibles :\n` +
              `/apropos - En savoir plus sur Deltrax\n` +
              `/services - Voir les services proposés\n` +
              `/infos - Obtenir des informations utiles\n`
          );
        } else if (text === "/apropos") {
          await bot.sendMessage(
            chatId,
            ` DELTRAX a pour objectif la mise en place d’un écosystème blockchain en Afrique, permettant ainsi de combler le retard technologique du continent tout en améliorant les conditions de vie des populations.

Nous avons ainsi pour mission:

Faciliter l’accès aux solutions blockchain aux populations sur le continent africain.

Former une communauté africaine aguerrie aux marchés boursier et aux solutions blockchain.

Réduire au maximum les arnaques à la blockchain sur le marché africain.

Porter des améliorations aux différents secteurs d’activités en Afrique grâces aux solutions blockchain.`
          );
        } else if (text === "/services") {
          await bot.sendMessage(
            chatId,
            `🛠️ Voici les services disponibles :\n- 
ACADÉMIE
Avancez avec sérénité dans l’univers de la Blockchain et des Cryptomonnaies grâce à nos encadrements et formations.\n-
ECHANGES CRYPTO/FIAT
Achetez et vendez vos cryptomonnaies en Afrique et dans le monde aux meilleurs prix facilement en toute  sécurité.`
          );
        } else if (text === "/infos") {
          await bot.sendMessage(
            chatId,
            `ℹ️ Informations utiles :\n- Contact : deltrax.contact@gmail.com\n- Site web : https://www.deltraxafrica.com\n- Horaires : 9h à 18h`
          );
        } else {
          // Réponse par défaut si la commande n'est pas reconnue
          await bot.sendMessage(
            chatId,
            `⚠️ Commande non reconnue. Tapez /start pour voir la liste des commandes.`
          );
        }
      }

      // Répondre à Telegram pour indiquer que la requête est bien reçue
      res.status(200).send("OK");
    } catch (error) {
      console.error("Erreur dans le traitement du webhook:", error);
      res.status(500).send("Erreur interne");
    }
  } else {
    // Répondre 405 si une méthode autre que POST est utilisée
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
