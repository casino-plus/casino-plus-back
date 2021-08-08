/*** モデル ***/
export type CodableBoard = {
    inners: CodableInner[]
    outers: CodableOuter[]
    sides: CodableSide[]
}

export type CodableInner = {
    seat: number
    mark: string
}

export type CodableOuter = {
    seat: number
    mark: string
    face: string
}

export type CodableSide = {
    seat: number
    step: string
    bet?: string
    has_put_card: boolean
    chip: number
    cards: string[]
}

export type CodablePlayer = {
    seat: number
    player_id: string
    nickname: string
    icon_url: string
}

export type CodableRoom = {
    players: CodablePlayer[]
    board: CodableBoard
    inner_degree: number
    outer_degree: number
}

export type CodableAnnounce = {
    announce_id: string
    trigger_seat?: number
    showdown_list?: CodableShowdownAnimation[]
    score_list?: CodableScore[]
    bet_result_list?: CodableBetResult[]
    new_player?: CodablePlayer
}

export type CodableBetResult = {
    seat: number
    player_id: String
    bet_level: String
    new_total_chip: number
    // FIXME: - 他の人のカードは隠す
    new_cards: string[]
}

export type CodableShowdownAnimation = {
    seat: number
    put_card: string
    old_inner_degree: number
    new_inner_degree?: number
    old_outer_degree: number
    new_outer_degree?: number
}

export type CodableScore = {
    seat: number
    player_id: string
    nickname: string
    old_total_chip: number
    bonus_chip: number
    new_total_chip: number
    put_card: string
    inner: string
    outer: string
    combo_name: string
}
