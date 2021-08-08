import * as http from '../http'
import { CodableRoom } from '../models'
import * as stub from '../stub/stub01'

export class API implements http.API {
    run(req: Request): Response {
        const reqBody = {room: stub.room}
        return reqBody
    }
}

type Request = http.RequestBody & {
    player_id: string
    put: string
}

type Response = http.ResponseBody & {
    room: CodableRoom
}
