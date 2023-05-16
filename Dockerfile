# Seleccionamos la imagen base de node
FROM node:14-alpine

# Configuramos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de la aplicación
COPY package*.json ./
COPY yarn.lock ./
COPY .env ./
COPY public/ ./public/
COPY src/ ./src/

# Instalamos las dependencias
RUN yarn install --production

# Construimos la aplicación de React
RUN yarn build

# Configuramos un servidor web para servir la aplicación
FROM nginx:1.17-alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80

# Ejecutamos el servidor web
CMD ["nginx", "-g", "daemon off;"]
