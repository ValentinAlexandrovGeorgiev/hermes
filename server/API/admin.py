from import_export.admin import ImportExportMixin
from import_export.resources import ModelResource
from django.contrib import admin
from django.utils.html import format_html
from .models import Category, Product, Catalog, Asset, Site


class ProductResource(ModelResource):

    class Meta:
        model = Product

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        last_obj = Product.objects.last()
        self.id_for_product = last_obj.id if last_obj else 0

    def before_import_row(self, dataset, **kwargs):
        existing_product =\
            Product.objects.filter(product_id=dataset['product_id']).first()
        if existing_product:
            dataset['id'] = existing_product.pk
        else:
            self.id_for_product += 1
            dataset['id'] = self.id_for_product
        super().before_import_row(dataset, **kwargs)


class ProductAdmin(ImportExportMixin, admin.ModelAdmin):

    def delete_product(self, obj):
        return format_html('<a class="btn" href="/admin/API/'
                           'product/{}/delete/">Delete</a>', obj.id)

    list_display = ('name', 'description', 'category', 'delete_product')
    resource_class = ProductResource


admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(Catalog)
admin.site.register(Asset)
admin.site.register(Site)

admin.site.site_header = 'Hermes Administration'
admin.site.site_title = 'Hermes Administration'
