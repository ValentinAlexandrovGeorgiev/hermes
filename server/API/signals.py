from django.db.models.signals import post_save, post_delete
from django.core.files.storage import default_storage
from django.dispatch import receiver
from .models import Product, Catalog
 
 
@receiver(post_save, sender=Product)
def generate_product_id(sender, instance=None, **kwargs):
    if not instance or instance.product_id is not None\
            or hasattr(instance, '_prevent_recursion'):
        return
 
    placeholder = '{}-0{}' if len(instance.id) == 1 else '{}-{}'
    product_id = placeholder.format(instance.category.category_id,
                                    instance.id)
 
    instance.product_id = product_id
    try:
        instance._prevent_recursion = True
        instance.save()
    finally:
        del instance._prevent_recursion
 
 
@receiver(post_delete, sender=Catalog)
def delete_obsolete_pdf(sender, instance=None, **kwargs):
    if not instance:
        return
    try:
        pdf_name = instance.pdf.split('/')[-1]
        default_storage.delete(pdf_name)
    except IOError:
        pass