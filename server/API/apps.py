from django.apps import AppConfig


class ApiConfig(AppConfig):
    name = 'server.API'

    def ready(self):
        import server.API.signals
