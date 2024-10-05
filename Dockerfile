# Use the official Node.js image as the build stage
FROM node:22.9.0 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install the dependencies with legacy peer deps
RUN npm install --production --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use the official Nginx image (higher version) to serve the built app
FROM nginx:latest

# Copy the built application from the build stage to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: Copy custom nginx configuration file if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the web server
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
