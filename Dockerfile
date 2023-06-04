
FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /package.json

RUN yarn install

COPY . /

RUN yarn build

EXPOSE 3000

#Para producción produccion
#CMD [ "yarn", "start" ]

#Para desarrollo
CMD [ "yarn", "dev" ]