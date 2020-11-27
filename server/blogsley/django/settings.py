import os, sys

from loguru import logger
logger.add(sys.stdout, level="DEBUG")

# Workaround until django-polymorphic supports django 3.1
from django.core.exceptions import FieldDoesNotExist  # noqa: E402
from django.db import models  # noqa: E402

models.FieldDoesNotExist = FieldDoesNotExist

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("BLOGSLEY_SECRET_KEY", False)

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get("DEBUG") == "TRUE"

ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost",
]


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "ariadne.contrib.django",
    "blogsley.django.home",
    "blogsley.django.users",
    "blogsley.django.posts",
    "blogsley.django.media",
    "corsheaders",
    'polymorphic_tree',
    'polymorphic',
    "mptt",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = "blogsley.django.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "blogsley.django.wsgi.application"


# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "HOST": os.environ.get("POSTGRES_HOST", ""),
        "NAME": os.environ.get("POSTGRES_DB", ""),
        "PASSWORD": os.environ.get("POSTGRES_PASSWORD", ""),
        "USER": os.environ.get("POSTGRES_USER", ""),
    }
}

AUTH_USER_MODEL = "users.User"

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]


# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

# TODO: This looks awfully wrong but it works.  @kfields
'''
STATIC_URL = "/media/"

STATICFILES_DIRS = [
    '/media'
]

MEDIA_ROOT = '/media'
MEDIA_URL = '/'
'''
STATIC_URL = "http://localhost:9000/"

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
# AWS_S3_ENDPOINT_URL = 'http://localhost:9000'
AWS_S3_ENDPOINT_URL =  os.environ.get("S3_HOST", ""),
AWS_S3_ENDPOINT_URL = 'http://' + AWS_S3_ENDPOINT_URL[0] + '.docker:9000'
#AWS_S3_ENDPOINT_URL = AWS_S3_ENDPOINT_URL[0]
print(AWS_S3_ENDPOINT_URL)
AWS_ACCESS_KEY_ID = 'blogsley'
AWS_SECRET_ACCESS_KEY = 'blogsley'
AWS_STORAGE_BUCKET_NAME = 'static'
# AWS_LOCATION = 'static'

# corsheaders
CORS_ORIGIN_ALLOW_ALL = True
