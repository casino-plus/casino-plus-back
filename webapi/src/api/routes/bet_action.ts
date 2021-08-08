import * as http from '../http'

export class API implements http.API {
    run(req: Request): Response {
        const reqBody = {}
        return reqBody
    }
}

type Request = http.RequestBody & {
    player_id: string
    bet: string
}

type Response = http.ResponseBody & {

}
