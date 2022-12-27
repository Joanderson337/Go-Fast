import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsCategory(req: Request, res: Response) {
  try{

    const categoryId = req.params;

    const products = await Product.find().where('categories').equals(categoryId);

    res.json(products);
  }  catch{
    res.sendStatus(500);
  }
}
