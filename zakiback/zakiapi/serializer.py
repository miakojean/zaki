from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Product, Order, OrderItem

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'password']

    def create(self, validated_data):
        try:
            user = User.objects.create_user(
                first_name=validated_data.get('first_name'),
                last_name=validated_data.get('last_name'),
                username=validated_data.get('username'),
                email=validated_data.get('email'),
                password=validated_data.get('password')
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


class OrderItemSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())

    class Meta:
        model = OrderItem
        fields = ['product', 'quantity', 'total_price']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)
    user_id = serializers.IntegerField(write_only=True, required=False)
    user_name = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = Order
        fields = ['user_id', 'user_name', 'status', 'paiement_method', 'total_price', 'items']

    def create(self, validated_data):
        items_data = validated_data.pop('items')
        user_id = validated_data.pop('user_id', None)
        user_name = validated_data.pop('user_name', None)

        if user_id:
            try:
                user = User.objects.get(id=user_id)
                validated_data['user'] = user
            except User.DoesNotExist:
                raise serializers.ValidationError({"user_id": "User not found."})
        elif user_name:
            validated_data['user_name'] = user_name
        else:
            raise serializers.ValidationError({"user": "Either user_id or user_name must be provided."})

        order = Order.objects.create(**validated_data)

        for item_data in items_data:
            product = item_data['product']
            OrderItem.objects.create(
                order=order,
                product=product,
                quantity=item_data['quantity'],
                total_price=product.price * item_data['quantity']
            )

        return order
