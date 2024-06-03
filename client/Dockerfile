FROM node:14-alpine

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

# Da permisos de ejecución a react-scripts
RUN chmod +x ./node_modules/.bin/react-scripts || true

COPY . /app/

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]