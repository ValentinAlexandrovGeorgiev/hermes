from currency_converter import CurrencyConverter
from API.constants import DEFAULT_CURRENCY


def convert_products_currencies(products):
    conv = CurrencyConverter()
    for product in products:
        price = float(product['price'])
        currency = product['currency']
        product['price'] = str(conv.convert(price, currency, DEFAULT_CURRENCY))
        product['currency'] = DEFAULT_CURRENCY
    return products
