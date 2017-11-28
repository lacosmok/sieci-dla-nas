from django.db import models


# Create your models here.
class Comment(models.Model):
    article = models.IntegerField(default=0, blank=False, null=False)
    email = models.EmailField(default='', blank=True, null=False)
    message = models.CharField(max_length=255, default='', blank=True, null=True)


class Network(models.Model):
    name = models.CharField(max_length=255, default="Network", null=False)


class Node(models.Model):
    network = models.ForeignKey(Network, null=True)
    level = models.IntegerField(default=0)
    data = models.IntegerField(default=0)


