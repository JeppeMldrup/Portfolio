FROM node:latest AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build /usr/src/app/dist/portfolio /usr/share/nginx/html