import { IDisbursementService } from "./interface";
import Disbursement from "../../models/Disbursement.model";
import * as Kafka from "../../config/stream/kafka"
import HttpStatusCode from "../../commons/constants/HttpStatusCode";

/**
 * @export
 * @implements {IDisbursementModelService}
 */
const DisbursementService: IDisbursementService = {
    /**
     * @returns {Promise <any>}
     * @memberof DisbursementFacade
     */
    async createDisbursement(data: any): Promise<any> {
        const response: any = {};
        await Disbursement.create(data);
        response.status = HttpStatusCode.OK;
        response.message = 'Created disbursement';
        return response;
    },

    async findByMerchantId(id: any): Promise<any> {
        const response: any = {};
        return await Disbursement.findAll({where: { dn_merchant_id: id }});
    }
}

export default DisbursementService;