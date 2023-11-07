# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Copy local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY tsconfig.json ./

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm ci
ENV NODE_ENV=production
ENV PORT=8085
RUN npm run build

EXPOSE 8085

# Start the app using serve command
CMD npm run start