from loguru import logger

from .hub import hub, PostSubscriber, PostEvent

from blogsley.django.graphql import mutation
from blogsley.django.iam.jwt import load_user
from blogsley.django.posts.models import Post


@mutation.field("createPost")
def resolve_create_post(_, info, data):
    user = load_user(info)
    if not user.is_authenticated:
        raise Exception("You can't do that!")

    title = data.get("title", None)
    block = data.get("block", None)
    body = data.get("body", None)

    post = Post.objects.create(title=title, block=block, body=body)

    return post


@mutation.field("updatePost")
def resolve_update_post(_, info, id, data):
    user = load_user(info)
    if not user.is_authenticated:
        raise Exception("You can't do that!")

    try:
        post = Post.objects.get(id=id)
    except Post.DoesNotExist:
        logger.debug("Post not found")
        raise Exception("Post not found")

    title = data.get("title", None)
    block = data.get("block", None)
    body = data.get("body", None)

    post.title = title
    post.block = block
    post.body = body

    post.save()

    event = PostEvent(id, 'update')

    return event

@mutation.field("deletePost")
def resolve_delete_post(_, info, id):
    user = load_user(info)
    if not user.is_authenticated:
        raise Exception("You can't do that!")

    try:
        post = Post.objects.get(id=id)
    except Post.DoesNotExist:
        logger.debug("Post not found")
        raise Exception("Post not found")

    post.delete()

    event = PostEvent(id, 'delete')

    return event
