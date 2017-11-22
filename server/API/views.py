from django.shortcuts import render
from django.http import Http404
import rest_framework
from rest_framework import mixins
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Asset, Catalog, Category, Product, Site
from .serializers import AssetSerializer, CatalogSerializer,\
    CategorySerializer, ProductSerializer, SiteSerializer
from .utils import convert_products_currencies
from .paginators import CustomizedLimitOffsetPagination
from rest_framework.pagination import LimitOffsetPagination


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


class ProductByCategory(generics.GenericAPIView):

    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    pagination_class = CustomizedLimitOffsetPagination

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()\
                       .filter(category__name=kwargs['category_name'])
        if not queryset:
            raise Http404
        page = self.paginate_queryset(queryset)
        to_be_populated = page if page is not None else queryset
        serializer = self.get_serializer(to_be_populated, many=True)

        return Response(serializer.data)


class SiteConfig(APIView):

    def get(self, request, config_name):
        sites = Site.objects.filter(config_name=config_name)
        serialized_sites = SiteSerializer(sites, many=True)
        if serialized_sites:
            return Response(serialized_sites.data)
        raise Http404
