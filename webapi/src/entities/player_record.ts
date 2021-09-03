import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import "reflect-metadata"

// ユーザー
@Entity('player')
export class PlayerRecord extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    room_id: string

    @Column()
    seat: number

    @Column()
    user_id: string

    @Column()
    nickname: string

    @Column()
    icon_url: string

    @Column()
    created_at: string

    @Column()
    updated_at: string
}
