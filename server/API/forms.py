from django import forms
from django.conf import settings
from django.core.validators import URLValidator
from import_export.forms import ImportForm
from .models import PDF_VALIDATOR
from .utils import save_pdf_to_local_storage_and_cloudinary_thumbnail


class ProductsImagesForm(ImportForm):
    images = forms.FileField(widget=forms.
                             ClearableFileInput(attrs={'multiple': True}),
                             required=False)


class PDFWidget(forms.MultiWidget):

    template_name = 'API/multiwidget.html'

    def __init__(self, *args, **kwargs):
        self.widgets = [
            forms.URLInput(),
            forms.FileInput()
        ]

        super().__init__(widgets=self.widgets, *args, **kwargs)

    def get_context(self, name, value, attrs):
        context = super().get_context(name, value, attrs)
        context['widget']['subwidgets'][0]['attrs']['maxlength'] = 50
        context['widget']['subwidgets'][0]['attrs']['placeholder'] =\
            'Link to external PDF'
        return context

    def decompress(self, value):
        if value:
            return [value, None]
        return [None, None]


class PDFField(forms.MultiValueField):

    widget = PDFWidget

    class Meta:
        labels = {
            'pdf': 'PDF External Link'
        }

    def __init__(self, *args, **kwargs):
        error_messages = {
            'incomplete': 'Enter an external PDF link'
                          'or choose a local PDF file'
        }

        fields = (
            forms.URLField(
                error_messages={'incomplete': 'Enter an external PDF link.'},
                validators=[URLValidator],
                required=False
            ),
            forms.FileField(
                error_messages={'incomplete': 'Choose PDF file to upload'},
                validators=[PDF_VALIDATOR],
                required=False
            )
        )

        super().__init__(
            error_messages=error_messages, fields=fields,
            require_all_fields=False, *args, **kwargs
        )

    def compress(self, data_list):
        if data_list[0]:
            return data_list[0]
        saved_path = save_pdf_to_local_storage_and_cloudinary_thumbnail(data_list[1])
        return saved_path


class CatalogForm(forms.ModelForm):
    pdf = PDFField()

    class Meta:
        fields = '__all__'
        labels = {'pdf': 'PDF External link'}

