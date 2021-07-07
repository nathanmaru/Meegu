from rest_framework import serializers
from .models import Project, Member, Task


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'title', 'description', 'isAResource', 'deadline', 'status')
        model = Project

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'member', 'project', 'role', 'color')
        model = Member

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'task_name', 'description', 'content', 
            'deadline', 'status', 'assigned_To', 'project', 'part_Of')
        model = Task