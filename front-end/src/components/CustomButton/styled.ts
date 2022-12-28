import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  width: 100%;
  background-color: #6A5ACD;
  color: #F8F9FA;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  box-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25);
  border: none;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: #836FFF;
  }
`;
