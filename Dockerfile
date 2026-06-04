FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_BASE_PATH=/
ENV VITE_BASE_PATH=$VITE_BASE_PATH

RUN npm run build


FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK CMD curl -f http://localhost || exit 1

CMD ["nginx", "-g", "daemon off;"]