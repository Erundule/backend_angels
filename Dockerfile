# Use uma imagem base oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia os arquivos de código-fonte para o diretório de trabalho
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Define a porta que o aplicativo vai escutar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
