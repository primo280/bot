import TelegramBot from 'node-telegram-bot-api';

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(TOKEN);

// Désactiver le polling si activé
bot.stopPolling();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { message } = req.body;

        if (message) {
            const chatId = message.chat.id;
            const text = message.text;

            // Exemple de gestion de commandes
            if (text === '/start') {
                await bot.sendMessage(chatId, 'Bienvenue sur mon bot Telegram !');
            } else {
                await bot.sendMessage(chatId, `Vous avez envoyé : ${text}`);
            }
        }

        // Répondez à Telegram pour confirmer que la requête a été reçue
        return res.status(200).send('OK');
    }

    // Si une méthode autre que POST est utilisée
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
