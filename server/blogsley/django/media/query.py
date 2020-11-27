from blogsley.django.graphql import query

from .models import Image
from .schema import ImageConnection, ImageEdge, ImageNode

@query.field("allImages")
def resolve_all_images(root, info):
    #return Image.objects.all()
    images = [i for i in Image.objects.all()]
    connection = ImageConnection(images)
    result = connection.wire()
    return result

@query.field("image")
def resolve_image(*_, id):
    return Image.objects.get(id=id)
