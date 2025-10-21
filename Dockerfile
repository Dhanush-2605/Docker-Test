FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .


RUN mkdir -p /app/data

VOLUME ["/app/data"]

EXPOSE 3000

CMD ["npm", "start"]

# This Dockerfile sets up a Node.js application using the official Node.js 18 Alpine image.
# It installs production dependencies and starts the application on port 3000.

