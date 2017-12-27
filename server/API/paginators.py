from collections import OrderedDict
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.pagination import _get_count
from rest_framework.response import Response


class CustomizedLimitOffsetPagination(LimitOffsetPagination):

    limit_query_param = 'count'
    offset_query_param = 'start'
    default_limit = 12

    def paginate_queryset(self, queryset, request, view=None):
        self.count = _get_count(queryset)
        self.limit = self.get_limit(request)
        self.offset = self.get_offset(request)
        self.request = request

        if self.count > self.limit and self.template is not None:
            self.display_page_controls = True

        if self.count == 0 or self.offset > self.count:
            return []
        return list(queryset[self.offset:self.offset + self.limit])

    def get_num_of_pages(self):
        if self.count % self.limit == 0:
            return self.count / self.limit
        else:
            return self.count // self.limit + 1

    def get_paginated_response(self, data):
        return Response(OrderedDict([
            ('count', self.count),
            ('items', data),
            ('pages', self.get_num_of_pages())
        ]))
