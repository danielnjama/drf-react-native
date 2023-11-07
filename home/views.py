from django.shortcuts import render
from . models import userinformation
from . serializers import UserinfoSerializer
from rest_framework import generics
# from rest_framework.authentication import BasicAuthentication
# from rest_framework.permissions import IsAuthenticated

# Create your views here.
class UserinfoList(generics.ListCreateAPIView):
    queryset = userinformation.objects.all()
    serializer_class= UserinfoSerializer
    

class UserinfoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = userinformation.objects.all()
    serializer_class= UserinfoSerializer
    