from django.shortcuts import render
from django.http import Http404
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Asset, Catalog, Category, Product, Site
from .serializers import AssetSerializer, CatalogSerializer,\
    CategorySerializer, ProductSerializer, SiteSerializer
from .utils import convert_products_currencies


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
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

    def get(self, request, category_name):
        category_products = Product.objects.filter(category__name=category_name)
        if category_products:
            serialized_products = ProductSerializer(category_products,
                                                    many=True)
            #convert_products_currencies(serialized_products.data)
            return Response(serialized_products.data)
        raise Http404


class SiteConfig(APIView):

    # TODO: clarify how will multiple site configs work;
    #       once clear, update Asset model;
    def get(self, request, config_name):
        site = Site.objects.get(pk=1)
        serialized_assets = AssetSerializer(site.asset_set.all(), many=True)
        if serialized_assets:
            return Response(serialized_assets.data)
        raise Http404
