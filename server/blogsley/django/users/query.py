from blogsley.django.graphql import query
from .models import User
from .schema import UserConnection, UserEdge, UserNode


@query.field("allUsers")
def resolve_all_users(root, info):
    users = [u for u in User.objects.all()]
    connection = UserConnection(users)
    result = connection.wire()
    return result


@query.field("user")
def resolve_user(*_, id):
    return User.objects.get(id=id)
