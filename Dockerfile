# Usa uma imagem base do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de definição de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código-fonte
COPY . .

# Expõe a porta que a API usa (3000)
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "start"]
