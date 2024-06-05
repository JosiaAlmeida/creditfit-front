FROM node:18-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build

ENV NUXT_API=http://localhost:3000

EXPOSE 3001

CMD [ "node", ".output/server/index.mjs" ]