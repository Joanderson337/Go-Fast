import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  background: #ffffff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }
`;

export const StatusContainer = styled.div`
  margin-top: 32px;

  small {
    font-size: 14px;
    opacity: 0.8;
  }

  div {
    margin-top: 8px;
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    color: #333333;
    opacity: 0.8;
    font-size: 14px;
  }
  .order-items {
    margin-top: 16px;

    .item {
      display: flex;
      & + .item {
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
        strong {
          display: block;
          margin-bottom: 4px;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;

  span {
    font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  }
`;

export const Action = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 32px;

    .primary{
      background: #333333;
      border-radius: 48px;
      border: 0;
      color: #fff;
      padding: 12px 24px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .secundary{
      padding: 14px 24px;
      color: #D73035;
      font-weight: bold;
      border: 0;
      background: transparent;
    }
`;
