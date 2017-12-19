from django.db import models


# Create your models here.
class Comment(models.Model):
    article = models.IntegerField(default=0, blank=False, null=False)
    email = models.EmailField(default='', blank=True, null=False)
    message = models.CharField(max_length=255, default='', blank=True, null=True)


class Network(models.Model):
    name = models.CharField(max_length=255, default="Network", null=False)
    matrixX = models.CharField(max_length=255, default='[]')
    result = models.CharField(max_length=255, default='[]')
    runtime = models.IntegerField(default=10000)

    def __str__(self):
        return self.name



