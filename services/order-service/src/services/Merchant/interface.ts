
/**
 * @export
 * @interface IMerchantService
 */
export interface IMerchantService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IMerchantService
     */
     findAll(): Promise<any>;
}