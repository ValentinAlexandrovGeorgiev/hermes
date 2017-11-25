from django.db import models
from django.core.validators import URLValidator
from django.contrib.postgres.fields import ArrayField
import uuid
from cloudinary.models import CloudinaryField
from .constants import CURRENCY_CHOICES


class Category(models.Model):
    name = models.CharField(max_length=128)
    category_id = models.AutoField(primary_key=True)
    parent_category = models.ForeignKey('Category', blank=True, null=True)
    image_link = CloudinaryField(blank=True, null=True)
    online = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    #id = models.IntegerField(null=True, blank=True)
    name = models.CharField(max_length=128)
    product_id = models.CharField(max_length=32, null=True, blank=True)
    description = models.TextField()
    client_id = models.CharField(max_length=128, default=uuid.uuid4)
    category = models.ForeignKey(Category)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    currency = models.CharField(max_length=5, choices=CURRENCY_CHOICES)
    image_link = CloudinaryField(blank=True, null=True)
    online = models.BooleanField(default=True)
    views = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.product_id:
            self.product_id = '{}-{}'.format(self.category.category_id,
                                             self.id)
        super().save(*args, **kwargs)


class Catalog(models.Model):
    name = models.CharField(max_length=128)
    catalog_id = models.AutoField(primary_key=True)
    image_link = CloudinaryField(blank=True, null=True)
    link = models.TextField(validators=[URLValidator()])
    online = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Site(models.Model):
    config_name = models.CharField(max_length=128, null=True, blank=True)
    items = ArrayField(models.CharField(max_length=256, blank=True),
                       null=True, blank=True)

    def __str__(self):
        return self.config_name


class Asset(models.Model):
    title = models.CharField(max_length=128)
    asset_id = models.AutoField(primary_key=True)
    query_field = models.CharField(max_length=128, blank=False,
                                   null=False, unique=True)
    body = models.TextField()
    image_link = CloudinaryField(blank=True, null=True)
    online = models.BooleanField(default=True)

    def __str__(self):
        return self.title
