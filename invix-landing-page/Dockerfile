# ---- Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies
RUN apk add --no-cache python3 make g++

# pnpm setup
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@latest --activate

# Build configs
ENV PNPM_SKIP_REVIEW=true
ENV PNPM_ALLOW_SCRIPTS="*"
ENV CI=true

# Memory limit
ARG NODE_OPTIONS="--max-old-space-size=6144"
ENV NODE_OPTIONS=${NODE_OPTIONS}

# Dependencies
COPY package.json pnpm-lock.yaml ./

# ⭐ Install dengan error handling
RUN pnpm install --frozen-lockfile --reporter=append-only || \
    (echo "Install failed, trying without frozen-lockfile..." && \
     pnpm install --reporter=append-only)

# Build
COPY . .

# ⭐ Build dengan verbose output
RUN echo "Starting build..." && \
    pnpm build --logLevel=info || \
    (echo "=== BUILD FAILED ===" && \
     echo "Node version:" && node --version && \
     echo "pnpm version:" && pnpm --version && \
     echo "Memory info:" && cat /proc/meminfo | grep MemTotal && \
     echo "Disk space:" && df -h && \
     exit 1)

# Verify build output
RUN ls -la dist/ && echo "Build successful!"

# ---- Runtime stage
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
