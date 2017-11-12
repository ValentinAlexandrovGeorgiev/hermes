from django.contrib import admin
from .models import Category, Product, Catalog, Asset, Site

admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Catalog)
admin.site.register(Asset)
admin.site.register(Site)
