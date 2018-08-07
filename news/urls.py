from django.urls import path
from . import views


urlpatterns = [
  path('', views.index, name='index'),
  path('library', views.library, name = 'library'),
  path('homescreen', views.homescreen, name = 'homescreen'),
  path('route', views.route, name = 'route'),
  path('interests', views.interests, name = 'interests'),
  path('read', views.read, name = 'read'),
  path('preview', views.preview, name = 'preview'),
  path('welcome', views.welcome, name = 'welcome'),
]
