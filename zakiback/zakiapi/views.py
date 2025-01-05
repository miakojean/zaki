from django.shortcuts import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import *
from django.contrib.auth import authenticate

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
    def post(self, request, *args, **kwargs):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            try:
                order = serializer.save()
                return Response(
                    {"message": "Commande créée avec succès.", "order_id": order.id},
                    status=status.HTTP_201_CREATED
                )
            except serializers.ValidationError as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)