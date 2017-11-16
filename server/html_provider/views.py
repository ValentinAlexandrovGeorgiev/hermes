from django.shortcuts import render


def serve_base_html(request):
    return render(request, 'index.html')
