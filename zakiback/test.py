from telegram import Bot
import asyncio
from decouple import config

# Remplace par ton token de bot et ton chat_id
TELEGRAM_TOKEN = config("TELEGRAM_TOKEN")
CHAT_ID = config("CHAT_ID")

async def test_bot():
    try:
        # Crée une instance du bot
        bot = Bot(token=TELEGRAM_TOKEN)
        
        # Message à envoyer
        message = "Test avec variable d'environnement"

        # Envoie le message
        await bot.send_message(chat_id=CHAT_ID, text=message)
        print("Message envoyé avec succès.")
    except Exception as e:
        print(f"Erreur lors de l'envoi du message : {e}")

if __name__ == "__main__":
    # Lancer la fonction asynchrone
    asyncio.run(test_bot())