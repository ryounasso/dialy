from rest_framework import serializers
from .models import Daily


class DailySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'date',
            'study',
            'other',
            'first_meet',
            'wanna_do',
            'summary',
            'evaluation',
        )
        model = Daily
