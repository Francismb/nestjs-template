FROM node:16

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build

ENTRYPOINT ["npm", "run", "start:prod"]
