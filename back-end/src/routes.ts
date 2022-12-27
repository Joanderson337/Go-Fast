import { Router } from 'express';
import path from 'node:path';
import multer from 'multer';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsCategory } from './app/useCases/categories/listProductsCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const routes = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback){
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
});

// lista de categoria

routes.get('/categories', listCategories);

// criar categoria

routes.post('/categories', createCategory);

// lista de produtos

routes.get('/products', listProducts);

// criar produto

routes.post('/products', upload.single('image'), createProduct);

// lista de produtos e categoria

routes.get('/categories/:categoryId/products', listProductsCategory);

// listar pedidos

routes.get('/orders', listOrders);

// criar um pedido

routes.post('/orders', createOrder);

// alterar status do pedido

routes.patch('/orders/:orderId', changeOrderStatus);

// deletar ordem

routes.delete('/orders/:orderId', cancelOrder);




