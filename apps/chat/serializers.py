from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import Rooms, Messages

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'picture']


class RoomsSerializers(serializers.ModelSerializer):
    members = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Rooms
        fields = ['id', 'name', 'members']


class MessageSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Messages
        fields = ['id', 'room', 'user', 'message']
