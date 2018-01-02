from django import forms
from django.conf import settings
from django.core.validators import URLValidator
from django.core.exceptions import ValidationError
from import_export.forms import ImportForm
from .models import PDF_VALIDATOR
from .utils import save_pdf_to_local_storage


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
        context['widget']['subwidgets'][0]['attrs']['maxlength'] = 2000
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
        return data_list


class CatalogForm(forms.ModelForm):
    pdf = PDFField(label='PDF External Link')

    def clean(self, *args, **kwargs):
        '''Comparison with existing pdf is of no use atm, because
           currently the pdf field is read-only after creation but
           that may change'''
        external_link, local_storage =\
            self.cleaned_data.get('pdf', (None, None))
        current_pdf_url = self.instance.pdf
        if external_link and external_link != current_pdf_url:
            if local_storage:
                raise ValidationError('Choose only one of the two PDF options.')
            self.cleaned_data['pdf'] = external_link
        elif local_storage:
            self.cleaned_data['pdf'] =\
                save_pdf_to_local_storage(local_storage,
                                          self.cleaned_data['name'])
        return super().clean(*args, **kwargs)
