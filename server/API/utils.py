from django.core.files.storage import default_storage
from django.conf import settings
from currency_converter import CurrencyConverter
from .constants import DEFAULT_CURRENCY, DEFAULT_CLOUDINARY_IMG
import cloudinary
import requests
import PyPDF2
import io


def convert_products_currencies(products):
    conv = CurrencyConverter()
    for product in products:
        price = float(product['price'])
        currency = product['currency']
        product['price'] = str(conv.convert(price, currency, DEFAULT_CURRENCY))
        product['currency'] = DEFAULT_CURRENCY
    return products

def save_pdf_to_local_storage_and_cloudinary_thumbnail(file):
    file_name_transformed = file.name.replace(' ', '_')
    if default_storage.exists(file_name_transformed):
        file_name_transformed = 'new_' + file_name_transformed
    with default_storage.open(file_name_transformed, 'wb+') as dest:
        for chunk in file.chunks():
            dest.write(chunk)
        #try:
        #    pdf_thumbnail_upload_cloudinary(str(dest))
        #except Exception:
        #    raise
        return '{}/media/{}'.format(settings.SITE_URL, file_name_transformed)


def get_cloudinary_img_or_default(img_name):
    url = cloudinary.CloudinaryImage(img_name).url
    res = requests.head(url)
    if res.status_code == 404:
        return cloudinary.CloudinaryImage(DEFAULT_CLOUDINARY_IMG).url
    print('generated url: ', url)
    return url
