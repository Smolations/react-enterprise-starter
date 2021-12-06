# docker build -t res-client:next .
FROM node:16-slim AS os

LABEL version="1.0"
#LABEL description=""
#LABEL maintainer = ["@gmail.com", ...]

WORKDIR /usr/src/app

COPY package*.json ./

ENV APT_PACKAGES="curl procps" \
    NPM_PACKAGES="nodemon"

RUN apt update -y && \
  apt upgrade -y && \
  apt install -y $APT_PACKAGES && \
  npm install -g $NPM_PACKAGES && \
  npm install && \

  # why is yeoman so lame?
  #sed -i -e '/rootCheck/d' '/usr/local/lib/node_modules/yo/lib/cli.js' && \
  # sed -i -e '/rootCheck/d' '/usr/src/app/node_modules/yo/lib/cli.js' && \

  npm cache clean --force && \
  apt autoremove -y

#ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . ./

EXPOSE 8080 6006

CMD ["npm", "start"]
