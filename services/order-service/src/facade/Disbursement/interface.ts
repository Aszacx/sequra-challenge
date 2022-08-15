
/**
 * @export
 * @interface IDisbursementFacade
 */
export interface IDisbursementFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IDisbursementFacade
     */
     createDisbursement(filter: any): Promise<any[]>;
     findByMerchantId(id: any): Promise<any[]>;

}