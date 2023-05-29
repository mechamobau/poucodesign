# Build stage
FROM node:lts AS build

RUN npm install -g pnpm@7 turbo typescript

WORKDIR /app

COPY package*.json ./
COPY pnpm-lock.yaml ./

RUN pnpm fetch --prod

ADD . ./

RUN pnpm install -r --offline --prod && pnpm run build

FROM caddy:alpine AS production

EXPOSE 443

COPY --from=build /app /etc/caddy/
# TODO: Mudar para Caddyfile
COPY Caddyfile.dev /etc/caddy/Caddyfile
