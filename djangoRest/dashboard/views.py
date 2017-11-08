from django.shortcuts import render
from rest_framework import viewsets, views, generics, status
from rest_framework.mixins import DestroyModelMixin
from rest_framework.response import Response
from .models import Comment
from .serializers import CommentSerializer


# Create your views here.
class ArticleView(views.APIView):
    def get(self, article_id):
        comments = Comment.objects.filter(article_id)
        comments_serializer = CommentSerializer(comments, many=True)
        return Response(data=comments_serializer.data)
