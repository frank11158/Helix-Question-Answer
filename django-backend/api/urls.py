from django.urls import path, include

urlpatterns = [
    path('questions/', include('questions.urls')),
]