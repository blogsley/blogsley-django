import pytest

from blogsley.django.utils.validation.django.html_validator import validate_html
from blogsley.django.utils.validation.html.exceptions import UnsupportedHtmlTag


class TestDjangoValidator:
    def test_div_banned(self):
        with pytest.raises(UnsupportedHtmlTag):
            validate_html("<html><div></div>", 2)
