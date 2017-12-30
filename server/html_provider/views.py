from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.staticfiles.templatetags import staticfiles


def serve_base_html(request):
    return render(request, 'index.html')


def serve_service_worker(request):
    return HttpResponse('<script type="text/javascript" src={}></script>'
                        .format(staticfiles.static('service-worker.js')))
