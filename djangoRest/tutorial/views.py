from django.shortcuts import render
from django.shortcuts import render
from rest_framework import viewsets, views, generics, status
from rest_framework.mixins import DestroyModelMixin
from rest_framework.response import Response
from dashboard.models import Network
from .helpers import *


# Create your views here.
class CreateNetwork(views.APIView):
    def post(self, request):
        x = request.data.get('matrixX')
        result = request.data.get('result')
        runtime = request.data.get('runtime')
        print("Data for network", result, runtime, x)
        result = create_network(x, result, runtime)
        Network.objects.create(
            matrixX=matrix_to_string(x),
            result=line_to_string(result),
            runtime=runtime,
        )
        return Response(data={'result': result})


class SaveNetwork(views.APIView):
    def post(self, request):
        x = request.data.get('matrixX')
        result = request.data.get('result')
        runtime = request.data.get('runtime')
        name = request.data.get('name')
        print("Data for network", result, runtime, x)
        result = Network.objects.create(
            matrixX=matrix_to_string(x),
            result=line_to_string(result),
            runtime=runtime,
            name=name
        )
        result.save();
        return Response(status=200)
