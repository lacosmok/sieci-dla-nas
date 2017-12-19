from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^create/network$', views.CreateNetwork.as_view(), name='create-network'),
]