import {Table, Column, Model, HasMany, PrimaryKey} from 'sequelize-typescript';

export interface IDisbursements {
    pk_disbursement_id: number
    dn_merchant_id: number
    dx_amount: number
    dx_taxes: number
    dx_status: string
    dd_paid_at: Date 
    db_pending_orders: boolean
}

@Table({
    tableName: "tr_disbursements",
    timestamps: false
})
export default class Disbursements extends Model implements IDisbursements {

    @PrimaryKey
    @Column
    pk_disbursement_id!: number

    @Column
    dn_merchant_id!: number

    @Column
    dx_amount!: number

    @Column
    dx_taxes!: number

    @Column
    dx_status!: string

    @Column
    dd_paid_at!: Date

    @Column
    db_pending_orders!: boolean
}