from django.contrib import admin

from .models import Image


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    # prepopulated_fields = {"filename": ("media",)}
    pass
