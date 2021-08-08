import { Express, Request, Response } from 'express'
import * as http from './http'

// routes
import * as PostTest from './routes/post_test'
import * as BetAction from './routes/bet_action'
import * as PutAction from './routes/put_action'
import * as ScanRoom from './routes/scan_room'
import * as JoinRoom from './routes/join_room'
import * as RememberPlayerID from './routes/remember_player_id'

// routing
export function run(app: Express) {
    app.post('/test/:id', (req: Request, res: Response) => {
        const api = new PostTest.API(req.params.id)
        runAPI(api, req, res)
    })
    app.get('/', (req: Request, res: Response) => {
        res.json("Hello")
    })
    app.get('/api/roulette-poker/remenber-player-id', (req: Request, res: Response) => {
        const api = new RememberPlayerID.API()
        runAPI(api, req, res)
    })
    app.get('/api/roulette-poker/join-room', (req: Request, res: Response) => {
        const api = new JoinRoom.API()
        runAPI(api, req, res)
    })
    app.get('/api/roulette-poker/put-action', (req: Request, res: Response) => {
        const api = new PutAction.API()
        runAPI(api, req, res)
    })
    app.get('/api/roulette-poker/bet-action', (req: Request, res: Response) => {
        const api = new BetAction.API()
        runAPI(api, req, res)
    })
    app.get('/api/roulette-poker/scan-room', (req: Request, res: Response) => {
        const api = new ScanRoom.API()
        runAPI(api, req, res)
    })
}

function runAPI(api: http.API, req: Request, res: Response) {
    const json = JSON.stringify(req.body)
    const reqBody: http.RequestBody = JSON.parse(json)
    const resBody = api.run(reqBody)
    res.json(resBody)
}
