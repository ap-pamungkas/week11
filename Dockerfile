FROM  node:20.9.0-alpine3.17

WORKDIR /week11/src/app


COPY package*.json ./

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]