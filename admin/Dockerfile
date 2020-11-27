# Current version. See the following:
# https://nodejs.org/en/about/releases/
ARG NODE_VERSION=node:14-buster

ARG NGINX_VERSION=nginx:1.18-alpine

## Base image for dev and build stages
FROM ${NODE_VERSION} AS quasar-base
RUN npm install -g @quasar/cli
RUN mkdir /admin && chown -R node /admin/
USER node
WORKDIR /admin/


## Development stage
FROM quasar-base AS quasar-dev
ENTRYPOINT ["bash", "./startdev.sh"]
