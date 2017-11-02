from django.shortcuts import render
from django.http import Http404
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from API.models import Asset, Catalog, Category, Product, Site
from API.serializers import AssetSerializer, CatalogSerializer,\
    CategorySerializer, ProductSerializer, SiteSerializer


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProdcutViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CatalogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Catalog.objects.all()
    serializer_class = CatalogSerializer


class SiteViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Site.objects.all()
    serializer_class = SiteSerializer


class AssetViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer


class ProductByCategory(APIView):

    def get_category(self, name):
        try:
            return Category.objects.get(name=name)
        except Category.DoesNotExist:
            raise Http404

    def get(self, request, category_name):
        category = self.get_category(category_name)
        category_products = Product.objects.filter(category=category)
        if category_products:
            serialized_products = ProductSerializer(category_products)
            return Response(serialized_products.data)
        raise Http404


class SiteConfig(APIView):

    def get(self, request, config_name):
        site = Site.objects.get(pk=1)
        serialized_assets = AssetSerializer(site.asset_set.all())
        if serialized_assets:
            return Response(serialized_assets.data)
        raise Http404
