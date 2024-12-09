import TelegramBot from 'node-telegram-bot-api';

const TOKEN = "7699819387:AAGPwD3nrs_EZ1vtKlQI2bDtP9tmEwSEvqk";
const bot = new TelegramBot(TOKEN, { polling: false }); // Désactiver le polling

export default async function handler(req, res) {
    // Vérifiez que la méthode est POST
    if (req.method === 'POST') {
        try {
            const { message } = req.body; // Récupérer les données envoyées par Telegram

            if (message) {
                const chatId = message.chat.id;
                const text = message.text;

                // Exemple : Répondre à /start
                if (text === '/start') {
                    await bot.sendMessage(chatId, 'Bienvenue sur mon bot Telegram !');
                } else {
                    await bot.sendMessage(chatId, `Vous avez envoyé : ${text}`);
                }
            }

            // Répondre à Telegram pour indiquer que la requête est bien reçue
            res.status(200).send('OK');
        } catch (error) {
            console.error('Erreur dans le traitement du webhook:', error);
            res.status(500).send('Erreur interne');
        }
    } else {
        // Répondre 405 si une méthode autre que POST est utilisée
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
