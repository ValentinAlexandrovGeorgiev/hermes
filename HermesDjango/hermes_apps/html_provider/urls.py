from django.conf.urls import url
from .views import serve_base_html

urlpatterns = [
    url(r'^$', serve_base_html, name='serve-base-html'),
]
