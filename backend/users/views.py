from rest_framework import generics
from .models import CustomUser
from .serializers import RegisterSerializer, UserSerializer,CustomUserSerializer
from rest_framework import generics, permissions

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer


class AgentListView(generics.ListAPIView):
    queryset = CustomUser.objects.filter(is_agent=True)
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.AllowAny]  
