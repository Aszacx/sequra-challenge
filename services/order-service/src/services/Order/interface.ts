
/**
 * @export
 * @interface IOrderService
 */
export interface IOrderService {

    /**
     * @returns {Promise<any[]>}
     * @memberof IOrderService
     */
     getByRangeDate(iDate: Date, fDate: Date, merchantId: number): Promise<any>;
     updateOrdersByRangeDate(id: number): Promise<any>;

}