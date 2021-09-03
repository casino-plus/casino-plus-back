import * as models from '../models'

export const players: models.CodablePlayer[] = [
    {seat: 0, player_id: "R0000S0", nickname: "Do", icon_url: "NoURL"},
    {seat: 1, player_id: "R0000S1", nickname: "Re", icon_url: "NoURL"},
    {seat: 2, player_id: "R0000S2", nickname: "Mi", icon_url: "NoURL"},
    {seat: 3, player_id: "R0000S3", nickname: "Fa", icon_url: "NoURL"},
]
export const inners: models.CodableInner[] = [
    {seat: 0, mark: "c"},
    {seat: 1, mark: "h"},
    {seat: 2, mark: "z"},
    {seat: 3, mark: "d"}
]
export const outers: models.CodableOuter[] = [
    {seat: 0, mark: "d", face: "Q"},
    {seat: 1, mark: "c", face: "J"},
    {seat: 2, mark: "s", face: "K"},
    {seat: 3, mark: "h", face: "A"}
]
export const sides: models.CodableSide[] = [
    {seat: 0, step: "bet", bet: null, has_put_card: false, chip: 40, cards: []},
    {seat: 1, step: "bet", bet: null, has_put_card: false, chip: 40, cards: []},
    {seat: 2, step: "bet", bet: null, has_put_card: false, chip: 40, cards: []},
    {seat: 3, step: "bet", bet: null, has_put_card: false, chip: 40, cards: []}
]
export const board: models.CodableBoard = {inners: inners, outers: outers, sides: sides}
export const room: models.CodableRoom = {players: players, board: board, inner_degree: 90, outer_degree: 180}
