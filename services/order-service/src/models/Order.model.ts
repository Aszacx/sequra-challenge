import {Table, Column, Model, HasMany, PrimaryKey} from 'sequelize-typescript';

export interface IOrders {
    pk_order_id: number
    dn_merchant_id: number
    dn_shopper_id: number
    dx_amount: number
    dx_status: string
    dd_created_at: Date 
    dd_completed_at: Date
}

@Table({
    tableName: "tr_orders",
    timestamps: false
})
export default class Orders extends Model implements IOrders {

    @PrimaryKey
    @Column
    pk_order_id!: number

    @Column
    dn_merchant_id!: number

    @Column
    dn_shopper_id!: number

    @Column
    dx_amount!: number

    @Column
    dx_status!: string

    @Column
    dd_created_at!: Date

    @Column
    dd_completed_at!: Date
}