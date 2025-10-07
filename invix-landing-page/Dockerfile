# ---- Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies untuk native modules
RUN apk add --no-cache python3 make g++

# pnpm via corepack
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@latest --activate

# izinkan build scripts (pnpm v9)
ENV PNPM_SKIP_REVIEW=true
ENV PNPM_ALLOW_SCRIPTS="*"
ENV CI=true

# Limit memory usage untuk Vite
ENV NODE_OPTIONS="--max-old-space-size=4096"

# deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# source & build
COPY . .
RUN pnpm build

# ---- Runtime stage
FROM nginx:1.27-alpine

# SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Vite output -> dist
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
