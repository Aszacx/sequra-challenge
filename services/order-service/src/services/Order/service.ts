import { IOrderService } from "./interface";
import Order from "../../models/Order.model";
import * as Kafka from "../../config/stream/kafka"
import HttpStatusCode from "../../commons/constants/HttpStatusCode";

/**
 * @export
 * @implements {IOrderModelService}
 */
const OrderService: IOrderService = {
    /**
     * @returns {Promise <any>}
     * @memberof OrderFacade
     */
    async getByRangeDate(iDate: Date, fDate: Date, merchantId: number): Promise<any> {
        let response: any = {};
        const { Op } = require('sequelize');
        response = await Order.findAll({ where: {
                "dd_created_at": {[Op.between] : [iDate , fDate]},
                "dx_status": "completed",
                "dn_merchant_id": merchantId
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });

        return response;
    },

    async updateOrdersByRangeDate(id: number): Promise<any> {
        let response: any = {};
        await Order.update(
            { dx_status: 'paid' }, 
            { where: { pk_order_id: id },
        });

        response.status = HttpStatusCode.OK;
        response.message = 'Updated order';

        return response;
    }

}

export default OrderService;