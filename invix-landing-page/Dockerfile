FROM node:20-alpine AS builder
WORKDIR /app

# Wajib: compat + toolchain
RUN apk add --no-cache libc6-compat python3 make g++

RUN corepack enable && corepack prepare pnpm@10.18.1 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Rebuild esbuild supaya cocok sama musl
RUN pnpm rebuild esbuild

RUN pnpm build
