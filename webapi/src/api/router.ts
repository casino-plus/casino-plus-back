import { Express, Request, Response } from "express";
import fs from "fs";
import * as Http from "../utils/http";
// routes
import * as RemenberPlayerID from "./routes/remember_player_id";
import * as JoinRoom from "./routes/join_room";
import * as BetAction from "./routes/bet_action";
import * as PutAction from "./routes/put_action";
import * as GetHello from "./routes/welcome";
import * as PostTest from "./routes/post_test";
import * as LoadGame from "./routes/load_game";
import * as UploadUserIcon from "./routes/upload_user_icon";

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
  app.get("/roulette-poker/load-game", (req: Request, res: Response) => {
    const api = new LoadGame.API();
    runAPI(api, req, res);
  });

  // ユーザーアイコンをアップロードされたとき
  // cURLで確認する例 curl -X POST -F file=@./casitus.png -H "Content-Type:multipart/form-data" http://localhost:3000/users/0/icon
  app.post("/users/:id/icon", UploadUserIcon.upload, (req, res) => {
    const api = new UploadUserIcon.API(req.params.id, req.file);
    runAPI(api, req, res);
  });

  // ユーザーアイコンを要求されたとき
  // ブラウザから見る例 http://localhost:3000/users/0/icon.png
  app.get("/users/:id/icon.png", (req, res) => {
    const image = "./mock_file_server/users/" + req.params.id + "/icon.png";
    const data = fs.readFileSync(image);
    res.type("png");
    res.send(data);
  });
}

// APIを稼働する
function runAPI(api: Http.API, req: Request, res: Response) {
  const json = JSON.stringify(req.body);
  const reqBody: Http.Request = JSON.parse(json);
  const resBody = api.run(reqBody);
  res.json(resBody);
}
