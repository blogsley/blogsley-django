from django.http import HttpResponse


def index(request):
    html = """
    <h1>blogsley.django</h1>
    <a href="/admin">admin</a> <br/>
    <a href="/graphql">graphql</a>
    """
    return HttpResponse(html)
