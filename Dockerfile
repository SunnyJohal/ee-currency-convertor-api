FROM node:17-alpine3.15

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

EXPOSE 3001

RUN ["npm", "start"]
