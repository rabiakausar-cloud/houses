# api/urls.py
from django.urls import path,include
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.routers import DefaultRouter
from .views import PropertyViewSet

router = DefaultRouter()
router.register("properties", PropertyViewSet, basename="property")
urlpatterns = [
    path('public/', views.public),
    path('private/', views.private),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # login
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # refresh
    path("auth/", include("dj_rest_auth.urls")),            # login/logout/token
    path("auth/registration/", include("dj_rest_auth.registration.urls")), 
        path("", include(router.urls)),

]
