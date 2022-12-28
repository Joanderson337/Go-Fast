import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerModal = styled.div`
  background: #ffffff;
  width: 30rem;
  border-radius: 0.5rem;
  padding: 2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }
`;

export const StatusContainer = styled.div`
  margin-top: 2rem;

  small {
    font-size: 0.875rem;
    opacity: 0.8;
  }

  div {
    margin-top: 0.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    color: #333333;
    opacity: 0.8;
    font-size: 0.875rem;
  }
  .order-items {
    margin-top: 1rem;

    .item {
      display: flex;
      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 0.375rem;
      }

      .quantity {
        font-size: 0.875rem;
        color: #666;
        display: block;
        min-width: 1.25rem;
        margin-left: 0.75rem;
      }

      .product-details {
        margin-left: 0.25rem;
        strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        span {
          font-size: 0.875rem;
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
  margin-top: 1.5rem;

  span {
    font-weight: 500;
  font-size: 0.875rem;
  opacity: 0.8;
  }
`;

export const Action = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 2rem;

    .primary{
      background: #333333;
      border-radius: 3rem;
      border: 0;
      color: #fff;
      padding: 0.75rem 1.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .secundary{
      padding: 0.875rem 1.5rem;
      color: #D73035;
      font-weight: bold;
      border: 0;
      background: transparent;
    }
`;
