import {Table, Column, Model, HasMany, PrimaryKey} from 'sequelize-typescript';

export interface IMerchants {
    pk_merchant_id: number
    dx_name: string
    dx_email: string
    dx_cif: string
}

@Table({
    tableName: "tr_merchants"
})
export default class Merchants extends Model implements IMerchants {

    @PrimaryKey
    @Column
    pk_merchant_id!: number

    @Column
    dx_name!: string

    @Column
    dx_email!: string

    @Column
    dx_cif!: string
}