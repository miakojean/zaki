from telegram import Bot
from decouple import config
import asyncio

async def send_telegram_notification(message):
    """
    Envoie une notification Telegram au chat spécifié.
    """
    bot_token = config("TELEGRAM_TOKEN")
    chat_id = config("CHAT_ID")
    
    try:
        bot = Bot(token=bot_token)
        await bot.send_message(chat_id=chat_id, text=message)
        print("Message envoyé avec succès.")
    except Exception as e:
        print(f"Erreur lors de l'envoi de la notification Telegram : {e}")

# Utilisation de la fonction
def send_notification(message):
    """
    Appelle la fonction asynchrone pour envoyer la notification.
    """
    asyncio.run(send_telegram_notification(message))
