# Generated by Django 5.1.4 on 2025-01-08 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('zakiapi', '0006_remove_order_product_orderitem'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='user_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
