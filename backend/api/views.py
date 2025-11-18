from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets, permissions
from .models import Property
from .serializers import PropertySerializer
@api_view(['GET'])
def public(request):
    return Response({'message': 'Public endpoint, no token needed'})

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def private(request):
    user = request.user
    return Response({'message': f'Hello {user.username}, you are authenticated!'})




class PropertyViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    # permission_classes = [permissions.IsAuthenticatedOrReadOnly]
