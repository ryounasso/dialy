from .models import Daily
from .serializers import DailySerializer

from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
class DailyViewSet(viewsets.ModelViewSet):
    serializer_class = DailySerializer
    queryset = Daily.objects.all()

# from django.shortcuts import render
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from rest_framework import status, viewsets, filters
# from rest_framework.generics import CreateAPIView

# class ListDaily(APIView):
#     def get(self, request):
#         try:
#             daily = Daily.objects.filter(isOpen=True).order_by('-date')
#             res_list = [
#                 {
#                     'id': d.id,
#                     'date': d.date,
#                     'evaluation': d.evaluation.evaluation,
#                 }
#                 for d in daily
#             ]
#             return Response(res_list)
#         except:
#             return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#     def post(self, request):
#         queryset = Daily.objects.all()
#         serializer_class = DailySerializer
#         return Response()


# class DetailDaily(APIView):
#     def get(self, request, pk):
#         try:
#             try:
#                 daily = Daily.objects.get(id=pk)
#             except:
#                 error_msg = "そんなidの日報はないよ！"
#                 return Response(error_msg, status=status.HTTP_404_NOT_FOUND)
#             res = {
#                 'id': daily.id,
#                 'date': daily.date,
#                 'study': daily.study,
#                 'other': daily.other,
#                 'first_meet': daily.first_meet,
#                 'wanna_do': daily.wanna_do,
#                 'summary': daily.summary,
#             }
#             return Response(res)
#         except:
#             return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# class CategoryDairy(APIView):
#     def get(self, request, cat):
#         try:
#             daily = Daily.objects.filter(isOpen=True).values_list(
#                 'date', cat).order_by('-date')

#             res_list = [
#                 {
#                     'date': d[0],
#                     'content': d[1],
#                 }
#                 for d in daily
#             ]

#             return Response(res_list)
#         except:
#             return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# class CreateDaily(CreateAPIView):
#     queryset = Daily.objects.all()
#     serializer_class = DailySerializer