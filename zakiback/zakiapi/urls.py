from django.urls import path
from . views import *

urlpatterns = [
    path('', view=index, name='index'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name="login"),
    path('orders/create/', CreateOrderView.as_view(), name='create_order'),
]
