FROM node:18 as build

WORKDIR /website
RUN npm install -g pnpm

COPY . .
RUN pnpm install && pnpm build


FROM nginx

COPY --from=build /website/dist /usr/share/nginx/html
