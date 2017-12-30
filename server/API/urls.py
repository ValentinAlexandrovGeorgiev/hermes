from django.conf.urls import url
from rest_framework import renderers
from .views import AssetViewSet, CatalogViewSet, CategoryViewSet,\
    ProductViewSet, SiteViewSet, ProductByCategory, AssetsBulk

app_name = 'API'

category_list = CategoryViewSet.as_view({
    'get': 'list'
})

category_detail = CategoryViewSet.as_view({
    'get': 'retrieve'
})

product_list = ProductViewSet.as_view({
    'get': 'list'
})

product_detail = ProductViewSet.as_view({
    'get': 'retrieve'
})

catalog_list = CatalogViewSet.as_view({
    'get': 'list'
})

catalog_detail = CatalogViewSet.as_view({
    'get': 'retrieve'
})

site_list = SiteViewSet.as_view({
    'get': 'list'
})

site_detail = SiteViewSet.as_view({
    'get': 'retrieve'
})

asset_list = AssetViewSet.as_view({
    'get': 'list'
})

asset_detail = AssetViewSet.as_view({
    'get': 'retrieve'
})

urlpatterns = ([
    url(r'^product/(?P<product_id>[\w\- ]+)/$', product_detail,
        name='product-detail'),
    url(r'^products/$', product_list, name='product-list'),
    url(r'^products/(?P<category_name>[\w\- ]+)/$',
        ProductByCategory.as_view(), name='products-category'),
    url(r'^categories/$', category_list, name='category-list'),
    url(r'^catalogs/$', catalog_list, name='catalog-list'),
    url(r'^asset/(?P<pk>[0-9]+)/$', asset_detail, name='asset-detail'),
    url(r'^site/(?P<config_name>[\w\- ]+)/$', site_detail,
        name='site-config'),
    url(r'^assets-bulk/$', AssetsBulk.as_view(), name='assets-bulk'),
])
