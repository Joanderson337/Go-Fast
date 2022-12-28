import styled from 'styled-components';

export const ContainerOrders = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: 2.5rem auto;
  display: flex;
  gap: 2rem;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    padding: 0 30px;
  }
`;

