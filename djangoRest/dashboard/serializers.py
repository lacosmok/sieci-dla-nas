from rest_framework import serializers
from . import models


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Comment
        fields = '__all__'


class NodeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Node
        fields = '__all__'


class NetworkSerializer(serializers.ModelSerializer):
    nodes = NodeSerializer(many=True)

    class Meta:
        model = models.Network
        fields = ('name', 'nodes')