import os

from django.db import models
from django.conf import settings

class Post(models.Model):
    title = models.CharField(max_length=200)
    block = models.TextField(blank=True)
    body = models.TextField(blank=True)

    def __str__(self):
        return self.title
