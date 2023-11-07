from rest_framework import serializers
from . models import userinformation

class UserinfoSerializer(serializers.ModelSerializer):
    class Meta:
        model= userinformation
        # fields=['id','name','marks','dateofbirth','gender']
        fields = '__all__'