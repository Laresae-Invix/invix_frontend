# --- build stage
FROM node:20-alpine AS builder
WORKDIR /app

# tools optional buat beberapa lib native (aman diselipin)
RUN apk add --no-cache libc6-compat

# pnpm via corepack
RUN corepack enable && corepack prepare pnpm@10.18.1 --activate

# deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# source
COPY . .

# DEBUG: cek versi & cek vite ada apa nggak
RUN node -v && pnpm -v && pnpm ls vite || true

# build (tampilkan error pnpm kalau ada)
RUN pnpm build || (echo '--- pnpm-debug.log ---' && \
                   (cat /root/.pnpm-debug.log || true) && \
                   echo '--- ls workspace ---' && \
                   ls -la && \
                   exit 1)

# --- runtime (nginx) untuk serve Vite static
FROM nginx:1.27-alpine AS runner
WORKDIR /usr/share/nginx/html

RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist ./

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
