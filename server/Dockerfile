ARG PYTHON_IMAGE=python:3.8.5-buster

## Dev stage
FROM ${PYTHON_IMAGE} as dev

# Copy requirements file
COPY ./requirements.txt /tmp/requirements.txt
RUN pip3 install -r /tmp/requirements.txt

RUN mkdir -p /blogsley && useradd -d /blogsley -u 1000 blogsley && chown -R blogsley /blogsley

USER blogsley

WORKDIR /blogsley

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENTRYPOINT ["bash", "./startdev.sh"]
