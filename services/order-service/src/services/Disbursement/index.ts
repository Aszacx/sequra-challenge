import OrderService from '../Order/service';
import DisbursementService from './service';
import { TAX_1, TAX_2, TAX_3} from '../../commons/constants/TaxesConstant';
import { MerchantService } from '..';
import * as Kafka from '../../config/stream/kafka';
const cron = require('node-cron');

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findByMerchantId(id: any): Promise<any[]> {
    return await DisbursementService.findByMerchantId(id);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function createDisbursement(filter: any): Promise <any[]> {
    //const filterDate = new Date(filter.disbursement_date); // Endpoint
    const filterDate = new Date(filter.disbursement_date); // Kafka
    let totalAmount: number = 0;
    let totalCommision;
    let disbursement: any = {};
    let response: any = {};
    let orders: any;
    let numberDay = (filterDate.getDay() == 0) ? 7 : filterDate.getDay();      
    let removeDays = 7 + numberDay;
    let iDate = new Date(filterDate.setDate(filterDate.getDate() - (removeDays - 1)));
    let fDate = new Date(filterDate.setDate(iDate.getDate() + 6));
    let nextMonday = new Date(filterDate.setDate(iDate.getDate() + 1));
    let ordersId: any[] = [];

    let merchants: any = await MerchantService.findAll();

    if(merchants) {       
        merchants.forEach(async (merchant: any) => {
            orders = await OrderService.getByRangeDate(iDate, fDate, merchant.pk_merchant_id);
            orders.forEach((order: any) => {
                ordersId.push(order.pk_order_id);
                totalAmount += Number(order.dx_amount);
            });

            totalCommision = calculateCommission(Number(totalAmount.toFixed(2)));
            disbursement = {
                dn_merchant_id: merchant.pk_merchant_id,
                dx_amount: Number(totalAmount.toFixed(2)),
                dx_taxes:  totalCommision,
                dx_status: "in process",
                dd_paid_at: nextMonday.toISOString(),
                db_pending_orders: 0
            }
            let insertDisbursement = await DisbursementService.createDisbursement(disbursement);
        
            if(insertDisbursement.status === 200) {
                ordersId.forEach(async (id: number) => {
                    await OrderService.updateOrdersByRangeDate(id)
                });
            }
        });

        response = {
            status: 200,
            message: "Disbursement process started",
            filter: `StartDate: ${iDate.toISOString()} - "EndDate:  ${fDate.toISOString()}`,
        }
    }
    return response;
}

function calculateCommission(amount: number): number {
    let commision = 0;
    if(amount < 50) {
        commision = Math.floor(amount * TAX_1) / 100;
        console.log("Tarifa 1:", commision);   
    }
    else if (amount >= 50 && amount > 300) {
        commision = Math.floor(amount * TAX_2) / 100;
        console.log("Tarifa 2:", commision);
    }
    else {
        commision = Math.floor(amount * TAX_3) / 100;
        console.log("Tarifa 3:", commision);
    }
    return commision;
}

cron.schedule("0 2 * * 1", async () => {
//cron.schedule("* * * * *", async () => {
    //createDisbursement(new Date().toISOString().toString())
    await Kafka.send("orders", JSON.stringify(new Date().toISOString().toString()))
		.then(() => {
			console.log("Disbursement process started");
		}).catch((err) => {
            console.log("Error Kafka", err);
		});
});