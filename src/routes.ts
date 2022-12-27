import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const routes = Router();

// lista de categoria

routes.get('/categories', listCategories);

// criar categoria

routes.post('/categories', (req, res) => {
  res.send('ok');
});

// lista de produtos

routes.get('/products', (req, res) => {
  res.send('ok');
});

// criar produto

routes.post('/products', (req, res) => {
  res.send('ok');
});

// lista de produtos e categoria

routes.get('/categories/:categoryId/products', (req, res) => {
  res.send('ok');
});

// listar pedidos

routes.get('/orders', (req, res) => {
  res.send('ok');
});

// criar um pedido

routes.post('/orders', (req, res) => {
  res.send('ok');
});

// alterar status do pedido

routes.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

// deletar ordem

routes.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});




