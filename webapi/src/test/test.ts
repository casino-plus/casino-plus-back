import { createConnection } from "typeorm";
import { create } from "../repositories/user";
import { readById } from "../repositories/user";
import { User } from "../types/user";

// テスト実行
export function run() {
  // ユーザーリポジトリのテスト

  // ユーザーを保存してみる
  const user = new User();
  user.nickname = "Taro";
  user.chip = 40;
  user.id = 3;
  user.mail = "sample.com";
  user.created_at = "C";
  user.updated_at = "D";
  create(user);

  //
  // 最初の一回に実行されてしまうと、存在せずにエラーになるのでコメントアウト
  //
  // ユーザーを取り出してみる
  // readById(1, (user) => {
  //     console.log('取り出しに成功しました', user)
  // })
}
