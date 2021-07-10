from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *



class BookSerializer(serializers.ModelSerializer):
    
    class Meta:
        ordering = ['-id']
        model = Book
        fields = ("id", "title", "description", "publisher", "release_date", "authors")
        extra_kwargs = {'authors': {'required': False}}
    

class AuthorSerializer(serializers.ModelSerializer):
    books = BookSerializer(many=True, read_only=True)
    class Meta:
        ordering = ['-id']
        model = NewUser
        fields = ("id", "email", "user_name", "first_name", "about", "biography", "date_of_birth","books")
        extra_kwargs = {'books': {'required': False}}

