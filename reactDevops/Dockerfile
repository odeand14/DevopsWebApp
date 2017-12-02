#FROM node:8-alpine
#
#WORKDIR /usr/src/app
#
#COPY package.json .
#COPY yarn.lock .
#
#RUN yarn
#
#COPY build build
#COPY server/server.js server/server.js
#
#EXPOSE 8080
#
#CMD ["node", "server/server.js"]

FROM httpd:2.4

# This Docker images does start an Apache Server that will expose
# all the given static resources that are under a specific folder


COPY ./build/   /usr/local/apache2/htdocs/