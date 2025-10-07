FROM node:20-bullseye-slim AS build
WORKDIR /app

ENV PNPM_HOME=/root/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@latest --activate

# IZINKAN build scripts (pnpm v9)
ENV PNPM_SKIP_REVIEW=true
ENV PNPM_ALLOW_SCRIPTS="*"

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build
