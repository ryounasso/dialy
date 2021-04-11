from rest_framework import serializers
from .models import Daily


class DailySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'date',
            'study',
            'other',
            'wanna_do',
            'evaluation',
        )
        model = Daily
