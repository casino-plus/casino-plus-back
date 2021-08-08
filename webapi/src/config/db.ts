import { ConnectionOptions } from 'typeorm'
import { GridRecord } from '../entities/grid_record'
import { PlayerRecord } from '../entities/player_record'

export const config: ConnectionOptions = {
    type: "postgres",
    host: "db",
    port: 5432,
    username: "casinoplus",
    password: "casinoplus",
    database: "casinoplus",
    entities: [
        PlayerRecord,
        GridRecord
    ],
    synchronize: true,
    logging: false
}
