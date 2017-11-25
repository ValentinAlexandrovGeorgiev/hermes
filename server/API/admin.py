from import_export.admin import ImportExportMixin
from import_export.resources import ModelResource
from django.contrib import admin
from .models import Category, Product, Catalog, Asset, Site


class ProductResource(ModelResource):

    class Meta:
        model = Product
        exclude = ('id',)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.id_for_product = Product.objects.last().pk

    def before_import_row(self, dataset, **kwargs):
        self.id_for_product += 1
        dataset['id'] = self.id_for_product
        print(dataset)
        super().before_import_row(dataset, **kwargs)

    def get_instance(self, instance_loader, row):
        print('row: ', row)


class ProductAdmin(ImportExportMixin, admin.ModelAdmin):
    list_display = ('name', 'description', 'category')
    resource_class = ProductResource


admin.site.register(Category)
admin.site.register(Product, ProductAdmin)
admin.site.register(Catalog)
admin.site.register(Asset)
admin.site.register(Site)
