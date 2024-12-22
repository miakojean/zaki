from django.urls import path
from .views import RegisterView, index
from . views import *

urlpatterns = [
    path('', view=index, name='index'),
    path('register/', RegisterView.as_view(), name='register'),
]
