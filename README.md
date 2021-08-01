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
- /api/roulette-poker/join-room
  - 新しいルームに参加
- /api/roulette-poker/bet-action
  - Betのアクションを行う
- /api/roulette-poker/put-action
  - Putのアクションを行う
- /api/roulette-poker/scan-room
  - ルーム状況を取得する
- /api/roulette-poker/remenber-player-id
  - ユーザーに割り振られたプレイヤーIDの確認

# 技術

- WebAPI: Express (TypeScript)
- DB: PostgresSQL


# ソースコード

- WebAPI
/webapi/src