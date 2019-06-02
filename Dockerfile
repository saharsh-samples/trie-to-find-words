FROM node:12.3.1 AS build

COPY . /app
WORKDIR /app

RUN npm install && npm run build

FROM nginx:1.15.12-alpine

COPY --from=build /app/build /usr/share/nginx/html
RUN find /usr/share/nginx/html -type f -exec chmod 444 {} \; && \
    find /usr/share/nginx/html -type d -exec chmod 555 {} \;
