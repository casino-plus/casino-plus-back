import * as http from "../../utils/http";

export class API implements http.API {
  run(req: Request): Response {
    const res = { msg: "Hello" };
    return res;
  }
}

export type Request = http.RequestBody & {};
export type Response = http.ResponseBody & {
  msg: string;
};
