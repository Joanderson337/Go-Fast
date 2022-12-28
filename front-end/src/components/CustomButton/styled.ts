import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  width: 100%;
  background-color: #6A5ACD;
  color: #F8F9FA;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 15px;
  padding-left: 15px;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: #836FFF;
  }
`;
