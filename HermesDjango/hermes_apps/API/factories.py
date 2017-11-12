import uuid
import cloudinary
import factory
import factory.fuzzy
from .constants import CURRENCY_CHOICES
from .models import Asset, Catalog, Category, Product, Site


class CategoryFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Category

    name = factory.Sequence(lambda n: "Category %d" % n)
    category_id = factory.Sequence(lambda n: n)
    parent_category = factory.SubFactory('hermes_apps.API.'
                                         'factories.CategoryFactory')
    online = factory.fuzzy.FuzzyChoice([True, False])


class ProductFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Product

    name = factory.Sequence(lambda n: "Product %d" % n)
    product_id = factory.Sequence(lambda n: n)
    description = factory.fuzzy.FuzzyText(length=56)
    client_id = factory.Sequence(lambda n: uuid.uuid4())
    category = factory.SubFactory(CategoryFactory)
    price = factory.fuzzy.FuzzyDecimal(0.5, 58.2)
    currency = factory.fuzzy.FuzzyChoice([curr[0] for curr
                                          in CURRENCY_CHOICES])
    image_link = factory.Sequence(lambda n:
                                  cloudinary.CloudinaryResource('sample.jpg'))
    online = factory.fuzzy.FuzzyChoice([True, False])
    views = factory.fuzzy.FuzzyInteger(78)


class CatalogFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Catalog

    name = factory.Sequence(lambda n: "Catalog %d" % n)
    catalog_id = factory.Sequence(lambda n: n)
    online = factory.fuzzy.FuzzyChoice([True, False])


class SiteFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Site


class AssetFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Asset

    title = factory.Sequence(lambda n: "Asset %d" % n)
    asset_id = factory.Sequence(lambda n: n)
    body = factory.fuzzy.FuzzyText(length=56)
    online = factory.fuzzy.FuzzyChoice([True, False])
    site = factory.SubFactory(SiteFactory)
