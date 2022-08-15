
/**
 * @export
 * @interface IDisbursementService
 */
export interface IDisbursementService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IDisbursementService
     */
     createDisbursement(data: any): Promise<any>;
     findByMerchantId(id: any): Promise<any[]>;
}