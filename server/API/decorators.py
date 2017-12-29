def assign_image_url_getter(cls):
    class DecoratedCls:
        def __init__(self, *args, **kwargs):
            cls.get_image_url = self.get_image_url
            self.original_instance = cls(*args, **kwargs)

        def __getattribute__(self, attr):
            try:
                res = super().__getattribute__(attr)
            except AttributeError:
                pass
            else:
                return res

            res = self.original_instance.__getattribute__(attr)
            return res

        def get_image_url(self, obj):
            if hasattr(obj.image_link, 'url'):
                return obj.image_link.url.replace('http', 'https')
            return None

    return DecoratedCls
