# FROM node:20-alpine
# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install

# COPY . .

# # GERA O CLIENT DO PRISMA
# RUN npx prisma generate

# RUN npm run build
# EXPOSE 3000
# CMD ["npm", "run", "start:prod"]


FROM node:20-alpine


WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install --only=production

RUN npm install


COPY . .


RUN npm run build


EXPOSE 3000


CMD ["sh", "-c", "npx prisma generate && npx prisma db push && npm run start:prod"]