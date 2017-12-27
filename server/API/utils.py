from django.core.files.storage import default_storage
from django.conf import settings
from currency_converter import CurrencyConverter
from .constants import DEFAULT_CURRENCY


def convert_products_currencies(products):
    conv = CurrencyConverter()
    for product in products:
        price = float(product['price'])
        currency = product['currency']
        product['price'] = str(conv.convert(price, currency, DEFAULT_CURRENCY))
        product['currency'] = DEFAULT_CURRENCY
    return products


def save_pdf_to_local_storage(file):
    file_name_transformed = file.name.replace(' ', '_')
    with default_storage.open(file_name_transformed, 'wb+') as dest:
        for chunk in file.chunks():
            dest.write(chunk)
        return '{}/media/{}'.format(settings.SITE_URL, file_name_transformed)
