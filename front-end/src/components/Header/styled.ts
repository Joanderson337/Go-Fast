import styled from 'styled-components';

export const ContainerHeader = styled.header`
  background: #6A5ACD;

  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const ContentHeader = styled.div`
  width: 100%;
  max-width: 1216px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details{
    h1 {
      font-size: 32px;
      line-height: 120%;
      color: #FFFFFF;
    }
    h2{
      font-size: 16px;
      line-height: 150%;
      font-weight: 400;
      color: #FFFFFF;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
