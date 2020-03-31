FROM node:12.2.0-alpine as build

WORKDIR /the/workdir/path

#copy react app to container
COPY . /app/

#prepare react app for building react 
RUN npm install --silent	


