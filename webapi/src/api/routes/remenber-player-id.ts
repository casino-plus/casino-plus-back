import * as http from "../../utils/http";

export class API implements http.API {
  run(req: Request): Response {
    const res = {
      player_id: "string",
      event_player_id: "string",
    };
    return res;
  }
}

export type Request = http.RequestBody & {
  user_id: string;
};
export type Response = http.ResponseBody & {
  player_id: string;
  event_player_id: string;
};
