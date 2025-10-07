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

# ⭐ Accept build arg
ARG NODE_OPTIONS="--max-old-space-size=4096"
ENV NODE_OPTIONS=${NODE_OPTIONS}

# Dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build
COPY . .
RUN pnpm build

# ---- Runtime stage
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx","-g","daemon off;"]
