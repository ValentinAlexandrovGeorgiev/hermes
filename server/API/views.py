from django.shortcuts import get_object_or_404
from django.db.models import Q
from rest_framework import generics, viewsets, filters
from rest_framework.response import Response
from .models import Asset, Catalog, Category, Product, Site
from .serializers import AssetSerializer, CatalogSerializer,\
    CategorySerializer, ProductSerializer, SiteSerializer
from .paginators import CustomizedLimitOffsetPagination
from rest_framework.pagination import LimitOffsetPagination


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.filter(online=True)
    serializer_class = CategorySerializer


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.filter(online=True)
    serializer_class = ProductSerializer
    pagination_class = CustomizedLimitOffsetPagination

    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name', 'name_en', 'product_id')
    ordering_fields = ('name', 'name_en', 'price', 'product_id')

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        products_len = queryset.count()
        return Response({'items': serializer.data,
                         'count': products_len,
                         'pages': 1})

    def retrieve(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, product_id=self.kwargs['product_id'])
        serializer = self.get_serializer(obj)
        return Response(serializer.data)


class CatalogViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Catalog.objects.filter(online=True)
    serializer_class = CatalogSerializer


class SiteViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Site.objects.all()
    serializer_class = SiteSerializer

    def retrieve(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset,
                                config_name=self.kwargs['config_name'])
        serializer = self.get_serializer(obj)
        return Response(serializer.data)


class AssetViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Asset.objects.filter(online=True)
    serializer_class = AssetSerializer


class ProductByCategory(generics.GenericAPIView):
    serializer_class = ProductSerializer
    pagination_class = CustomizedLimitOffsetPagination

    filter_backends = (filters.SearchFilter, filters.OrderingFilter)
    search_fields = ('name', 'name_en', 'product_id')
    ordering_fields = ('name', 'name_en', 'price', 'product_id')

    def get_queryset(self):
        return Product.objects.filter(
            Q(category__name=self.kwargs['category_name'],
              online=True) |
            Q(category__name_en=self.kwargs['category_name'],
              online=True))

    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        products_len = queryset.count()
        return Response({'items': serializer.data,
                         'count': products_len,
                         'pages': 1})


class AssetsBulk(generics.GenericAPIView):
    serializer_class = AssetSerializer

    def get_queryset(self):
        queryset = Asset.objects.filter(online=True)
        asset_params = self.request.query_params.get('many', None)
        if asset_params:
            actual_asset_params = asset_params.split(',')
            queryset = queryset.filter(query_field__in=actual_asset_params)
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serialized_assets = self.get_serializer(queryset, many=True)
        return Response(serialized_assets.data)
