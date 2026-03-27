FROM node:22-alpine

WORKDIR /app
#intalamos as Dependencias primeiro para o Docker

COPY package*.json ./
RUN npm install
#copiamos o restante dos dos arquivos
COPY . .
#Expõe a porta do vite
EXPOSE 5173

CMD ["npm", "run", "dev","--", "--host"]