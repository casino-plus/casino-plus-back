import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import "reflect-metadata";

// ユーザー
@Entity("grids")
export class Grid extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // プレイヤーID
  @Column()
  player_id: number;

  // ルームID
  @Column()
  room_id: number;

  // シート
  @Column()
  seat: number;

  // チップ
  @Column()
  chip: number;

  // ホイールインナー
  @Column()
  inner: string;

  // ホイールアウター
  @Column()
  outer: string;

  // カード配列文字列
  @Column()
  cards: string;

  // プットカード
  @Column()
  bet: string;

  // ベットレベル
  @Column()
  put: string;

  // ステップ
  @Column()
  step: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;
}
