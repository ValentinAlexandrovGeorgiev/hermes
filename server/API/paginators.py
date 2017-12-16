from rest_framework.pagination import LimitOffsetPagination
from rest_framework.pagination import _get_count


class CustomizedLimitOffsetPagination(LimitOffsetPagination):

    limit_query_param = 'count'
    offset_query_param = 'start'

    def paginate_queryset(self, queryset, request, view=None):
        self.count = _get_count(queryset)
        self.default_limit = self.count
        self.limit = self.get_limit(request)
        self.offset = self.get_offset(request)
        self.request = request

        if self.count > self.limit and self.template is not None:
            self.display_page_controls = True

        if self.count == 0 or self.offset > self.count:
            return []
        return list(queryset[self.offset:self.offset + self.limit])
