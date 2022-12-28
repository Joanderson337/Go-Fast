import { Action, ContainerModal, OrderDetails, Overlay, StatusContainer, Total } from './styled';
import { Order } from '../../../@types/Orders';
import { FormatCurrency } from '../../../utils/formatCurrency';
import { useEffect } from 'react';
import { Icon } from '../../../assets/Icon';

interface IOrderModal {
  visible: boolean;
  order: Order | null;
  onClose: () => void
}

export function OrderModal({visible, order, onClose}: IOrderModal){

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent){
      if(event.key === 'Escape'){
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

  },[onClose]);

  if(!visible || !order){
    return null;
  }

  const total = order.products.reduce((acc, {product, quantity}) => {
    return acc + (product.price * quantity);
  }, 0);


  return(
    <Overlay>
      <ContainerModal>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button' onClick={onClose}>
            <Icon name='x' />
          </button>
        </header>

        <StatusContainer>
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'DONE' && '✅'}
              {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
              {order.status === 'WAITING' && '🕧'}
            </span>
            <strong>
              {order.status === 'DONE' && 'Pronto!'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'WAITING' && 'Fila de espera'}
            </strong>
          </div>
        </StatusContainer>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({_id, product, quantity}) => (
              <div className="item" key={_id}>
                <img
                  src=""
                  alt={product.name}
                  width="56"
                  height="28.5s"
                />
                <span className="quantity">{quantity}x</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <strong>{FormatCurrency(product.price)}</strong>
                </div>
              </div>
            ))}
          </div>
          <Total>
            <span>Total:</span>
            <strong>{FormatCurrency(total)}</strong>
          </Total>
        </OrderDetails>

        <Action>
          <button type='button' className="primary">
            <span>👩‍🍳</span>
            <span>Iniciar Produção</span>
          </button>
          <button type='button' className="secundary">
            <span>Cancelar Pedido</span>
          </button>
        </Action>

      </ContainerModal>
    </Overlay>
  );
}
