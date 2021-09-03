-- ルームグリッド
CREATE TABLE grids
(
   id SERIAL PRIMARY KEY
   player_id varchar(7) NOT NULL, -- プレイヤーID
   room_id varchar(5) NOT NULL, -- ルームID
   seat integer NOT NULL, -- シート
   chip integer NOT NULL, -- チップ
   wheel_inner varchar(1) NOT NULL, -- インナー
   wheel_outer varchar(2) NOT NULL, -- アウター
   cards varchar(8) NOT NULL, -- カードリスト
   bet varchar(3) NOT NULL, -- ベット
   put varchar(2) NOT NULL, -- プット
   step varchar(16) NOT NULL, -- ステップ
   created_at TIMESTAMP,
   updated_at TIMESTAMP
);
