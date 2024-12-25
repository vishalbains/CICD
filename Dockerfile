# Stage 1: Build the Node.js application
FROM node:18.16.0-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install --force

# Copy the entire Node.js app to the container
COPY . .

# Build the project
RUN npm run build
RUN rm -rf package*.json node_modules

# Stage 2: Setup NGINX
FROM nginx:1.21.3-alpine

# Copy only the build artifacts from the previous stage
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80 to the outside world (default port for HTTP)
EXPOSE 80

# Default command to start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]
