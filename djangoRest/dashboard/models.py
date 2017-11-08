from django.db import models


# Create your models here.
class Comment(models.Model):
    article = models.IntegerField(default=0, blank=False, null=False)
    email = models.EmailField(default='', blank=True, null=False)
    message = models.CharField(default='', blank=True, null=True)

