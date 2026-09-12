# Fetching the latest node image on apline linux
FROM node:lts-alpine AS builder

# Declaring env
ENV NODE_ENV=production

# Setting up the work directory
WORKDIR /app

# Copying package.json and package-lock.json to install dependencies
COPY package*.json ./

# Installing dependencies
RUN npm install --production

# Copying all the files in our project
COPY . .

# Building our application
RUN npm run build

# Fetching the latest nginx image
FROM nginx:alpine

# Copying built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copying our nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf


