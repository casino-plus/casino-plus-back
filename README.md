# Casino+ (バックエンド)
ようこそ カジノ+ のバックエンド開発へ  
こちらは Dockerを使ったWebAPI、DB の開発環境です  
使用に当たっては事前に Docker 実行環境をご用意ください

<br>

## 使い方

### 1. コンテナを起動

```terminal
$ docker compose up -d
```

### 2. ```localhost:3000``` に WebAPI が立ち上がる
```terminal
$ curl http://localhost:3000 # curlを使ったアクセス例
```

### 3. コンテナを終了

```trminal
$ docker compose down
```

<br>

# WebAPI
- /roulette-poker/join-room
  - 新しいルームに参加
- /roulette-poker/bet-action
  - Betのアクションを行う
- /roulette-poker/put-action
  - Putのアクションを行う
- /roulette-poker/load-game
  - ゲーム状況を取得する
- /roulette-poker/remenber-player-id
  - ユーザーに割り振られたプレイヤーIDの確認
- /users/:id/icon
  - ユーザーアイコンのアップロード
- /users/:id/icon.png
  - ユーザーアイコンの閲覧 

# 技術

- WebAPI: Express (TypeScript)
- DB: PostgresSQL


# ソースコード

- WebAPI
/webapi/src
