FROM node:8-alpine

WORKDIR /usr/src/app

COPY ./reactDevops/package.json .
COPY ./reactDevops/yarn.lock .

RUN yarn

COPY ./reactDevops/build build
COPY ./reactDevops/server/server.js server/server.js

EXPOSE 8080

CMD ["node", "server/server.js"]
#
#FROM httpd:2.4
#
## This Docker images does start an Apache Server that will expose
## all the given static resources that are under a specific folder
#
#
#COPY ./reactDevops/build  /usr/local/apache2/htdocs/