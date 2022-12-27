import { orders } from '../../mocks/orders';
import { OrdersBoard } from './OrdersBoard';
import {  ContainerOrders } from './styled';

export function Orders(){
  return(
    <ContainerOrders>
      <OrdersBoard
        icon='🕧'
        title='Fila de espera'
        orders={orders}
      />
    </ContainerOrders>
  );
}
