import styled from 'styled-components';

type ICustomInputContainer = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<ICustomInputContainer>`
  border: none;
  width: 100%;
  background-color: #E9ECEF;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #343A40;
  border: ${(props) => (props.hasError ? '2px solid #FF6A6A}' : 'none')};
  &::placeholder {
    color: ${(props) =>
    props.hasError ? '#FF6A6A' : '#6C757D'};
  }
  &:focus {
    outline: ${(props) =>
    props.hasError ? 'none' : '2px solid #6C757D'};
  }
`;
