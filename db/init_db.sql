-- ルームグリッド
CREATE TABLE grid
(
   player_id varchar(7) NOT NULL PRIMARY KEY, -- プレイヤーID
   room_id varchar(5) NOT NULL, -- ルームID
   seat integer NOT NULL, -- シート
   chip integer NOT NULL, -- チップ
   inner varchar(1) NOT NULL, -- インナー
   outer varchar(2) NOT NULL, -- アウター
   cards varchar(8) NOT NULL, -- カードリスト
   bet varchar(3) NOT NULL, -- ベット
   put varchar(2) NOT NULL, -- プット
   step varchar(16) NOT NULL, -- ステップ
   created_at TIMESTAMP,
   updated_at TIMESTAMP
);

-- プレイヤー
CREATE TABLE player
(
   id varchar(7) NOT NULL PRIMARY KEY, -- プレイヤーID
   room_id varchar(5) NOT NULL, -- ルームID
   seat integer NOT NULL, -- シート
   user_id varchar(500) NOT NULL, -- ユーザーID
   nickname varchar(10) NOT NULL, -- ニックネーム
   icon_url varchar(8190) NOT NULL, -- アイコンURL
   created_at TIMESTAMP,
   updated_at TIMESTAMP
);
