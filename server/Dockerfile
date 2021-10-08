FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
RUN yarn lint --no-fix
RUN yarn build
RUN yarn test:unit --coverage
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]