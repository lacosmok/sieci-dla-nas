from django.shortcuts import render
from rest_framework import viewsets, views, generics, status
from rest_framework.mixins import DestroyModelMixin
from rest_framework.response import Response
from .models import Comment, Network
from .serializers import CommentSerializer, NetworkSerializer


# Create your views here.
class ArticleView(views.APIView):
    def get(self, request, article_id):
        comments = Comment.objects.filter(article_id)
        comments_serializer = CommentSerializer(comments, many=True)
        return Response(data=comments_serializer.data)


class GetNetworks(views.APIView):
    def get(self, request):
        networks = Network.objects.all()
        network_serializer = NetworkSerializer(networks, many=True)
        return Response(data={'networks': network_serializer.data})


class DeleteNetwork(views.APIView):
    def post(self, request):
        pk = request.data.get('pk')
        network = Network.objects.get(pk=pk)
        network.delete()
        return Response(status=201)

