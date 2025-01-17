from django.shortcuts import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import *
from telegram import Bot
from django.contrib.auth import authenticate
from django.conf import settings
from .utilities import send_notification
import logging
import asyncio

# Create your views here.
def index(request):
    return HttpResponse("Bienvenue chez nous") 

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Utilisateur créé avec succès !"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LoginView(APIView):
    def post(self, request):
        # Passer les données de la requête au serializer
        serializer = LoginSerializer(data=request.data)
        
        if serializer.is_valid():
            # Extraire les données valides
            username = serializer.validated_data.get('username')
            password = serializer.validated_data.get('password')
            
            # Authentifier l'utilisateur
            user = authenticate(username=username, password=password)
            
            if user is not None:
                # Ici, tu pourrais générer un token JWT ou autre si nécessaire
                return Response({"message": "Utilisateur connecté avec succès"}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Nom d'utilisateur ou mot de passe incorrect"}, status=status.HTTP_401_UNAUTHORIZED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CreateOrderView(APIView):

    async def send_telegram_notification(self, message):
        """
        Envoie une notification Telegram au chat spécifié.
        """
        bot_token = settings.TELEGRAM_TOKEN  # Assurez-vous d'avoir cette variable dans settings
        chat_id = settings.CHAT_ID
        try:
            bot = Bot(token=bot_token)
            await bot.send_message(chat_id=chat_id, text=message)
        except Exception as e:
            print(f"Erreur lors de l'envoi de la notification Telegram : {e}")
    
    def post(self, request, *args, **kwargs):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            try:
                order = serializer.save()
                #preparer le message à envoyer

                message = f"""
                    Nouvelle commande reçue !
                    - **Numéro de commande** : {order.invoice_number}
                    - **Nom de l'utilisateur** : {order.user_name}
                    - **Montant total** : {order.total_price} FCFA
                    """
                send_notification(message)

                # suivre mon journal
                logger = logging.getLogger(__name__)
                logger.info(f"Notification envoyée : {message}")
                return Response(
                    {"message": "Commande créée avec succès.", "order_id": order.id},
                    status=status.HTTP_201_CREATED
                )
            except serializers.ValidationError as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def send_telegram_message(self, message):
        """
        Envoie un message à Telegram via le bot.
        """
        bot_token = settings.TELEGRAM_TOKEN  # Remplace par ton token Telegram
        chat_id = settings.CHAT_ID  # Remplace par l'ID de ton chat (ou du groupe)
        bot = Bot(token=bot_token)
        bot.send_message(chat_id=chat_id, text=message)
    
class OrderSearchView(APIView):
    def post(self, request):
        serializer = OrderSearchSerializer(data=request.data)
        if serializer.is_valid():
            # Effectuer la recherche
            results = serializer.search()
            if results.exists():
                # Retourner les résultats
                data = OrderSerializer(results, many=True).data
                return Response(data, status=status.HTTP_200_OK)
            return Response({"message": "Numero de commande ou nom incorrect"}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)