from rest_framework.routers import SimpleRouter
from .views import UserViewSet

user_router = SimpleRouter()
user_router.register(r'users', UserViewSet)
