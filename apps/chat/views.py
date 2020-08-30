from rest_framework import status
from rest_framework.decorators import action
from rest_framework.mixins import CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet

from .models import Rooms, Messages
from .serializers import RoomsSerializers, MessageSerializer


class RoomsViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Rooms.objects.all()
    serializer_class = RoomsSerializers
    permission_classes = [IsAuthenticated]

    @action(detail=True, methods=['get'])
    def messages(self, request, pk=None):
        messages = Messages.objects.filter(room_id=pk)
        return Response(MessageSerializer(messages, many=True).data)


class MessageViewSet(ListModelMixin, CreateModelMixin, RetrieveModelMixin, UpdateModelMixin, GenericViewSet):
    queryset = Messages.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]
