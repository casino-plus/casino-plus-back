import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import "reflect-metadata"

// ユーザー
@Entity('grid')
export class GridRecord extends BaseEntity {

    @PrimaryGeneratedColumn()
    player_id: string

    @Column()
    room_id: string

    @Column()
    seat: number

    @Column()
    chip: number

    @Column()
    inner: string

    @Column()
    outer: string

    @Column()
    cards: string

    @Column()
    bet: string

    @Column()
    put: string

    @Column()
    step: string
}
