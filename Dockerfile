FROM mhart/alpine-node:11 AS builder
WORKDIR /app
COPY . .
RUN yarn run build