import styled from 'styled-components';

type ICustomInputContainer = {
  hasError?: boolean
}

export const CustomInputContainer = styled.input<ICustomInputContainer>`
  border: none;
  width: 100%;
  background-color: #E9ECEF;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
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
