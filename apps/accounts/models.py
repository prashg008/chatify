from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.


class User(AbstractUser):
    picture = models.ImageField(upload_to="profile_pics/", null=True, blank=True)
    status = models.CharField(max_length=280, blank=True, null=True)
