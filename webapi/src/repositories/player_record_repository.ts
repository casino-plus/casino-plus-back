import { createConnection, getRepository } from 'typeorm'
import { config } from '../config/db'
import { PlayerRecord } from '../entities/player_record'

// CREATE
export function create(player: PlayerRecord) {
    createConnection(config).then(async connection => {

        await connection.manager.save(player)
        console.log('プレイヤーを保存しました プレイヤー名: ', player.nickname)

    }).catch(error => console.log(error))
}

// READ
export function readById(id: string, callback: (player: PlayerRecord)=>void) {
    createConnection(config).then(async connection => {

        const repository = getRepository(PlayerRecord)
        let player = await repository.findOne(id)
        console.log('プレイヤーを読み込みました プレイヤー名: ', player.nickname)
        callback(player)

    }).catch(error => console.log(error))
}

// UPDATE
export function update(player: PlayerRecord) {
    createConnection(config).then(async connection => {

        await connection.manager.save(user)
        console.log('プレイヤーを更新しました プレイヤー名: ', player.nickname)

    }).catch(error => console.log(error))
}

// DELETE
export function deleteById(id: number) {
    createConnection(config).then(async connection => {

        await connection.manager.remove(id)
        console.log('プレイヤーを削除しました プレイヤーID: ', id)

    }).catch(error => console.log(error))
}
