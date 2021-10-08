FROM node:lts-alpine
WORKDIR /app
COPY package*.json yarn*.lock ./
RUN yarn install
RUN yarn lint
RUN yarn test
COPY . .
EXPOSE 8080
CMD [ "yarn", "serve" ]