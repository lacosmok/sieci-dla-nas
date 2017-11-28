from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^article/(?P<pk>[0-9]+)/comments/$',
        views.ArticleView.as_view(), name='get-comments'),
    url(r'^network/delete$',
        views.DeleteNetwork.as_view(), name='delete-network'),
    url(r'^network/add$',
        views.AddNetwork.as_view(), name='create-comments'),
    url(r'^network/all/$',
        views.GetNetworks.as_view(), name='get-networks'),


]