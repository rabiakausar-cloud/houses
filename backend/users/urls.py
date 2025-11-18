from django.urls import path
from .views import RegisterView
from .views import AgentListView

urlpatterns = [
    path("register/", RegisterView.as_view(), name="user-register"),
    path('agents/', AgentListView.as_view(), name='agent-list'),

]
