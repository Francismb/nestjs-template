FROM node:16

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build

ENV NODE_OPTIONS="--max-old-space-size=16384"

ENTRYPOINT ["npm", "run", "start:prod"]
