from rest_framework import serializers
from .models import Asset, Catalog, Category, Product, Site
from currency_converter import CurrencyConverter
from .constants import DEFAULT_CURRENCY
from .decorators import assign_image_url_getter


@assign_image_url_getter
class CategorySerializer(serializers.ModelSerializer):

    image_link = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Category
        fields = '__all__'


@assign_image_url_getter
class ProductSerializer(serializers.ModelSerializer):

    image_link = serializers.SerializerMethodField('get_image_url')
    price = serializers.SerializerMethodField('convert_price')
    currency = serializers.SerializerMethodField('set_default_currency')
    category = serializers.SerializerMethodField('get_category_name')

    class Meta:
        model = Product
        exclude = ('client_id',)

    def convert_price(self, obj):
        conv = CurrencyConverter()
        price = float(obj.price)
        currency = obj.currency
        res = str(round(conv.convert(price, currency, DEFAULT_CURRENCY), 2))
        if len(res.split('.')[1]) == 1:
            res += '0'
        return res

    def set_default_currency(self, obj):
        return DEFAULT_CURRENCY

    def get_category_name(self, obj):
        if hasattr(obj.category, 'name'):
            return obj.category.name
        return None


@assign_image_url_getter
class CatalogSerializer(serializers.ModelSerializer):

    image_link = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Catalog
        fields = '__all__'


class SiteSerializer(serializers.ModelSerializer):

    items = serializers.SerializerMethodField('get_items_contents')

    class Meta:
        model = Site
        fields = '__all__'

    def get_items_contents(self, obj):
        return [item.content for item in obj.items.all()]


@assign_image_url_getter
class AssetSerializer(serializers.ModelSerializer):

    image_link = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Asset
        fields = '__all__'
