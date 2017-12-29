class ImportExportMissingCategory(Exception):
    """Exception for product csv import
       when category cannot be found"""
    def __init__(self, message=None):
        if not message:
            message = "Please provide an existing category name in your file"
        super().__init__(message)
