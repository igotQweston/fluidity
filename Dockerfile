#-- BUILD
FROM node:18-alpine AS build

USER node
WORKDIR /home/node

##-- Copy everything into the container
ADD --chown=node:node ./public ./public
ADD --chown=node:node ./src ./src
ADD --chown=node:node ./package.json .
ADD --chown=node:node ./tsconfig.json .
ADD --chown=node:node ./index.html .

##-- Build the app
RUN npm install
RUN npm run build


#-- DEPLOYMENT
FROM nginx:alpine

##-- Copy app build into nginx
COPY /home/node/build /usr/share/nginx/html
