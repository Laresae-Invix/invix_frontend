# ---- Build stage
FROM node:20-alpine AS build
WORKDIR /app

# (opsional, bantu beberapa lib)
RUN apk add --no-cache libc6-compat

# enable pnpm
ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@latest --activate

# <<<—- BARIS PENTING: skip review build scripts (pnpm v9)
ENV PNPM_SKIP_REVIEW=true
# atau set ini kalau mau: ENV PNPM_REQUIRE_SCRIPTS_APPROVAL=false

# install deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# copy source & build
COPY . .
RUN pnpm build
