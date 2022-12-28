import { CustomButtonContainer } from './styled';

export function CustomButton ({  ...rest } ) {
  return (
    <CustomButtonContainer {...rest} />
  );
}
