process.env.NODE_ENV = 'test'

import { expect } from "chai";
import OrderFacade from '../../src/facade/Disbursement/facade';
import { db } from '../../src/config/connection/database';
import Order from "../../src/models/Disbursement.model";
import * as Kafka from "../../src/config/stream/kafka";

describe('OrderFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        Order.create({
        id: 1,
        name: 'test',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });

        //Para lanzar pruebas con kafka
        // let topics = [
        //     'pruebas',
        //     'test'
        // ];
        // try{
        //     await Kafka.init(topics);
        //     console.log('Connected to Kafka');

        // }catch(err){
        //     console.log('Error', err);
        // }
    });
  
    // describe('FindAll', () => {
    //     it('should return one user', async () => {
    //         const Order: any[] = await OrderFacade.findAll();
    //         expect(1).equal(Order.length);
    //     });
    // });
});