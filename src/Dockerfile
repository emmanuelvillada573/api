# Imagen base
FROM node:18

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de la API
EXPOSE 3000

# Comando de inicio
CMD ["node", "index.js"]
