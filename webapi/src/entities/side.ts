import { Card } from "./card"

export class Side {

    seat: number
    put?: Card
    bet?: string
    chip: number
    step: string
    cards: [Card]
}
