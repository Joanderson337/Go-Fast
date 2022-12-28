import { ReactNode } from 'react';
import { InputErrorMessageContainer } from './styled';

interface IErrorMessage {
  children: ReactNode
}

export const ErrorMessage = ({ children }: IErrorMessage) => {
  return (
    <>
      <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
    </>
  );
};
