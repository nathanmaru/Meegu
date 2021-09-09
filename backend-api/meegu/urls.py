from django.urls import path, include, re_path
from django.contrib import admin

urlpatterns = [
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("auth/", include("djoser.social.urls")),
    path("admin/", admin.site.urls),
]
