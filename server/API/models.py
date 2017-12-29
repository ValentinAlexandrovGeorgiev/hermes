from django.db import models
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.contrib.postgres.fields import ArrayField
from django.utils.deconstruct import deconstructible
from cloudinary.models import CloudinaryField
import cloudinary
from .utils import get_cloudinary_img_or_default
from .constants import CURRENCY_CHOICES, DEFAULT_CLOUDINARY_IMG


@deconstructible
class ValidateFileType:

    def __init__(self, *types):
        self.types = types

    def __call__(self, val):
        try:
            if not any(val.name.endswith(file_type) for file_type in self.types):
                raise ValidationError(
                    _('%(value)s is not of valid type'),
                    params={'value': val},
                )
        except AttributeError:
            pass


IMAGE_VALIDATOR = ValidateFileType('jpg', 'jpeg', 'png', 'bmp', 'gif')
PDF_VALIDATOR = ValidateFileType('pdf')


class Category(models.Model):

    class Meta:
        verbose_name_plural = 'Categories'

    name = models.CharField(max_length=128, unique=True)
    name_en = models.CharField(max_length=128, null=True, blank=True,
                               unique=True, verbose_name='Name (English)')
    category_id = models.AutoField(primary_key=True)
    parent_category = models.ForeignKey('Category', blank=True, null=True)
    image_link = CloudinaryField(blank=True, null=True,
                                 validators=[IMAGE_VALIDATOR],
                                 default=DEFAULT_CLOUDINARY_IMG)
    online = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=128)
    name_en = models.CharField(max_length=128, null=True, blank=True,
                               verbose_name='Name (English)')
    product_id = models.CharField(max_length=32, null=True,
                                  blank=True, unique=True)
    manufacturer_name = models.CharField(max_length=128, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    description_en = models.TextField(null=True, blank=True,
                                      verbose_name='Description (English)')
    client_id = models.CharField(max_length=128, null=True, blank=True)
    category = models.ForeignKey(Category)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    currency = models.CharField(max_length=5, choices=CURRENCY_CHOICES)
    image_link = CloudinaryField(blank=True, null=True,
                                 validators=[IMAGE_VALIDATOR],
                                 default=DEFAULT_CLOUDINARY_IMG)
    online = models.BooleanField(default=True)
    views = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Catalog(models.Model):
    name = models.CharField(max_length=128, unique=True)
    name_en = models.CharField(max_length=128, null=True, blank=True,
                               unique=True, verbose_name='Name (English)')
    catalog_id = models.AutoField(primary_key=True)
    image_link = CloudinaryField(blank=True, null=True,
                                 validators=[IMAGE_VALIDATOR],
                                 default=DEFAULT_CLOUDINARY_IMG)
    pdf = models.URLField(null=True, blank=True)
    online = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        try:
            pdf_path = self.pdf
            pdf_name = pdf_path.split('/')[-1]
            pdf_name_stripped = pdf_name.strip('.pdf')
            thmnl = get_cloudinary_img_or_default(pdf_name_stripped)
            self.image_link = cloudinary.CloudinaryImage(thmnl)
        except (AttributeError, cloudinary.api.Error):
            pass
        super().save(*args, **kwargs)


class Item(models.Model):
    content = models.CharField(max_length=256, null=True, blank=True)
    content_en = models.CharField(max_length=256, null=True, blank=True,
                                  verbose_name='Content (English)')

    def __str__(self):
        return self.content


class Site(models.Model):
    config_name = models.CharField(max_length=128, unique=True)
    config_name_en = models.CharField(max_length=128, null=True,
                                      blank=True, unique=True,
                                      verbose_name='Config name (English)')
    items = models.ManyToManyField(Item)

    def __str__(self):
        return self.config_name


class Asset(models.Model):
    title = models.CharField(max_length=128, unique=True)
    title_en = models.CharField(max_length=128, null=True, blank=True,
                                unique=True, verbose_name='Title (English)')
    asset_id = models.AutoField(primary_key=True)
    query_field = models.CharField(max_length=128, blank=False,
                                   null=False, unique=True)
    body = models.TextField(null=True, blank=True)
    body_en = models.TextField(null=True, blank=True,
                               verbose_name='Body (English)')
    image_link = CloudinaryField(blank=True, null=True,
                                 validators=[IMAGE_VALIDATOR],
                                 default=DEFAULT_CLOUDINARY_IMG)
    online = models.BooleanField(default=True)

    def __str__(self):
        return self.title
