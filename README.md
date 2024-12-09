DetraxBot
DetraxBot est un bot Telegram conçu pour fournir des services interactifs et des informations utiles à ses utilisateurs. Ce bot est développé avec Node.js et utilise l'API de Telegram pour communiquer avec les utilisateurs.

Fonctionnalités
/start : Envoie un message de bienvenue et une liste des commandes disponibles.
/apropos : Donne une brève description du bot.
/services : Affiche les services proposés par le bot.
/infos : Fournit des informations utiles telles que les coordonnées et les horaires.
Installation
Prérequis
Node.js (version 14 ou supérieure)
npm (version 6 ou supérieure)
Étapes d'installation
Clonez le repository :

git clone https://github.com/primo280/bot.git
cd bot 
cd not  
Installez les dépendances :

npm install
Configurez votre token Telegram dans un fichier .env :

TELEGRAM_BOT_TOKEN=your-telegram-bot-token
Déployez l'application sur une plateforme comme Vercel ou tout autre service de votre choix.

Configurez le webhook pour connecter votre bot à Telegram :

curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook" -d "url=https://your-deployed-url/api/telegram"
Utilisation
Une fois le bot installé et configuré, vous pouvez envoyer des messages et utiliser les commandes définies ci-dessus pour interagir avec le bot.

Commandes disponibles
/start : Affiche un message de bienvenue avec les commandes disponibles.
/apropos : Affiche des informations sur le bot.
/services : Affiche une liste des services proposés par le bot.
/infos : Affiche des informations utiles telles que les coordonnées et les horaires.
Contribution
Si vous souhaitez contribuer au projet, veuillez ouvrir une pull request avec vos modifications. N'hésitez pas à signaler des bugs ou à proposer des améliorations.

License
Ce projet est sous licence MIT.

DetraxBot - Crée avec ❤️ par DOHA PRIMAEL FRUCTUEUX.
