FROM node:12.19.0-alpine3.9 AS dev

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=dev

COPY . .

RUN npm run build

FROM node:12.19.0-alpine3.9 as prod

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

COPY --from=dev /usr/src/app/dist ./dist

CMD ["node", "dist/main"]