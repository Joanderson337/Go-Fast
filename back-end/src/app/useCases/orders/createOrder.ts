import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try{
    const {table, product} = req.body;

    const orders = await Order.create({table, product});

    res.status(201).json(orders);

  } catch{
    res.sendStatus(500);
  }
}
