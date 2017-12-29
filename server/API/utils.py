from django.core.files.storage import default_storage
from django.conf import settings
from currency_converter import CurrencyConverter
from .constants import DEFAULT_CURRENCY, DEFAULT_CLOUDINARY_IMG
from wand.image import Image
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


def pdf_thumbnail_upload_cloudinary(pdf_path, page=0):
    with open(pdf_path, 'rb') as pd:
        reader_pdf = PyPDF2.PdfFileReader(pd)
        first_page = reader_pdf.getPage(0)

    temp_pdf = PyPDF2.PdfFileWriter()
    temp_pdf.addPage(first_page)

    pdf_bytes = io.BytesIO()
    temp_pdf.write(pdf_bytes)
    pdf_bytes.seek(0)

    with Image(file=pdf_bytes) as original:
        with original.convert('jpeg') as img:
            pdf_name = pdf_path.split('/')[-1]
            pdf_name_stripped = pdf_name.strip('.pdf')
            dest = '{}/{}'.format(default_storage.location,
                                  pdf_name_stripped + '.jpg')
            img.save(filename=dest)

    cloudinary.uploader.upload(dest, public_id=pdf_name_stripped)

    default_storage.delete(pdf_name_stripped)


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
