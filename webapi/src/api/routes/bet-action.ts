import * as http from "../../utils/http";

export class API implements http.API {
  run(req: Request): Response {
    const res = {};
    return res;
  }
}

export type Request = http.RequestBody & {
  player_id: string;
  bet: string;
};
export type Response = http.ResponseBody & {};
