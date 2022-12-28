import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginHeadline = styled.p`
  font-weight: 600;
  font-size: 20.8px;
  margin-bottom: 1.25rem;
  color: black;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28.125rem;
`;

export const LoginSubtitle = styled.p`
  color: black;
  padding-bottom: 1.25rem;
  border-bottom: 0.0625rem solid #6c757d;
  width: 100%;
  margin-top: 1.25rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 1.25rem;
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 0.3125rem;
  }

`;
