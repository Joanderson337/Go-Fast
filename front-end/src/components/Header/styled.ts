import styled from 'styled-components';

export const ContainerHeader = styled.header`
  background: #6A5ACD;

  display: flex;
  justify-content: center;
  height: 12.375rem;
  align-items: center;



  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const ContentHeader = styled.div`
  width: 100%;
  max-width: 76rem;

  display: flex;
  align-items: center;
  justify-content: space-between;


  .page-details{
    h1 {
      font-size: 2rem;
      line-height: 120%;
      color: #FFFFFF;
    }
    h2{
      font-size: 1rem;
      line-height: 150%;
      font-weight: 400;
      color: #FFFFFF;
      opacity: 0.9;
      margin-top: 0.375rem;
    }
  > button {
    margin-top: 15px;
    background: transparent;
    border: 0;
    color: #FFFFFF;

    img{
      width: 25px;
      height: 25px;
    }
  }
  }
`;
