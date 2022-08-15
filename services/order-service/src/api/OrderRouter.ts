import { Router } from 'express';
import { DisbursementFacade } from '../facade';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

//router.post('/api/v1/disbursements', DisbursementFacade.createDisbursement);

/**
 * GET method route
 * @example http://localhost:PORT/api/v1/disbursements/:id
 * @swagger
 * /api/v1/disbursements/:id:
 *  post:
 *    description: Get all disbursements by merchant_id
 *    tags: ["Disbursements"]
 *    parameters : [
 *      {
 *           name: 'id',
 *           in: 'query',
 *           schema: {
 *             type: number,
 *             example: '1'
 *           },
 *           required: true
 *      },
 *    ]
 *    responses:
 *      200:
 *        description: ok
 *        content:
 *            application/json:
 *             schema:
 *              type: object
 *              properties:
 *                  status:
 *                    type: number
 *                    example: 200
 *                  message:
 *                    type: string
 *                    example: [{
                        "pk_disbursement_id": 226,
                        "dn_merchant_id": 2,
                        "dx_amount": "30059.10",
                        "dx_taxes": "285.56",
                        "dx_status": "in process",
                        "dd_paid_at": "2018-01-16",
                        "db_pending_orders": false
                    }]
 *      500:
 *        description: Internal Server Error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 *      400:
 *        description: Bad Request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 *      401:
 *        description: Unauthorized
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 *      404:
 *        description: Not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorTo'
 */
router.get('/api/v1/disbursements/:id', DisbursementFacade.findByMerchantId);


/**
 * GET method route
 * @example http://localhost:PORT/ping
 * @swagger
 * /ping/:
 *  post:
 *    description: Test service
 *    tags: ["Ping"]
 *    responses:
 *      200:
 *        description: Pong
 *        content:
 *          appication/json:
 *            example:
 *              status: 200
 *              message: pong
 */
router.get('/ping', async (req, res) => {
    res.send('pong');
});

/**
 * @export {express.Router}
 */
export default router;