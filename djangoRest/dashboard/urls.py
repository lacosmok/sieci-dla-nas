from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^article/(?P<pk>[0-9]+)/comments/$',
        views.ArticleView.as_view(), name='get-comments'),
]