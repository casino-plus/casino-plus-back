import { Express, Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import * as http from "../utils/http";
// routes
import * as RemenberPlayerID from "./routes/remenber-player-id";
import * as JoinRoom from "./routes/join-room";
import * as BetAction from "./routes/bet-action";
import * as PutAction from "./routes/put-action";
import * as GetHello from "./routes/get_hello";
import * as PostTest from "./routes/post_test";
import * as ScanRoom from "./routes/scan-room";

// routing
export function run(app: Express) {
  app.get("/", (req: Request, res: Response) => {
    const api = new GetHello.API();
    runAPI(api, req, res);
  });
  app.post("/test/:id", (req: Request, res: Response) => {
    const api = new PostTest.API(req.params.id);
    runAPI(api, req, res);
  });
  app.get(
    "/roulette-poker/remenber-player-id",
    (req: Request, res: Response) => {
      const api = new RemenberPlayerID.API();
      runAPI(api, req, res);
    }
  );
  app.post("/roulette-poker/join-room", (req: Request, res: Response) => {
    const api = new JoinRoom.API();
    runAPI(api, req, res);
  });
  app.post("/roulette-poker/put-action", (req: Request, res: Response) => {
    const api = new PutAction.API();
    runAPI(api, req, res);
  });
  app.post("/roulette-poker/bet-action", (req: Request, res: Response) => {
    const api = new BetAction.API();
    runAPI(api, req, res);
  });
  app.get("/roulette-poker/scan-room", (req: Request, res: Response) => {
    const api = new ScanRoom.API();
    runAPI(api, req, res);
  });

  // 画像アップロード受け取りの設定
  const uploader = multer({
    storage: multer.diskStorage({
      destination: function (req, file, callback) {
        // ファイルを保存するフォルダ
        callback(null, "./uploaded");
      },
      filename: function (req, file, callback) {
        // ファイル名
        // テストなので固定名で上書きして増え続けないようにしておく
        callback(null, "tmp.png");
      },
    }),
    // サイズの限界は 40000 Byte
    limits: { fileSize: 40000 },
  });

  // FIXME: - configへ移動する
  // 画像をアップロードされたとき
  app.post("/upload", uploader.single("file"), (req, res) => {
    // 送信者が付けた画像名
    const originalname = req.file.originalname;
    // アップロード時に付け直された名前
    const filename = req.file.filename;
    // ファイルサイズを出力
    console.log(req.file.size);
    // ファイル名を返す
    res.json(filename);
  });

  // あらかじめアップロードされた画像へアクセスされたとき
  // ブラウザから見る例 http://localhost:3000/uploaded/casitus.png
  app.get("/uploaded/:imagename", (req, res) => {
    const image = "./uploaded/" + req.params.imagename;
    fs.readFile(image, (err, data) => {
      res.type("png");
      console.log(data);
      res.send(data);
    });
  });
}

// APIを稼働する
function runAPI(api: http.API, req: Request, res: Response) {
  const json = JSON.stringify(req.body);
  const reqBody: http.RequestBody = JSON.parse(json);
  const resBody = api.run(reqBody);
  res.json(resBody);
}
