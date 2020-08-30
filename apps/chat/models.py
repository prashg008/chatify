from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()


class Rooms(models.Model):
    name = models.CharField(max_length=20, unique=True)
    members = models.ManyToManyField(User)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']


class Messages(models.Model):
    room = models.ForeignKey(Rooms, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']
