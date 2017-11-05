from django.db import models
from cloudinary.models import CloudinaryField
from django.core.validators import URLValidator
import uuid
from .constants import CURRENCY_CHOICES


class Category(models.Model):
    name = models.CharField(max_length=128)
    category_id = models.AutoField(primary_key=True)
    parent_category = models.ForeignKey('Category', blank=True, null=True)
    image_link = CloudinaryField(blank=True, null=True)
    online = models.BooleanField(default=True)


class Product(models.Model):
    name = models.CharField(max_length=128)
    product_id = models.AutoField(primary_key=True)
    description = models.TextField()
    client_id = models.CharField(max_length=128, unique=True,
                                 default=uuid.uuid4())
    category = models.ForeignKey(Category)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    currency = models.CharField(max_length=5, choices=CURRENCY_CHOICES)
    image_link = CloudinaryField(blank=True, null=True)
    online = models.BooleanField(default=True)
    views = models.IntegerField(default=0)


class Catalog(models.Model):
    name = models.CharField(max_length=128)
    catalog_id = models.AutoField(primary_key=True)
    image_link = CloudinaryField(blank=True, null=True)
    link = models.TextField(validators=[URLValidator()])
    online = models.BooleanField(default=True)


class Site(models.Model):

    @property
    def site_id(self):
        return self.id


class Asset(models.Model):
    title = models.CharField(max_length=128)
    asset_id = models.AutoField(primary_key=True)
    body = models.TextField()
    image_link = CloudinaryField(blank=True, null=True)
    online = models.BooleanField(default=True)
    site = models.ForeignKey(Site)

    def save(self, *args, **kwargs):
        self.site = Site.objects.get(pk=1)
        super().save(*args, **kwargs)
