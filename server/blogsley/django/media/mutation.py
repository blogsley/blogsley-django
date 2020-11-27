import os, sys
from loguru import logger

from django.conf import settings
from django.core.files import File
from django.core.files.storage import default_storage

from blogsley.django.graphql import mutation
from blogsley.django.iam.jwt import load_user

from .models import Image
from .hub import hub, ImageSubscriber, ImageEvent

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

IMG_WIDTH = 200
IMG_HEIGHT = 160

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@mutation.field("uploadImage")
def resolve_upload_image(_, info, data, upload):
    # check if the post request has the file part
    print('uploading files')
    request = info.context["request"]
    files = request.FILES
    print(files)
    print(settings.MEDIA_ROOT)
    for key, value in files.items():
        # if user does not select file, browser also
        # submit an empty part without filename
        file = value
        filename = file.name
        if filename == '':
            raise Exception('No selected file')
        if file and allowed_file(filename):
            print(filename)
            with default_storage.open(os.path.join(settings.MEDIA_ROOT, filename), 'wb+') as destination:
                for chunk in file.chunks():
                    destination.write(chunk)

    title = data.get("title", None)
    filename = data.get("filename", None)

    image = Image.objects.create(title=title, media=File(file))

    return image

@mutation.field("createImage")
def resolve_create_image(_, info, data, upload):
    user = load_user(info)
    if not user.is_authenticated:
        raise Exception("You can't do that!")

    title = data.get("title", None)
    filename = data.get("filename", None)

    image = Image.objects.create(title=title, filename=filename)

    return image


@mutation.field("updateImage")
def resolve_update_image(_, info, id, data):
    user = load_user(info)
    if not user.is_authenticated:
        raise Exception("You can't do that!")

    try:
        image = Image.objects.get(id=id)
    except Image.DoesNotExist:
        logger.debug("Image not found")
        raise Exception("Image not found")

    title = data.get("title", None)
    block = data.get("block", None)
    body = data.get("body", None)

    image.title = title
    image.block = block
    image.body = body

    image.save()

    event = ImageEvent(id, 'update')

    return event

@mutation.field("deleteImage")
def resolve_delete_image(_, info, id):
    user = load_user(info)
    if not user.is_authenticated:
        raise Exception("You can't do that!")

    try:
        image = Image.objects.get(id=id)
    except Image.DoesNotExist:
        logger.debug("Image not found")
        raise Exception("Image not found")

    image.delete()

    event = ImageEvent(id, 'delete')

    return event
