FROM node:alpine as builder

LABEL version="1.0"
LABEL description="This is the development docker image for front-end of funtown applicaion."
LABEL maintainer = ["rsharma29230@gmail.com"]

WORKDIR '/app'

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html