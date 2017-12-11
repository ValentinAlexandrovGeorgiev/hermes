from django.conf.urls import url
from .views import serve_base_html, serve_service_worker

app_name = 'html_provider'

urlpatterns = [
    url(r'^service-worker.js/$', serve_service_worker,
        name='serve-service-worker'),
    url(r'^$', serve_base_html, name='serve-base-html'),
    url(r'^.*/$', serve_base_html, name='serve-base-html'),
]
