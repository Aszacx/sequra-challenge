import { DisbursementService } from "../../services";
import { IDisbursementFacade } from "./interface";


/**
 * @export
 * @implements {IDisbursementModelService}
 */
const DisbursementFacade: IDisbursementFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof DisbursementFacade
     */
    async createDisbursement(filter: any): Promise<any[]> {
        let Disbursement = await DisbursementService.createDisbursement(filter);
        return Disbursement;
    },

    async findByMerchantId(id: any): Promise<any[]> {
        let Disbursement = await DisbursementService.findByMerchantId(id);
        return Disbursement;
    }
}

export default DisbursementFacade;