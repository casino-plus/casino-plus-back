import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import "reflect-metadata"

// ユーザー
@Entity('grids')
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
    inner_wheel: string

    @Column()
    outer_wheel: string

    @Column()
    cards: string

    @Column()
    bet: string

    @Column()
    put: string

    @Column()
    step: string

    @Column()
    created_at: string

    @Column()
    updated_at: string
}
