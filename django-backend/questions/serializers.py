from rest_framework import serializers

from .models import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'title', 'body', 'asked_by', 'created_at']
        read_only_fields = ['asked_by', 'created_at']