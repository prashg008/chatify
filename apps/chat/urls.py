from rest_framework.routers import SimpleRouter
from .views import RoomsViewSet, MessageViewSet

chat_router = SimpleRouter()
chat_router.register(r'rooms', RoomsViewSet)
chat_router.register(r'message', MessageViewSet)
