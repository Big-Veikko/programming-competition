FROM node:lts-alpine


ENV PORT=8000

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]