from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password

from users.models import User
from users.api.serializers import UserSerializer

class UserApiViewSet(ModelViewSet):
    permission_classes = [IsAdminUser]  
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
    def create(self, request, *args, **kwargs):
        request.data['password'] = make_password(request.data['password'])
        return super().create(request, *args, **kwargs)
    
    def partial_update(self, request, *args, **kwargs):
        data = request.data.copy() 
        password = data.get('password')
        if password:
            data['password'] = make_password(password)
        else:
            data['password'] = request.user.password
        return super().partial_update(request, data, *args, **kwargs) 
    

class UserView(APIView):
    permission_classes = [IsAuthenticated]  

    def get(self, request):
        return Response(UserSerializer(request.user).data)