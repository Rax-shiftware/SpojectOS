# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app
CMD ["node", "app.js"]

# Add a new stage for debugging
FROM node:14 AS debug

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install nodemon for debugging
RUN npm install -g nodemon

# Expose the port the app runs on
EXPOSE 8080

# Define the command to run the app with nodemon
CMD ["nodemon", "app.js"]

# Debugging steps
# 1. Build the Docker image for debugging:
#    docker build -t myapp-debug --target debug .
# 2. Run the Docker container for debugging:
#    docker run -p 8080:8080 myapp-debug
# 3. Check the logs to ensure nodemon is running and watching for changes:
#    docker logs <container_id>
# 4. Make changes to your code and see if nodemon restarts the app automatically.
