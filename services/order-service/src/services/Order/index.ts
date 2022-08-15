import OrderService from './service';

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function getByRangeDate(iDate: Date, fDate: Date, merchantId: number): Promise <any[]> {
    return await OrderService.getByRangeDate(iDate, fDate, merchantId);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
 export async function updateOrdersByRangeDate(id: number): Promise <any[]> {
    return await OrderService.updateOrdersByRangeDate(id);
}