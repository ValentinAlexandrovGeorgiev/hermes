from django.core.management.base import BaseCommand
from API.factories import *


class Command(BaseCommand):
    '''Populates database with dummy data'''

    def add_arguments(self, parser):
        parser.add_argument('--products',
                            default=20,
                            type=int,
                            help="Number of dummy products to create")

        parser.add_argument('--catalogs',
                            default=20,
                            type=int,
                            help="Numer of dummy cagalogs to create")

        parser.add_argument('--assets',
                            default=20,
                            type=int,
                            help="Numer of dummy assets to create")

    def handle(self, *args, **options):
        for _ in range(options['products']):
            ProductFactory(category__parent_category__parent_category=None)

        for _ in range(options['catalogs']):
            CatalogFactory()

        for _ in range(options['assets']):
            AssetFactory()
