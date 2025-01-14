from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
from models import Order  # Remplace par le chemin de ton modèle Order
from serializer import OrderSearchSerializer  # Remplace par le chemin de ton serializer

async def search_order(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Récupérer les arguments passés par l'utilisateur
    args = context.args
    if len(args) < 2:
        await update.message.reply_text(
            "Utilisation : /search <invoice_number> ou <user_name>"
        )
        return

    # Préparer les données pour le serializer
    search_data = {}
    if "invoice" in args[0].lower():
        search_data['invoice_number'] = args[1]
    elif "name" in args[0].lower():
        search_data['user_name'] = args[1]

    # Valider les données avec le serializer
    serializer = OrderSearchSerializer(data=search_data)
    if serializer.is_valid():
        # Exécuter la recherche
        results = serializer.search()
        if results.exists():
            response = "Résultats trouvés :\n"
            for order in results:
                response += f"- Facture : {order.invoice_number}, Nom : {order.user_name}\n"
        else:
            response = "Aucun résultat trouvé."
    else:
        response = "Erreur de validation des données."

    # Envoyer la réponse au bot
    await update.message.reply_text(response)

if __name__ == "__main__":
    application = ApplicationBuilder().token("TON_TOKEN_API").build()

    # Ajouter la commande de recherche
    application.add_handler(CommandHandler("search", search_order))

    print("Bot de recherche démarré 🚀")
    application.run_polling()
