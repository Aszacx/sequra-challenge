import DisbursementFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function createDisbursement(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {    
        const response = await DisbursementFacade.createDisbursement(req.body);
        res.status(HttpStatusCode.OK).json(response);
    } catch (error) {
        next(error);
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findByMerchantId(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {    
        const response = await DisbursementFacade.findByMerchantId(req.params.id);
        res.status(HttpStatusCode.OK).json(response);
    } catch (error) {
        next(error);
    }
}