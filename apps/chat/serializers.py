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
    room = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    text = serializers.CharField(allow_blank=False, trim_whitespace=True)

    class Meta:
        model = Messages
        fields = ['id', 'room', 'user', 'text']

    def create(self, validated_data):
        user = None
        request = self.context.get("request")
        if request and hasattr(request, "user"):
            user = request.user
        else:
            raise serializers.ValidationError
        instance = Messages.objects.create(user=user, **validated_data)
        return instance
