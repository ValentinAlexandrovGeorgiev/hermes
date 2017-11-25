from rest_framework.pagination import LimitOffsetPagination


class CustomizedLimitOffsetPagination(LimitOffsetPagination):

    limit_query_param = 'count'
    offset_query_param = 'start'
