from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Category(models.Model):
    name = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    in_stock = models.BooleanField(default=True)

    class Meta:
        verbose_name_plural = "Products"

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    user_name = models.CharField(max_length=100, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    number = models.CharField(blank=True, max_length=20)
    delivery = models.CharField(max_length=100, blank=False)
    status = models.CharField(
        max_length=20,
        choices=[('pending', 'Pending'), ('completed', 'Completed'), ('cancelled', 'Cancelled')],
        default='pending'
    )
    paiement_method = models.CharField(
        max_length=20,
        choices=[('A la livraison', 'A la livraison'), ('wave', 'wave'), ('Orange Money', 'Orange Money'),
                 ('Mtn Money', 'Mtn Money'), ('Moov money', 'Moov money')],
        default='A la livraison'
    )
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    invoice_number = models.CharField(max_length=10, unique=True, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.invoice_number:
            last_order = Order.objects.order_by('id').last()
            if last_order and last_order.invoice_number:
                try:
                    last_number = int(last_order.invoice_number[2:])
                    new_number = f"AA{last_number + 1:03}"
                except ValueError:
                    new_number = "AA001"
            else:
                new_number = "AA001"
            self.invoice_number = new_number
        super().save(*args, **kwargs)

    def __str__(self):
        user_display = self.user.username if self.user else self.user_name or 'Guest'
        return f"Commande {self.invoice_number} de {user_display} effectuée le {self.created_at.strftime('%d/%m/%Y')}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        if self.product:
            self.total_price = self.product.price * self.quantity
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.quantity} unité(s) de {self.product.name} pour la commande {self.order.invoice_number}"