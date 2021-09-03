import * as http from "../../utils/http";

export class API implements http.API {
  run(req: Request): Response {
    console.log(req.user_id);
    const res = { player_id: "" };
    return res;
  }
}

export type Request = http.RequestBody & {
  user_id: string;
};
export type Response = http.ResponseBody & {
  player_id: string;
};
