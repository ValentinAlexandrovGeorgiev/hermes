from rest_framework import serializers
from API.models import Asset, Catalog, Category, Product, Site
from currency_converter import CurrencyConverter
from API.constants import DEFAULT_CURRENCY


class CategorySerializer(serializers.ModelSerializer):

    image_link = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Category
        fields = '__all__'

    def get_image_url(self, obj):
        if hasattr(obj.image_link, 'url'):
            return obj.image_link.url
        return None


class ProductSerializer(serializers.ModelSerializer):

    image_link = serializers.SerializerMethodField('get_image_url')
    price = serializers.SerializerMethodField('convert_price')
    currency = serializers.SerializerMethodField('set_default_currency')

    class Meta:
        model = Product
        fields = '__all__'

    def get_image_url(self, obj):
        if hasattr(obj.image_link, 'url'):
            return obj.image_link.url
        return None

    def convert_price(self, obj):
        conv = CurrencyConverter()
        price = float(obj.price)
        currency = obj.currency
        return str(conv.convert(price, currency, DEFAULT_CURRENCY))

    def set_default_currency(self, obj):
        return DEFAULT_CURRENCY


class CatalogSerializer(serializers.ModelSerializer):

    image_link = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Catalog
        fields = '__all__'

    def get_image_url(self, obj):
        if hasattr(obj.image_link, 'url'):
            return obj.image_link.url
        return None


class SiteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Site
        fields = '__all__'


class AssetSerializer(serializers.ModelSerializer):

    image_link = serializers.SerializerMethodField('get_image_url')

    class Meta:
        model = Asset
        fields = '__all__'

    def get_image_url(self, obj):
        if hasattr(obj.image_link, 'url'):
            return obj.image_link.url
        return None