ARG NODE_TAG=16-alpine3.13

FROM node:${NODE_TAG}
WORKDIR /app

copy next-app/package*.json ./
RUN npm install

COPY next-app/next.config.js ./
COPY next-app/env.local ./.env.local
COPY next-app/.next ./.next
COPY next-app/public ./public
CMD ["npm", "start"]
