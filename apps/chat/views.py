from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import GenericViewSet

from .models import Rooms, Messages
from .serializers import RoomsSerializers, MessageSerializer


class RoomsViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Rooms.objects.all()
    serializer_class = RoomsSerializers
    lookup_field = 'name'
    permission_classes = [IsAuthenticated]


class MessageViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Messages.objects.all()
    lookup_fields = ['room']
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]

