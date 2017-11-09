from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

INSTALLED_APPS += [
    'sslserver',
]

WSGI_APPLICATION = 'config.wsgi.application'

SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
