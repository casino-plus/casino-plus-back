import * as http from '../http'

export class API implements http.API {
    run(req: Request): Response {
        const reqBody = { player_id: "スタブ" }
        return reqBody
    }
}

type Request = http.RequestBody & {
    user_id: string
}

type Response = http.ResponseBody & {
    player_id: string
}
