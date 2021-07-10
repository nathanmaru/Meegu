from rest_framework import routers, serializers, viewsets, status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import AuthorSerializer, BookSerializer
from .models import *
from rest_framework import filters
from rest_framework.permissions import SAFE_METHODS,IsAuthenticatedOrReadOnly, IsAuthenticated, BasePermission, IsAdminUser, DjangoModelPermissions

class IsAnAuthor(BasePermission):
    message = 'Editing book is restricted to the authors only.'

    def has_object_permission(self, request, view, obj):
        
        if request.method in SAFE_METHODS:
            return True
        print(request.user.id)
        print(obj.authors.filter(id=request.user.id).exists())
        return obj.authors.filter(id=request.user.id).exists()

class BookViewSet(viewsets.ModelViewSet):
    permission_classes=[IsAnAuthor]
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['release_date']

class AuthorViewSet(viewsets.ModelViewSet):
    #permission_classes=[IsAuthenticatedOrReadOnly]
    queryset = NewUser.objects.all()
    serializer_class = AuthorSerializer



    