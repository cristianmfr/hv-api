# Use Bun official image
FROM oven/bun:1-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Install dependencies
RUN bun install --frozen-lockfile --production

# Copy source code
COPY src/ ./src/

# Expose port
EXPOSE 3333

# Set production environment
ENV NODE_ENV=production

# Run database migrations and start the server
CMD ["sh", "-c", "bun run src/index.ts"]
