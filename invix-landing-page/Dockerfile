# ---- Build stage
FROM node:20-alpine AS build
WORKDIR /app

# enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# install deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# copy source & build
COPY . .
RUN pnpm build

# ---- Runtime stage (Nginx)
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
