import { Order } from '../../../types/Orders';
import { Board, ContainerTable } from './styled';

interface IOrdersBoard {
  title: string
  icon: string
  orders: Order[]
}

export function OrdersBoard({icon, title, orders}: IOrdersBoard){
  return(
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>(1)</span>
      </header>
      <ContainerTable>
        <button type='button'>
          <strong>Mesa 02</strong>
          <span>2 itens</span>
        </button>
      </ContainerTable>
    </Board>
  );
}
