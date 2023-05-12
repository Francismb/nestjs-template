FROM node:16

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build

ENTRYPOINT ["NODE_OPTIONS=--max-old-space-size=4096", "npm", "run", "start:prod"]
