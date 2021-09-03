import * as http from "../../utils/http";

// テストAPI
export class API implements http.API {
  // 動的ルーティングで受け取りたい値をコンストラクタに設定する
  // http://localhost/test/7 の場合は「7」
  id: string;
  constructor(id: string) {
    this.id = id;
  }
  // APIの処理
  run(req: Request): Response {
    // リクエストのパラメータを参照
    console.log(req.param);
    // レスポンスを作成
    const res = { param: "これはレスポンスのパラメータです" };
    // レスポンスを返す
    return res;
  }
}

// リクエストパラメータを定義
export type Request = http.RequestBody & {
  param: string;
};
// レスポンスパラメータを定義
export type Response = http.ResponseBody & {
  param: string;
};
