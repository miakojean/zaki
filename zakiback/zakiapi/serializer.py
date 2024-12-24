from rest_framework import serializers 
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']

    def create(self, validated_data):
        try:
            user = User.objects.create_user(
                first_name=validated_data['first_name'],  # Correctement orthographié ?
                last_name=validated_data['last_name'],    # Correctement orthographié ?
                username=validated_data['username'],
                email=validated_data['email'],
                password=validated_data['password']
            )
            return user
        except Exception as e:
            raise serializers.ValidationError({"error": str(e)})
 
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if user is None:
                raise serializers.ValidationError("Nom d'utilisateur ou mot de passe incorrect.")
        else:
            raise serializers.ValidationError("Veuillez fournir un nom d'utilisateur et un mot de passe.")

        attrs['user'] = user
        return attrs