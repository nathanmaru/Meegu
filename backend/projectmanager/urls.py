from django.urls import path
from .views import *

app_name = 'projectmanager'

urlpatterns = [
    path('<int:pk>/', ProjectDetail.as_view(), name='projectdetail'),
    path('', ProjectList.as_view(), name='projectlist'),
    path('member/<int:pk>/', MemberDetail.as_view(), name='memberdetail'),
    path('member/', MemberList.as_view(), name='memberlist'),
    path('task/<int:pk>/', TaskDetail.as_view(), name='taskdetail'),
    path('task/', TaskList.as_view(), name='tasklist'),
]