from django.db import models


class Image(models.Model):
    title = models.CharField(max_length=200)
    media = models.ImageField()
    description = models.TextField(blank=True)

    @property
    def filename(self):
        if self.media:
            return self.media.name
        return self.title

    @property
    def src(self):
        if self.media:
            return self.media.url
        return ''

    def __str__(self):
        return self.title
