import MerchantService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise <any[]> {
    return await MerchantService.findAll();
}