from django import forms
from import_export.forms import ImportForm
from ckeditor.widgets import CKEditorWidget
from .models import Site


class ProductsImagesForm(ImportForm):
    images = forms.FileField(widget=forms.
                             ClearableFileInput(attrs={'multiple': True}))


class SiteAdminForm(forms.ModelForm):
    class Meta:
        model = Site
        fields = ('config_name', 'items')
        widgets = {
            'items': CKEditorWidget(),
        }
