FROM node:16-alpine

# コンテナの中のディレクトリ
WORKDIR /webapi

# package.json, package-lock.json 等をコピー >> コンテナの/webapi
COPY ./package*.json .

RUN npm install

# ソースをバンドルする >> コンテナの/webapi/src
COPY ./src ./src

CMD [ "npm", "start" ]