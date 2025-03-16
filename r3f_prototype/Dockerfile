# Step 1: Build the React app with Vite
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your code
COPY . .

# Build the production app
RUN npm run build

# Step 2: Serve the build using serve
FROM node:18-alpine

# Install serve globally
RUN npm install -g serve

# Copy build output from builder stage
WORKDIR /app
COPY --from=builder /app/dist /app

# Expose port 3000
EXPOSE 3000

# Serve the static files
CMD ["serve", "-s", ".", "-l", "3000"]
