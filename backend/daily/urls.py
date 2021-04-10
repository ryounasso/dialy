from daily.views import DailyViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', DailyViewSet)
urlpatterns = router.urls

# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.ListDaily.as_view()),  # 日報一覧
#     path('create/', views.CreateDaily.as_view()),
#     path('<int:pk>/', views.DetailDaily.as_view()),  # 1日の詳細
#     path('<str:cat>/', views.CategoryDairy.as_view()),  # カテゴリ別一覧
# ]
# , base_name='daily'