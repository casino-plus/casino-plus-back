import * as http from "../../utils/http";

export class API implements http.API {
  run(req: Request): Response {
    console.log(req.player_id);
    const res = {};
    return res;
  }
}

export type Request = http.RequestBody & {
  player_id: string;
  put: string;
};
export type Response = http.ResponseBody & {};
