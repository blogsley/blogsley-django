ARG PYTHON_IMAGE=python:3.8.5-buster

## Dev stage
FROM ${PYTHON_IMAGE} as djangodev

# Copy requirements file
COPY ./requirements.txt /tmp/requirements.txt
RUN pip3 install -r /tmp/requirements.txt

RUN mkdir -p /django && useradd -d /django -u 1000 python && chown -R python /django

USER python

WORKDIR /django

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENTRYPOINT ["bash", "./startdev.sh"]
