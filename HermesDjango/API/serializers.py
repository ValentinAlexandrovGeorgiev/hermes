from rest_framework import serializers
from API.models import Asset, Catalog, Category, Product, Site


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'


class CatalogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Catalog
        fields = '__all__'


class SiteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Site
        fields = '__all__'


class AssetSerializer(serializers.ModelSerializer):

    class Meta:
        model = Asset
        fields = '__all__'
