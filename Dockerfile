FROM node:alpine

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 4200

CMD ["npm", "start"]