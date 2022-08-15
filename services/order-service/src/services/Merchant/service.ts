import { IMerchantService } from "./interface";
import Merchant from "../../models/Merchant.model";
import * as Kafka from "../../config/stream/kafka"
import HttpStatusCode from "../../commons/constants/HttpStatusCode";

/**
 * @export
 * @implements {IMerchantModelService}
 */
const MerchantService: IMerchantService = {
    /**
     * @returns {Promise <any>}
     * @memberof MerchantFacade
     */
    async findAll(): Promise<any> {
        let response: any = {};
        response = await Merchant.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        });

        return response;
    }
}

export default MerchantService;