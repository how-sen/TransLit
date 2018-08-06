from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'news/index.html')

def library(request):
    return render(request, 'news/library.html')

def welcome(request):
    return render(request, 'news/welcome.html')

def preview(request):
    return render(request, 'news/preview.html')

def read(request):
    return render(request, 'news/read.html')

def homescreen(request):
    return render(request, 'news/homescreen.html')

def interests(request):
    return render(request, 'news/interests.html')

def route(request):
    return render(request, 'news/route.html')
