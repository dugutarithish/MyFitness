# Use Nginx running on Alpine Linux (an ultra-lightweight Linux base environment)
FROM nginx:alpine

# Copy all local project files into the Nginx default public directory
COPY . /usr/share/nginx/html

# Expose port 80 so the web server can serve traffic
EXPOSE 80
